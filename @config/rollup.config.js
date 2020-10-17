import fs from 'fs';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import capitalize from 'lodash.capitalize';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import banner from 'rollup-plugin-banner2';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import minimist from 'minimist';

import * as pkg from '../package.json';

// Get browserslist config and remove ie from es build targets
const esbrowserslist = fs.readFileSync(path.resolve('.', '.browserslistrc')).toString().split('\n');

const argv = minimist(process.argv.slice(2));

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

const baseConfig = {
  input: `src/${LIBRARY_NAME}.ts`,
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
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts'],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: esbrowserslist,
          },
        ],
      ],
    },
  },
  watch: {
    include: 'src/**',
  },
};

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
};

const buildFormats = [];

if (!argv.format || argv.format === 'es') {
  const esConfig = {
    ...baseConfig,
    external,
    output: {
      name: capitalize(LIBRARY_NAME),
      file: pkg.module,
      format: 'esm',
      exports: 'named',
    },
    plugins: [
      ...baseConfig.plugins.common,
      babel(baseConfig.plugins.babel),
      resolve({
        extensions: ['.mjs', '.js', '.json', '.node', '.ts'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      banner(() => BANNER_TEXT),
    ],
  };
  buildFormats.push(esConfig);
}

if (!argv.format || argv.format === 'cjs') {
  const cjsConfig = {
    ...baseConfig,
    external,
    output: {
      name: capitalize(LIBRARY_NAME),
      compact: true,
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      globals,
    },
    plugins: [
      ...baseConfig.plugins.common,
      babel(baseConfig.plugins.babel),
      resolve({
        extensions: ['.mjs', '.js', '.json', '.node', '.ts'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      banner(() => BANNER_TEXT),
    ],
  };
  buildFormats.push(cjsConfig);
}

if (!argv.format || argv.format === 'iife') {
  const unpkgConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      name: capitalize(LIBRARY_NAME),
      file: pkg.browser['dist/nanogram.js'],
      format: 'iife',
      globals,
    },
    plugins: [
      ...baseConfig.plugins.common,
      babel(baseConfig.plugins.babel),
      resolve({
        extensions: ['.mjs', '.js', '.json', '.node', '.ts'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
    ],
  };
  buildFormats.push(unpkgConfig);
}

// Export config
export default buildFormats;
