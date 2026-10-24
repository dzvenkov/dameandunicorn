# UnicornSite — Dame and Unicorn

Project handoff, 24 October 2026. Based on the completed implementation conversation; re-check the repository and deployment before making further changes.

## Purpose and links

A super-lightweight gallery presenting the making of the stop-motion film **Dame and Unicorn**.

- Live site: https://thedameandtheunicorn.com/
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

### Crafting the Puppets

The next chapter, after the finished characters, is **Crafting the Puppets** (“Изготовление кукол”). Screenshot numbers 1–8 map to asset IDs 01, 00, 07, 30, 28, 32, 21, 33, in that order. Move these eight existing photos out of the remaining gallery; do not duplicate them. All 34 photos and both videos are preserved. Unassigned photos still follow in their previous order.

### Sketches & Finishing Touches

After Crafting the Puppets, show **Sketches & Finishing Touches**: original asset IDs 20, 05, 02, 06. These show a costumed puppet beside her sketch (mark 1), face painting (2), costume sketches (3), and the unnumbered set sketch. Context-only fragments of adjacent photographs in the supplied screenshots are not new selections; photo-07 stays in Crafting the Puppets. Corrected photo-20's inaccurate alt description. All 34 photographs remain present once; 12 remain unassigned.

### Small Props, Big Details

After Sketches & Finishing Touches, show **Small Props, Big Details** (the user's props group): original asset IDs 08, 09, 11, 12, 31, 34, 35. These are the chairs, upholstered chair, sofa, tiny paintbrush, guitar construction sketch/part, guitar parts, and finished miniature instrument. Repeated sofa/paintbrush views are included once. Partial adjacent street-set and puppet images are context only. Corrected alt descriptions of photo-09 and photo-31. All 34 photographs remain present once; five unassigned images remain: 10, 13, 14, 15, 26. Videos and existing chapters are preserved.

### A World in Miniature

The final photo chapter, after Small Props, Big Details, is **A World in Miniature** (sets/decorations). It contains asset IDs 10, 13, 14, 15, 26: street set on the workbench, shopfronts, car/street detail, illuminated night street, and pub interior with animator. Adjacent cropped chair, sofa, costume and guitar images in the reference screenshots remain in their previously assigned chapters. All 34 photos are now grouped into five chapters; no unassigned gallery remains. Opening and closing videos are unchanged.

## Custom domain — 24 October 2026

Purchased domain: **thedameandtheunicorn.com**, registrar and DNS provider Porkbun.
Repository Actions secrets: PORKBUN_API_KEY and PORKBUN_SECRET_API_KEY. Never print or commit their values.
Workflow .github/workflows/domain.yml authenticates and reconciles DNS using these secrets. It removes only known Porkbun parking records and stops on unexpected web-record conflicts. Other DNS records are preserved.
DNS configured and API-verified: apex A records 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153; www CNAME dzvenkov.github.io. TTL 600.
Successful setup run: https://github.com/dzvenkov/dameandunicorn/actions/runs/40131400549
Remaining user step: set the Pages Custom domain to thedameandtheunicorn.com in repository Settings > Pages. The connected GitHub tools cannot modify this administration setting. Then verify DNS propagation and HTTPS certificate issuance, enable Enforce HTTPS, and confirm apex and www serve/redirect correctly. Do not report the domain live until checked.

### Public domain verification

Verified on 24 October 2026: public DNS resolves to GitHub Pages; https://thedameandtheunicorn.com/ serves the gallery with a valid certificate; https://www.thedameandtheunicorn.com/ redirects to the apex HTTPS address. CSS, JavaScript, opening poster and sample photo return HTTP 200. Custom domain is now configured in Pages.
Remaining step: **Enforce HTTPS** in repository Settings > Pages. HTTP currently remains HTTP for both hostnames. Public verification workflow .github/workflows/check-domain.yml intentionally fails until these redirects are enabled. Verification run: https://github.com/dzvenkov/dameandunicorn/actions/runs/40131607649

### Added instrument ensemble

Added IMG_2145.jpeg at the end of Small Props, Big Details, after the guitar close-up. New optimized assets miniature-orchestra.webp (1170 × 1155) and miniature-orchestra-small.webp (900 px wide) show guitars, saxophone and drum kit. Total: 35 photographs across five chapters. Original upload remains untouched.

### Additional character and set photographs

Added IMG_2099.jpeg as guitarist-portrait.webp immediately after photo-03 in The Characters: Puppets & Personalities. This is a new standing solo portrait, distinct from the seated photo-03 and paired photo-04. Removed only the Instagram screenshot interface (crop 0,188–710,1262). Added IMG_2100.jpeg as apollo-miniature.webp and IMG_2115.jpeg as street-details.webp at the end of A World in Miniature. Landscape/set images have 900 px responsive copies. Total: 38 photographs; all prior images and videos retained.
