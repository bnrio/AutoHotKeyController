
import { exec } from 'child_process';

// find the path for shorcuts folder:
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// file path:
let correctDir = __dirname.replace('functions', '') // fix fucking filepath including this folder.
const path = `${correctDir}/shortcuts/`; 

// export run function
 export const runShortcut = (fileName) => {

    exec(`${path}${fileName}`, function(err, data) {  
        //  console.log(err)
        //  console.log(`${fileName} Executed.`);                       
     });  
 }

