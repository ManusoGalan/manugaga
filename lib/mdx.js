import path from 'path'
import {getAllFiles} from './utils/files.js'

const root = process.cwd()

export const getAllFilesFrontMatter = (folder) => {
    const prefixPaths = path.join(root, 'data', folder)
  
    const files = getAllFiles(prefixPaths)
}