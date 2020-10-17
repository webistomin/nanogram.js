# Installation

## Using package managers

### npm
```bash
$ npm install nanogram.js --save
```

### yarn
```bash
$ yarn add nanogram.js
```

## via CDN

Add script right before closing `</body>` tag

```html
<script src="https://unpkg.com/nanogram.js@2.0.1/dist/nanogram.iife.js"></script>
or
<script src="https://cdn.jsdelivr.net/npm/nanogram.js@2.0.1/dist/nanogram.iife.min.js"></script>
```

::: tip Hint

For a better performance add preconnect link in the head of your document.
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
:::



