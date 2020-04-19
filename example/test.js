const Nanogram = require('../dist/nanogram.cjs');
const fetch = require('isomorphic-fetch');

const nano = new Nanogram();

nano.getCountries().then((value) => {
  console.log(value)
})
