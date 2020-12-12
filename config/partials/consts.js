import path from 'path';
import minimist from 'minimist';

const BASE_FOLDER = path.join(__filename, '../../');
const ARGV = minimist(process.argv.slice(2));
const LIBRARY_NAME_SHORT = 'nanogram';

export { BASE_FOLDER, ARGV, LIBRARY_NAME_SHORT };
