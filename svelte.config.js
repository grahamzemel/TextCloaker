const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    sourceMap: !process.env.ROLLUP_WATCH,
    defaults: {
      script: 'typescript',
    },
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  }),
};
