# UnicornSite — Dame and Unicorn

Project handoff, 24 October 2026. Based on the completed implementation conversation; re-check the repository and deployment before making further changes.

## Purpose and links

A super-lightweight gallery presenting the making of the stop-motion film **Dame and Unicorn**.

- Live site: https://dzvenkov.github.io/dameandunicorn/
- Source repository: https://github.com/dzvenkov/dameandunicorn
- Source media folder: https://drive.google.com/drive/folders/1-8196JtJq_F3zpceJoKnZLXEMhff4Amw
- GitHub owner: dzvenkov. Main branch: main. Hosting: GitHub Pages.

## Agreed design and behavior

- Main title **Dame and Unicorn**, subtitle **Making of**. User-requested photo chapter headings are now included; individual captions will be supplied gradually.
- Dark theme: warm charcoal, subtle tonal variation/amber glow, ivory text. More interesting than flat pure black.
- Order: large opening video from e150a9…mp4, photo gallery, large closing video from b3940d…mp4.
- Both published videos must have their audio streams physically removed; muting playback alone is insufficient.
- Large gallery images that can be inspected without opening each one: two columns on desktop, one on phones, with full image proportions preserved.
- Optional enlarged-photo viewer with navigation. Keyboard support includes arrows and Escape; mobile navigation should remain usable.
- Minimal page chrome: no extra navigation, captions, or editorial sections unless requested.
- Plain HTML/CSS and minimal JavaScript. Optimized images and progressive loading. Videos use poster stills, standard controls, no autoplay, and load on demand.
- Leave original Drive files untouched.

## Completed state reported in the previous work

- Source folder contained 36 images and two MP4 videos.
- Published gallery contains 34 photos: two repeated screenshot photos were replaced by cleaner copies; screenshot borders were trimmed where appropriate.
- Both silent video copies and all gallery photos were committed to the repository.
- GitHub Actions build and deployment succeeded; live page and photo enlargement/navigation were reported checked.
- No remaining implementation blocker was reported. Future work is iteration on the existing site.

## Implementation and deployment lessons

- Treat the current repository as the source of truth; inspect its files and workflows before editing. Exact current filenames and workflow names are not captured in this handoff.
- Shell Git upload previously failed because credentials were unavailable. Connected GitHub tools worked, but individual binary uploads through the API were very slow.
- The successful approach used GitHub Actions to fetch the public Drive materials, process them, commit the prepared media, and deploy. FFmpeg must be installed on the runner for video processing.
- Prefer reusing committed, optimized media for styling changes. Avoid repeating media downloads, conversions, or uploads unless the change requires it.
- Report publishing accurately: uploaded Git objects are not visible repository changes until committed and the branch is updated. A commit is not proof that Pages deployment succeeded.
- For media edits, verify both videos still contain no audio streams. For layout edits, check mobile and desktop, image proportions, asset links, and viewer controls. Verify deployment after publishing.
- Do not claim that work keeps running after a chat turn unless a separately launched service such as GitHub Actions is actually running. Link the run when relevant.

## Instructions for future work chats

Continue this existing GitHub Pages site rather than rebuilding or moving hosting. Read the current repository first, preserve the agreed design and media order unless the user changes them, implement the requested modification, run checks appropriate to it, and report the resulting commit/deployment and any limitations. Keep progress updates brief and factual.

Suggested opening request: “Continue the Dame and Unicorn site using this project summary. Inspect the current repository, then implement: [requested change].”

## Photo grouping — 24 October 2026

Immediately after the unchanged opening video, show **The Characters: Puppets & Personalities** (the user's “Куклы и образы”). Original asset IDs in the requested order: 03, 04, 16, 17, 18, 19, 22, 24, 23, 25. These correspond to screenshot marks 1–9 and 11; no separate photo 10 was supplied. The repeated view of photo-24 is included once. Remaining photos follow in their original order for later grouping. All 34 photos remain present once. Individual captions have not yet been supplied.
