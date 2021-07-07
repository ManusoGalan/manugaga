import fs from 'fs';
import pathLib from 'path';

export const getAllFilesRecursive = (path) => {
    return fs.readdirSync(path).reduce(
        (paths, currentPath) => {
            let currentAbsPath = pathLib.join(path, currentPath).replace(/\\/g, '/');
            if(fs.statSync(currentAbsPath).isFile()){
                paths.push(currentAbsPath)
            } else {
                paths.push(getAllFiles(currentAbsPath));
            }
            return paths.flat();
        },
        []
    );
}


export const getFileRecursive = (path, file) => {
    return fs.readdirSync(path).reduce(
        (paths, currentPath) => {
            let currentAbsPath = pathLib.join(path, currentPath).replace(/\\/g, '/');
            if(fs.statSync(currentAbsPath).isFile()){
                if(currentPath.split('/').pop() === file) paths.push(currentAbsPath);
            } else {
                paths.push(getAllFiles(currentAbsPath));
            }
            return paths.flat();
        },
        []
    );
}

export const removeArticleExtension = (article) => {
    return article.replace(/\.(mdx|md)/, '')
}