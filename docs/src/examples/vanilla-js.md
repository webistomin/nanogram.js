# JavaScript ES6

## Code
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Nanogram example ES6</title>
</head>
<body>

<div id="preloader"></div>

<script src="https://polyfill.io/v3/polyfill.min.js?features=Promise"></script>
<script src="https://cdn.jsdelivr.net/npm/nanogram.js@2.0.0/dist/nanogram.iife.min.js"></script>
<script>
  // Initialize library
  const lib = new Nanogram();

  function buildPorfolio() {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('preloader--loading');
    // Get content from https://www.instagram.com/instagram/
    return lib.getMediaByUsername('instagram').then((response) => {
      // Get photos
      const photos = response.profile.edge_owner_to_timeline_media.edges;
      const items = [];

      // Create new elements
      // <div class="portfolio__item">
      //   <a href="..." target="_blank" class="portfolio__link">
      //     <img src="..." alt="..." width="..." height="..." class="portfolio__img">
      //   </a>
      // </div>

      for (let i = 0; i <= photos.length - 1; i++) {
        const current = photos[i].node;

        const div = document.createElement('div');
        const link = document.createElement('a');
        const img = document.createElement('img');

        const thumbnail = current.thumbnail_resources[4];
        const imgSrc = thumbnail.src;
        const imgWidth = thumbnail.config_width;
        const imgHeight = thumbnail.config_height;
        const imgAlt = current.accessibility_caption;

        const shortcode = current.shortcode;
        const linkHref = 'https://www.instagram.com/p/' + shortcode;

        div.classList.add('portfolio__item');

        img.classList.add('portfolio__img');
        img.src = imgSrc;
        img.width = imgWidth;
        img.height = imgHeight;
        img.alt = imgAlt;

        link.classList.add('portfolio__link');
        link.href = linkHref;
        link.target = '_blank';

        link.appendChild(img);
        div.appendChild(link);

        items.push(div);
      }

      // Create container for our portfolio
      const container = document.createElement('div');
      container.id = 'portfolio';

      // Append all photos to our container
      for (let j = 0; j <= items.length - 1; j++) {
        container.appendChild(items[j]);
      }

      // Append our container to body
      document.body.appendChild(container);

      preloader.classList.remove('preloader--loading');
    }).catch(function (error) {
      console.log(error);
      preloader.classList.remove('preloader--loading');
    })
  }

  buildPorfolio()
</script>
</body>
</html>
```

## Demo
<vanilla-js></vanilla-js>
