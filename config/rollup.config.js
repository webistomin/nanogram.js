import resolve from '@rollup/plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import capitalize from 'lodash.capitalize';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import banner from 'rollup-plugin-banner2';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';

import { BROWSERS_LIST } from './partials/browsers';
import { EXTENSIONS } from './partials/extensions';
import { EXTERNAL } from './partials/external';
import { ARGV, LIBRARY_NAME_SHORT } from './partials/consts';
import { BANNER } from './partials/banner';
import { GLOBALS } from './partials/globals';

const BASE_CONFIG = {
  input: 'src/nanogram.ts',
  plugins: {
    common: [json(), typescript(), sourceMaps()],
    babel: {
      exclude: 'node_modules/**',
      extensions: EXTENSIONS,
      babelHelpers: 'bundled',
      presets: [
        [
          '@babel/preset-env',
          {
            targets: BROWSERS_LIST,
            exclude: ['transform-async-to-generator', 'transform-regenerator', 'transform-typeof-symbol'],
            loose: true,
          },
        ],
      ],
      plugins: [
        ['module:fast-async', { spec: true }],
        ['@babel/transform-for-of', { assumeArray: true }],
      ],
    },
  },
};

const BUILD_FORMATS = [];

if (!ARGV.format || ARGV.format === 'esm') {
  const ES_CONFIG = {
    ...BASE_CONFIG,
    external: EXTERNAL,
    output: {
      name: capitalize(LIBRARY_NAME_SHORT),
      dir: 'dist/esm',
      format: 'esm',
      exports: 'named',
      preserveModules: true,
    },
    plugins: [
      ...BASE_CONFIG.plugins.common,
      babel(BASE_CONFIG.plugins.babel),
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

if (!ARGV.format || ARGV.format === 'es') {
  const ES_CONFIG = {
    ...BASE_CONFIG,
    external: EXTERNAL,
    output: {
      name: capitalize(LIBRARY_NAME_SHORT),
      file: 'dist/nanogram.es.js',
      format: 'esm',
      exports: 'named',
    },
    plugins: [
      ...BASE_CONFIG.plugins.common,
      babel(BASE_CONFIG.plugins.babel),
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
      file: 'dist/nanogram.cjs.js',
      format: 'cjs',
      exports: 'named',
      globals: GLOBALS,
    },
    plugins: [
      ...BASE_CONFIG.plugins.common,
      babel(BASE_CONFIG.plugins.babel),
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
      file: 'dist/nanogram.iife.js',
      format: 'iife',
      globals: GLOBALS,
    },
    plugins: [
      ...BASE_CONFIG.plugins.common,
      babel(BASE_CONFIG.plugins.babel),
      resolve({
        extensions: ['.mjs', '.js', '.json', '.node', '.ts'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      terser({
        output: {
          ecma: 5,
          comments: false,
        },
      }),
    ],
  };

  BUILD_FORMATS.push(IIFE_CONFIG);
}

export default BUILD_FORMATS;
