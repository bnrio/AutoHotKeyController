import fs from 'fs';
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const getFileNamesFromDirectory = async () => {
    let correctDir = __dirname.replace('functions', '') // fix fucking filepath including this folder.
    const directory = join(correctDir, 'shortcuts'); 
    const fileNames = await fs.promises.readdir(directory);
    return fileNames;
}

