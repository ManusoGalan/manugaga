import fs from 'fs';

export const getAllFiles = (path) => {
    return fs.readdirSync(path).reduce(
        (paths, currentPath) => {
            if(fs.statSync(currentPath).isFile()){
                paths.push(currentPath);
            } else {
                getAllFiles(currentPath);
            }
        },
        []
    );
}