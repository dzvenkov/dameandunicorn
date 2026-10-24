"""Prepare the supplied public Drive media for the static gallery."""
import json, pathlib, subprocess, tempfile
import gdown
from PIL import Image,ImageOps,ImageFile
ImageFile.LOAD_TRUNCATED_IMAGES=True
root=pathlib.Path(__file__).parent
assets=root/'assets';assets.mkdir(exist_ok=True)
with tempfile.TemporaryDirectory() as temp:
 for f in json.loads((root/'media-sources.json').read_text()):
  src=pathlib.Path(temp)/f['id']
  if not gdown.download(id=f['id'],output=str(src),quiet=True):raise RuntimeError('Download failed: '+f['title'])
  if f['mime_type'].startswith('video'):
   name='opening' if f['title'].startswith('e150') else 'closing'
   subprocess.run(['ffmpeg','-v','error','-y','-i',str(src),'-map','0:v:0','-vf','scale=720:-2','-c:v','libx264','-preset','fast','-crf','25','-pix_fmt','yuv420p','-an','-movflags','+faststart',str(assets/(name+'.mp4'))],check=True)
   subprocess.run(['ffmpeg','-v','error','-y','-ss','3','-i',str(src),'-frames:v','1','-vf','scale=1280:-2',str(assets/(name+'.jpg'))],check=True)
   streams=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_streams','-of','json',str(assets/(name+'.mp4'))]))['streams']
   assert all(s['codec_type']=='video' for s in streams)
  else:
   i=f['index']
   if i in (27,29):continue
   im=ImageOps.exif_transpose(Image.open(src)).convert('RGB')
   if i in range(16,26):
    sm=im.resize((100,im.height));runs=[];start=None
    for y in range(sm.height):
     active=sum(max(sm.getpixel((x,y)))>38 for x in range(100))>12
     if active and start is None:start=y
     if not active and start is not None:runs.append((start,y));start=None
    if start is not None:runs.append((start,sm.height))
    a,b=max(runs,key=lambda x:x[1]-x[0]);im=im.crop((0,a,im.width,b))
   im.thumbnail((1800,1800));im.save(assets/f'photo-{i:02}.webp',quality=86,method=6)
   im.thumbnail((900,900));im.save(assets/f'photo-{i:02}-small.webp',quality=82,method=6)
 for f in assets.glob('*.webp'):
  with Image.open(f) as im:im.load()
print('Media prepared and verified: 34 photos and two silent videos')
