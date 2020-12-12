import fs from 'fs';
import path from 'path';
import { BASE_FOLDER } from './consts';

export const BROWSERS_LIST = fs.readFileSync(path.resolve(BASE_FOLDER, '.browserslistrc')).toString().split('\n');
