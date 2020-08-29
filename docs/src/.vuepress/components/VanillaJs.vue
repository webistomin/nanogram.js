<template>
  <div class="vanilla-js" id="holder">
    <div class="preloader" id="preloader"></div>
  </div>
</template>

<script>
export default {
  name: 'VanillaJs',

  mounted() {
    var lib = new Nanogram();

    function buildPorfolio() {
      var preloader = document.getElementById('preloader');
      var holder = document.getElementById('holder');
      preloader.classList.add('preloader--loading');
      // Get content from https://www.instagram.com/instagram/
      return lib.getMediaByUsername('instagram').then(function(response) {
        if (console.table) {
          console.table(response.profile);
        }

        // Get photos
        var photos = response.profile.edge_owner_to_timeline_media.edges;
        var items = [];

        // Create new elements
        // <div class="portfolio__item">
        //   <a href="..." target="_blank" class="portfolio__link">
        //     <img src="..." alt="..." width="..." height="..." class="portfolio__img">
        //   </a>
        // </div>

        for (var i = 0; i <= photos.length - 1; i++) {
          var current = photos[i].node;

          var div = document.createElement('div');
          var link = document.createElement('a');
          var img = document.createElement('img');

          var thumbnail = current.thumbnail_resources[4];
          var imgSrc = thumbnail.src;
          var imgWidth = thumbnail.config_width;
          var imgHeight = thumbnail.config_height;
          var imgAlt = current.accessibility_caption;

          var shortcode = current.shortcode;
          var linkHref = 'https://www.instagram.com/p/' + shortcode;

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
        var container = document.createElement('div');
        container.id = 'portfolio';
        container.classList.add('portfolio');

        // Append all photos to our container
        for (var j = 0; j <= items.length - 1; j++) {
          container.appendChild(items[j]);
        }

        // Append our container to body
        holder.appendChild(container);

        preloader.classList.remove('preloader--loading');
      }).catch(function (error) {
        console.log(error);
        preloader.classList.remove('preloader--loading');
      })
    }

    buildPorfolio()
  },
};
</script>

<style>
  .portfolio {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 200px);
  }

  .portfolio__item {
    width: 200px;
    height: 200px;
  }


  .portfolio__link,
  .portfolio__img {
    display: block;
    width: inherit;
    height: inherit;
  }
</style>
