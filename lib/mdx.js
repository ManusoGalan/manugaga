import path from 'path'
import { getAllFilesRecursive, getFileRecursive } from '@/lib/utils/files'
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd()

export const getAllFilesFrontMatter = (folder) => {
    const prefixPaths = path.join(root, 'data', folder);
    const files = getAllFilesRecursive(prefixPaths);

    return files.reduce((postsMatter, currentPostPath) => {
        const fileData = fs.readFileSync(currentPostPath, 'utf-8');
        const { data } = matter(fileData);
        if (!data.draft){
            postsMatter.push({...data, articleFile: currentPostPath.split('/').pop()});
        }
        return postsMatter
    }, []);
}

export const getFileFromFolderAsHTML = async (folder, fileName) => {
    const filePath = getFileRecursive(path.join(root, 'data', folder), fileName)
    const {data, content} = matter(fs.readFileSync(filePath[0], 'utf-8'));

    const transformedData = await serialize(content);
    return {
        transformedData,
        data: {
            readingTime: readingTime(content),
            ...data
        }
    };
}