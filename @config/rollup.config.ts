import resolve from '@rollup/plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import camelCase from 'lodash.camelcase';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import banner from 'rollup-plugin-banner2';
import * as pkg from '../package.json';

const LIBRARY_NAME = 'nanogram';
const BANNER_TEXT = `/**
*
* ${pkg.name}
*
* @version ${pkg.version}
* @author ${pkg.author}
* @email: ${pkg.email}
* @license: ${pkg.license}
*
**/\n\n`;

export default {
  input: `src/${LIBRARY_NAME}.ts`,
  output: [
    // Browser-friendly UMD build
    {
      file: pkg.browser,
      name: camelCase(LIBRARY_NAME),
      format: 'umd',
      sourcemap: true,
      compact: true,
    },
    // ES module (for bundlers) build.
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      compact: true,
    },
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    json(),
    typescript({ useTsconfigDeclarationDir: true }),
    resolve(),
    sourceMaps(),
    banner(() => BANNER_TEXT),
  ],
};
