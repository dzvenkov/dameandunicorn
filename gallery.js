const dialog=document.querySelector('dialog'),image=dialog.querySelector('img'),count=document.querySelector('#count'),items=[...document.querySelectorAll('.gallery button')];let current=0,opener;
function show(i){current=(i+items.length)%items.length;const thumb=items[current].querySelector('img');image.src=items[current].dataset.full;image.alt=thumb.alt;count.textContent=`${current+1} / ${items.length}`;}
items.forEach((button,i)=>button.addEventListener('click',()=>{opener=button;show(i);dialog.showModal();document.body.classList.add('viewer-open');}));
document.querySelector('#close').onclick=()=>dialog.close();document.querySelector('#prev').onclick=()=>show(current-1);document.querySelector('#next').onclick=()=>show(current+1);
dialog.addEventListener('close',()=>{document.body.classList.remove('viewer-open');image.removeAttribute('src');opener?.focus();});dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();show(current-1);}if(e.key==='ArrowRight'){e.preventDefault();show(current+1);}});
let start;dialog.addEventListener('touchstart',e=>{start=e.changedTouches[0].clientX;},{passive:true});dialog.addEventListener('touchend',e=>{const delta=e.changedTouches[0].clientX-start;if(Math.abs(delta)>60)show(current+(delta<0?1:-1));},{passive:true});
document.querySelectorAll('video').forEach(v=>v.addEventListener('play',()=>document.querySelectorAll('video').forEach(other=>{if(other!==v)other.pause();})));

/* A small reading-progress line and one-time entrances; native scrolling stays intact. */
(() => {
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.prepend(progress);
  let frame = 0;
  function paintProgress() {
    frame = 0;
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    const fraction = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
    progress.style.transform = 'scaleX(' + fraction + ')';
  }
  function queueProgress() {
    if (!frame) frame = requestAnimationFrame(paintProgress);
  }
  window.addEventListener('scroll', queueProgress, { passive: true });
  window.addEventListener('resize', queueProgress);
  window.addEventListener('pageshow', queueProgress);
  if ('ResizeObserver' in window) new ResizeObserver(queueProgress).observe(document.querySelector('main'));
  paintProgress();

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;
  const active = new Set();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      if (reducedMotion.matches || entry.target.contains(document.activeElement)) return;
      const animation = entry.target.animate([
        { opacity: 0.35, transform: 'translateY(24px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], {
        duration: 650,
        easing: 'cubic-bezier(.2,.65,.25,1)'
      });
      active.add(animation);
      animation.finished.then(() => active.delete(animation), () => active.delete(animation));
    });
  }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
  document.querySelectorAll('.photo-chapter h2, .gallery figure').forEach(el => observer.observe(el));
  document.addEventListener('focusin', () => {
    active.forEach(animation => {
      if (animation.effect.target.contains(document.activeElement)) animation.finish();
    });
  });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) active.forEach(animation => animation.cancel());
  });
})();
