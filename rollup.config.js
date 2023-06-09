import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import postcssPlugin from 'rollup-plugin-postcss';
import rollupJson from '@rollup/plugin-json';
const postcssConfig = require('./postcss.config.cjs');

import serve from 'rollup-plugin-serve';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.ts',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({ sourceMap: !production }),
      compilerOptions: {
        dev: !production,
      },
	  emitCss: true,
    }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),

    typescript({
      sourceMap: !production,
      inlineSources: !production,
    }),
    rollupJson(),
	postcssPlugin(postcssConfig),

    !production && serve({
		contentBase: 'public',
		historyApiFallback: true,
		host: 'localhost',
		port: 10001,
	  }),
	  !production && livereload('public'),
	  production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
