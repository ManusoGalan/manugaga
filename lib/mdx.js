import path from 'path'
import {getAllFiles} from './utils/files.js'
import fs from 'fs';
import matter from 'gray-matter';

const root = process.cwd()

export const getAllFilesFrontMatter = (folder) => {
    const prefixPaths = path.join(root, 'data', folder);
    const files = getAllFiles(prefixPaths);

    return files.reduce((postsMatter, currentPostPath) => {
        const fileData = fs.readFileSync(currentPostPath, 'utf-8');
        const { data } = matter(fileData);
        if (!data.draft){
            postsMatter.push({...data});
        }
        return postsMatter
    }, []);
}