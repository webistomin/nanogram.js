const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Nanogram = require('nanogram.js').default;

// For versions of node earlier than 12.x, use this globalThis polyfill:
(function() {
  if (typeof globalThis === 'object') return;
  Object.defineProperty(Object.prototype, '__magic__', {
    get: function() {
      return this;
    },
    configurable: true
  });
  __magic__.globalThis = __magic__;
  delete Object.prototype.__magic__;
}());

if (!globalThis.XMLHttpRequest) {
  globalThis.XMLHttpRequest = XMLHttpRequest;
}

const instagramParser = new Nanogram();

instagramParser.getMediaByUsername('instagram').then((response) => {
  console.log(response);
});
