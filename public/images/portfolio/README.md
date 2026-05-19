# Portfolio photos

Drop original photos (any format/size) into the matching subfolder, then run
the optimizer from the project root:

```
npm run optimize
```

Photos are resized to max 1920px wide, re-encoded as quality-80 JPEG with
mozjpeg, and overwritten in place. Typical results: 4–6 MB phone photos
shrink to ~200–400 KB with no visible quality loss.

## Folder layout

- `paving/` — new installs, finished driveways and parking lots
- `sealcoating/` — fresh seal applications, sealcoat in progress, equipment
- `striping/` — parking lot stripes, fire lanes, stencils, ADA markings
- `repair/` — pothole patches, crack fills, before/after of repair work
- `before-after/` — paired shots labeled `1-before.jpg` / `1-after.jpg` (for the slider, if we add one later)

These folder names match the service slugs on the site, but the optimizer
doesn't care — it processes everything recursively. New subfolders are fine.

## Tips

- Keep a backup of the raw originals somewhere else first — the optimizer
  overwrites in place.
- HEIC (iPhone) photos are supported.
- The script honors EXIF rotation, so portrait shots from a phone stay portrait.
