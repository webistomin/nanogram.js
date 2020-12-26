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
---

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
<script src="https://unpkg.com/nanogram.js@3.0.0/dist/nanogram.iife.js"></script>
or
<script src="https://cdn.jsdelivr.net/npm/nanogram.js@3.0.0/dist/nanogram.iife.js"></script>
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

```js
import { getMediaByUsername } from 'nanogram.js'

getMediaByUsername('instagram').then((media) => {
  console.log(media);
});
```

> _Note_: get content from [user page](https://www.instagram.com/instagram/). 12 photos is the maximum for this method.

#### Get media content by providing instagram post id

```js
import { getMediaByPostId } from 'nanogram.js'

getMediaByPostId('CIrIDMtDwn4').then((media) => {
  console.log(media);
});
```

> _Note_: get content from [post page](https://www.instagram.com/p/CIrIDMtDwn4/).

#### Get media content by providing instagram tag

```js
import { getMediaByTag } from 'nanogram.js'

getMediaByTag('sunset').then((media) => {
  console.log(media);
});
```

> _Note_: get content from [tag page](https://www.instagram.com/explore/tags/sunset/)

#### Get media content by providing location id and place name

```js
import { getMediaByLocation } from 'nanogram.js'

getMediaByLocation(6264386, 'highbridge-park').then((media) => {
  console.log(media);
});
```

> _Note:_ get content from [location page](https://www.instagram.com/explore/locations/6264386/highbridge-park)

#### Get all available countries

```js
import { getCountries } from 'nanogram.js'

getCountries().then((media) => {
  console.log(media);
});
```

> _Note:_ get countries from [location page](https://www.instagram.com/explore/locations/)


#### Get all cities by providing country id

```js
import { getCitiesByCountryId } from 'nanogram.js'

getCitiesByCountryId('US').then((media) => {
  console.log(media);
});
```

> _Note:_ get cities from [country page](https://www.instagram.com/explore/locations/US/)

#### Get all places by providing city id

```js
import { getPlacesByCityId } from 'nanogram.js'

getPlacesByCityId('c2728325').then((media) => {
  console.log(media);
});
```

> _Note:_ get places from [city page](https://www.instagram.com/explore/locations/c2728325/)


#### Get media content by providing place id

```js
import { getMediaByPlaceId } from 'nanogram.js'

getMediaByPlaceId(2999512).then((media) => {
  console.log(media);
});
```

> _Note:_ get content from [place page](https://www.instagram.com/explore/locations/2999512/)

#### Get media content by providing search query

```js
import { getMediaBySearchQuery } from 'nanogram.js'

getMediaBySearchQuery('sunset').then((media) => {
  console.log(media);
});
```

> _Note:_ get content from searchbar on the top of the page

### Example 🧐

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="js,result" data-user="webistomin" data-slug-hash="vYNrgYL" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Instagram feed without API 📷">
  <span>See the Pen <a href="https://codepen.io/webistomin/pen/vYNrgYL">
  Instagram feed without API 📷</a> by Alexey Istomin (<a href="https://codepen.io/webistomin">@webistomin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>



