//  npm install --save inquirer
// 

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";


inquirer
  .prompt([
    {message :"Please Enter URL / Text to Generate QR Code ",name:"URL"}
])
  .then((answers) => {
    const URL = answers.URL
    var qr_svg = qr.image(URL);
qr_svg.pipe(fs.createWriteStream('QR_image.png'));

var svg_string = qr.imageSync(URL, { type: 'svg' });

  })
  .catch((error) => {
    if (error.isTtyError) {
      "Prompt couldn't be rendered in the current environment"
    } else {
       "Something else went wrong"
    }
  });

//   URl Generator

