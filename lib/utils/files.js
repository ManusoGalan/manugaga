import fs from 'fs';
import pathLib from 'path';

export const getAllFiles = (path) => {
    return fs.readdirSync(path).reduce(
        (paths, currentPath) => {
            let currentAbsPath = pathLib.join(path, currentPath);
            if(fs.statSync(currentAbsPath).isFile()){
                paths.push(currentAbsPath);
            } else {
                paths.push(getAllFiles(currentAbsPath));
            }
            return paths.flat();
        },
        []
    );
}