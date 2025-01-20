import {dirname} from 'node:path';
import {fileURLToPath}  from 'node:url';

export const currentDir = dirname(dirname(fileURLToPath(import.meta.url)));
