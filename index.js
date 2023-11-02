import * as fs from 'fs';
import 'ag-psd/initialize-canvas.js'; // only needed for reading image data and thumbnails
import { readPsd } from 'ag-psd';

// Test opening a PSB file

const buffer = fs.readFileSync('template.psb');
const psd = readPsd(buffer);

console.log(psd);

// Save a PNG thumbnail

psd.canvas.toBuffer((err, result)=>{
    if(err){
        console.error(err);
    } else {
        fs.writeFileSync('thumbnail.png', result);
    }
});