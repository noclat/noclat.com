const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

const plugins = [
  tailwindcss('./styles/tailwind.config.js'),
  purgecss({
    content: ['index.html'],
    css: ['styles/main.css'],
    extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['html']
      }
    ]
  }),
  cssnano({
    preset: [
      'default',
      {discardComments: {removeAll: true}}
    ]
  })
];

module.exports = {
  plugins,
};