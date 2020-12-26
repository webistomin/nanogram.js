---
title: nanogram.js
description: An easy-to-use and simple Instagram package allows you to fetch media content without API and access token.
features:
- title: 🍤 Tiny
  details: Small footprint ~ 2kb which makes your apps faster to load
- title: 🦾 DX Friendly
  details: Written in TypeScript
- title: 🌳 Tree-shakeable
  details: Unused functions can be easily removed by modern bundlers
- title: 🔑 No API keys
  details: It works without keys and access tokens
- title: 🧘‍♀️ Flexible
  details: It returns simple JS objects. Do whatever you want
- title: 🌓 Universal
  details: It works both on server and client. Has IE11 support with polyfill 
---

### Example 🧐

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="js,result" data-user="webistomin" data-slug-hash="vYNrgYL" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Instagram feed without API 📷">
  <span>See the Pen <a href="https://codepen.io/webistomin/pen/vYNrgYL">
  Instagram feed without API 📷</a> by Alexey Istomin (<a href="https://codepen.io/webistomin">@webistomin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Quick Setup

### Installation 🚀

```bash
# install with yarn
yarn add nanogram.js

# install with npm
npm install nanogram.js --save
```

Or use a CDN

```html
<script src="https://unpkg.com/nanogram.js@3.0.2/dist/nanogram.iife.js"></script>
or
<script src="https://cdn.jsdelivr.net/npm/nanogram.js@3.0.2/dist/nanogram.iife.js"></script>
```

> Hint: for a better performance add preconnect link in the head of your document.

```html
<head>
  <!-- for unkpg cdn --> 
  <link rel="preconnect" href="https://unpkg.com">

  <!-- for jsdelivr cdn -->
  <link rel="preconnect" href="https://cdn.jsdelivr.net">  


  <!-- dns-prefetch only for IE11 --> 
  <!--	<link rel="dns-prefetch" href="https://unpkg.com"> -->
  <!--	<link rel="dns-prefetch" href="https://cdn.jsdelivr.net"> -->
</head>
```

### Usage 🤔

#### Get media content by providing instagram username

##### ES2015

```js
import { getMediaByUsername } from 'nanogram.js'

getMediaByUsername('instagram').then((media) => {
  console.log(media);
});
```

##### CommonJS

```js
const getMediaByUsername = require('nanogram.js').getMediaByUsername;

getMediaByUsername('instagram').then((media) => {
  console.log(media);
});
```

##### IIFE

```js
const getMediaByUsername = window.Nanogram.getMediaByUsername

getMediaByUsername('instagram').then((media) => {
  console.log(media);
});
```

> _Note_: get content from [user page](https://www.instagram.com/instagram/). 12 photos is the maximum for this method.

---

#### Get media content by providing instagram post id

##### ES2015

```js
import { getMediaByPostId } from 'nanogram.js'

getMediaByPostId('CIrIDMtDwn4').then((media) => {
  console.log(media);
});
```

##### CommonJS

```js
const getMediaByPostId = require('nanogram.js').getMediaByPostId;

getMediaByPostId('CIrIDMtDwn4').then((media) => {
  console.log(media);
});
```

##### IIFE

```js
const getMediaByPostId = window.Nanogram.getMediaByPostId

getMediaByPostId('CIrIDMtDwn4').then((media) => {
  console.log(media);
});
```

> _Note_: get content from [post page](https://www.instagram.com/p/CIrIDMtDwn4/).

#### Get media content by providing instagram tag

##### ES2015

```js
import { getMediaByTag } from 'nanogram.js'

getMediaByUsername('sunset').then((media) => {
  console.log(media);
});
```

##### CommonJS

```js
const getMediaByTag = require('nanogram.js').getMediaByTag;

getMediaByUsername('sunset').then((media) => {
  console.log(media);
});
```

##### IIFE

```js
const getMediaByTag = window.Nanogram.getMediaByTag

getMediaByTag('sunset').then((media) => {
  console.log(media);
});
```

> _Note_: get content from [tag page](https://www.instagram.com/explore/tags/sunset/)

#### Get media content by providing location id and place name

##### ES2015

```js
import { getMediaByLocation } from 'nanogram.js'

getMediaByLocation(6264386, 'highbridge-park').then((media) => {
  console.log(media);
});
```

##### CommonJS

```js
const getMediaByLocation = require('nanogram.js').getMediaByLocation;

getMediaByLocation(6264386, 'highbridge-park').then((media) => {
  console.log(media);
});
```

##### IIFE

```js
const getMediaByLocation = window.Nanogram.getMediaByLocation

getMediaByLocation(6264386, 'highbridge-park').then((media) => {
  console.log(media);
});
```

> _Note:_ get content from [location page](https://www.instagram.com/explore/locations/6264386/highbridge-park)

#### Get all available countries

##### ES2015

```js
import { getCountries } from 'nanogram.js'

getCountries().then((media) => {
  console.log(media);
});
```

##### CommonJS

```js
const getCountries = require('nanogram.js').getCountries;

getCountries().then((media) => {
  console.log(media);
});
```

##### IIFE

```js
const getCountries = window.Nanogram.getCountries

getCountries().then((media) => {
  console.log(media);
});
```

> _Note:_ get countries from [location page](https://www.instagram.com/explore/locations/)


#### Get all cities by providing country id

##### ES2015

```js
import { getCitiesByCountryId } from 'nanogram.js'

getCitiesByCountryId('US').then((media) => {
  console.log(media);
});
```

##### CommonJS

```js
const getCitiesByCountryId = require('nanogram.js').getCitiesByCountryId;

getCitiesByCountryId('US').then((media) => {
  console.log(media);
});
```

##### IIFE

```js
const getCitiesByCountryId = window.Nanogram.getCitiesByCountryId

getCitiesByCountryId('US').then((media) => {
  console.log(media);
});
```

> _Note:_ get cities from [country page](https://www.instagram.com/explore/locations/US/)

#### Get all places by providing city id

##### ES2015

```js
import { getPlacesByCityId } from 'nanogram.js'

getPlacesByCityId('c2728325').then((media) => {
  console.log(media);
});
```

##### CommonJS

```js
const getPlacesByCityId = require('nanogram.js').getPlacesByCityId;

getPlacesByCityId('c2728325').then((media) => {
  console.log(media);
});
```

##### IIFE

```js
const getPlacesByCityId = window.Nanogram.getPlacesByCityId

getPlacesByCityId('c2728325').then((media) => {
  console.log(media);
});
```

> _Note:_ get places from [city page](https://www.instagram.com/explore/locations/c2728325/)


#### Get media content by providing place id

##### ES2015

```js
import { getMediaByPlaceId } from 'nanogram.js'

getMediaByPlaceId(2999512).then((media) => {
  console.log(media);
});
```

##### CommonJS

```js
const getMediaByPlaceId = require('nanogram.js').getMediaByPlaceId;

getMediaByPlaceId(2999512).then((media) => {
  console.log(media);
});
```

##### IIFE

```js
const getMediaByPlaceId = window.Nanogram.getMediaByPlaceId

getMediaByPlaceId(2999512).then((media) => {
  console.log(media);
});
```

> _Note:_ get content from [place page](https://www.instagram.com/explore/locations/2999512/)

#### Get media content by providing search query

##### ES2015

```js
import { getMediaBySearchQuery } from 'nanogram.js'

getMediaBySearchQuery('sunset').then((media) => {
  console.log(media);
});
```

##### CommonJS

```js
const getMediaBySearchQuery = require('nanogram.js').getMediaBySearchQuery;

getMediaBySearchQuery('sunset').then((media) => {
  console.log(media);
});
```

##### IIFE

```js
const getMediaBySearchQuery = window.Nanogram.getMediaBySearchQuery

getMediaBySearchQuery('sunset').then((media) => {
  console.log(media);
});
```

> _Note:_ get content from searchbar on the top of the page



