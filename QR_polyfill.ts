//import 'source-map-support/register';
import * as fs from 'fs';
import * as path from 'path';
import 'babel-polyfill';
import * as brandedQRCode from 'branded-qr-code';

import { generate } from '../QR_Code_Gen/node_modules/branded-qr-code/lib'

async function stuff () {

    let qrs = { name: 'generatedQR', logo: 'mypic', text: 'STEPH AND DUCKY ARE LEGENDS', ratio: 5 };

    let logoPath = path.resolve(__dirname, `./output/${qrs.logo}-resized.png`);
    let dst = path.resolve(__dirname, `./output/${qrs.name}.png`);

    let buffer = await brandedQRCode.generate({text: qrs.text, path: logoPath, ratio:qrs.ratio, opt: { errorCorrectionLevel: 'Q', margin: 2 },});
        
    fs.writeFile(dst, buffer, (err) => {
        if (err) throw err;
    console.log('The file has been saved!');
    });

    console.log(buffer);

}

stuff();