# Using nanogram.js

## Initialize Nanogram.js

### Option A: Using ES 2015:
    
```js
import Nanogram from 'nanogram.js';

const instagramParser = new Nanogram();
```

### Option B: Using CommonJS:
    
```js
const Nanogram = require('nanogram.js');

const instagramParser = new Nanogram();
```

### Option C: Using CDN:
    
```js
/* Nanogram is available from global namespace */
const instagramParser = new Nanogram();
```

## Get your data

### Get media content by providing instagram username

```js
instagramParser.getMediaByUsername('instagram').then((media) => {
  console.log(media);
});
```

_Note:_ get content from [user page](https://www.instagram.com/instagram/). 12 photos is the maximum for this method.

---

### Get media content by providing instagram tag

```js
instagramParser.getMediaByTag('sunset').then((media) => {
  console.log(media);
});
```

_Note:_ get content from [tag page](https://www.instagram.com/explore/tags/sunset/)

---

### Get media content by providing location id and place name

```js
instagramParser.getMediaByLocation(6264386, 'highbridge-park').then((media) => {
  console.log(media);
});
```

_Note:_ get content from [location page](https://www.instagram.com/explore/locations/6264386/highbridge-park)

---

### Get all available countries

```js
instagramParser.getCountries().then((countries) => {
  console.log(countries);
});
```

_Note:_ get countries from [location page](https://www.instagram.com/explore/locations/)

---

### Get all cities by providing country id

```js
instagramParser.getCitiesByCountryId('US').then((cities) => {
  console.log(cities);
});
```

_Note:_ get cities from [country page](https://www.instagram.com/explore/locations/US/)

---

### Get all places by providing city id

```js
instagramParser.getPlacesByCityId('c2728325').then((places) => {
  console.log(places);
});
```

_Note:_ get places from [city page](https://www.instagram.com/explore/locations/c2728325/)

---

### Get media content by providing place id

```js
instagramParser.getMediaByPlaceId(2999512).then((media) => {
  console.log(media);
});
```

_Note:_ get content from [place page](https://www.instagram.com/explore/locations/2999512/)

---

### Get media content by providing search query

```js
instagramParser.getMediaBySearchQuery('sunset').then((media) => {
  console.log(media);
});
```

_Note:_ get content from searchbar on the top of the page

---
   

