const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

const plugins = [
  tailwindcss('./src/styles/tailwind.config.js')
];

if (process.env.NODE_ENV !== 'development') {
  plugins.push(purgecss({
    content: ['src/index.html'],
    css: ['src/styles/main.css'],
    extractors: [
      {
          extractor: TailwindExtractor,
          extensions: ['html']
      }
    ]
  }));
}

module.exports = {
  plugins,
};