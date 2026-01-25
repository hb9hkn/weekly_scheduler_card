import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));
const banner = `/*! weekly-scheduler-card v${pkg.version} */`;

export default {
  input: 'src/weekly-scheduler-card.ts',
  output: {
    file: 'weekly-scheduler-card.js',
    format: 'iife',
    sourcemap: false,
    banner: banner,
  },
  plugins: [
    resolve(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    terser({
      format: {
        comments: /weekly-scheduler-card v/,
      },
    }),
  ],
};
