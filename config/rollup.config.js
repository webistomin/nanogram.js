import resolve from '@rollup/plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import capitalize from 'lodash.capitalize';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import banner from 'rollup-plugin-banner2';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
// import babel from '@rollup/plugin-babel';

import { PACKAGE_JSON } from './partials/package';
// import { BROWSERS_LIST } from './partials/browsers';
// import { EXTENSIONS } from './partials/extensions';
import { EXTERNAL } from './partials/external';
import { ARGV, LIBRARY_NAME_SHORT } from './partials/consts';
import { BANNER } from './partials/banner';
import { GLOBALS } from './partials/globals';

const BASE_CONFIG = {
  input: 'src/nanogram.ts',
  plugins: {
    common: [
      json(),
      typescript(),
      sourceMaps(),
      terser({
        output: {
          ecma: 5,
          comments: false,
        },
      }),
    ],
    // babel: {
    //   exclude: 'node_modules/**',
    //   extensions: EXTENSIONS,
    //   presets: [
    //     [
    //       '@babel/preset-env',
    //       {
    //         targets: BROWSERS_LIST,
    //       },
    //     ],
    //   ],
    // },
  },
};

const BUILD_FORMATS = [];

if (!ARGV.format || ARGV.format === 'es') {
  const ES_CONFIG = {
    ...BASE_CONFIG,
    external: EXTERNAL,
    output: {
      name: capitalize(LIBRARY_NAME_SHORT),
      file: PACKAGE_JSON.module,
      format: 'esm',
      exports: 'named',
    },
    plugins: [
      ...BASE_CONFIG.plugins.common,
      // babel(BASE_CONFIG.plugins.babel),
      resolve({
        extensions: ['.mjs', '.js', '.json', '.node', '.ts'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      banner(() => BANNER),
    ],
  };

  BUILD_FORMATS.push(ES_CONFIG);
}

if (!ARGV.format || ARGV.format === 'cjs') {
  const CJS_CONFIG = {
    ...BASE_CONFIG,
    external: EXTERNAL,
    output: {
      name: capitalize(LIBRARY_NAME_SHORT),
      compact: true,
      file: PACKAGE_JSON.main,
      format: 'cjs',
      exports: 'named',
      globals: GLOBALS,
    },
    plugins: [
      ...BASE_CONFIG.plugins.common,
      // babel(BASE_CONFIG.plugins.babel),
      resolve({
        extensions: ['.mjs', '.js', '.json', '.node', '.ts'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      banner(() => BANNER),
    ],
  };

  BUILD_FORMATS.push(CJS_CONFIG);
}

if (!ARGV.format || ARGV.format === 'iife') {
  const IIFE_CONFIG = {
    ...BASE_CONFIG,
    external: EXTERNAL,
    output: {
      compact: true,
      name: capitalize(LIBRARY_NAME_SHORT),
      file: PACKAGE_JSON.browser['dist/nanogram.js'],
      format: 'iife',
      globals: GLOBALS,
    },
    plugins: [
      ...BASE_CONFIG.plugins.common,
      // babel(BASE_CONFIG.plugins.babel),
      resolve({
        extensions: ['.mjs', '.js', '.json', '.node', '.ts'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
    ],
  };

  BUILD_FORMATS.push(IIFE_CONFIG);
}

export default BUILD_FORMATS;
