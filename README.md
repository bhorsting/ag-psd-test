# AG-PSD test PSB Import

## Installation
### on Mac, first install node-canvas dependencies:
(ag-psd also works with skia-canvas with some small tweaks, but that's out of scope for this test)
``` bash
brew install pkg-config cairo libpng jpeg giflib pango
```
### on any platform:
``` bash
npm i
node index.js
```
Replace `template.psb` with your own template, this one came out of Photopea.