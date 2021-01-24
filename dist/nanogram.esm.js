/**
*
* nanogram.js
*
* @version 3.1.0
* @author Alexey Istomin
* @email: webistomin@gmail.com
* @license: MIT
*
**/

var n=function(){return(n=Object.assign||function(n){for(var o,t=1,r=arguments.length;t<r;t++)for(var e in o=arguments[t])Object.prototype.hasOwnProperty.call(o,e)&&(n[e]=o[e]);return n}).apply(this,arguments)};function o(n,o,t,r){return new(t||(t=Promise))((function(e,i){function l(n){try{a(r.next(n))}catch(n){i(n)}}function u(n){try{a(r.throw(n))}catch(n){i(n)}}function a(n){var o;n.done?e(n.value):(o=n.value,o instanceof t?o:new t((function(n){n(o)}))).then(l,u)}a((r=r.apply(n,o||[])).next())}))}function t(n,o){var t,r,e,i,l={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(e=2&i[0]?r.return:i[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,i[1])).done)return e;switch(r=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(e=l.trys,(e=e.length>0&&e[e.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!e||i[1]>e[0]&&i[1]<e[3])){l.label=i[1];break}if(6===i[0]&&l.label<e[1]){l.label=e[1],e=i;break}if(e&&l.label<e[2]){l.label=e[2],l.ops.push(i);break}e[2]&&l.ops.pop(),l.trys.pop();continue}i=o.call(n,l)}catch(n){i=[6,n],r=0}finally{t=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var r=/<script type="text\/javascript">window._sharedData = (.*);<\/script>/,e=["[nanogram.js] It looks like your network has been temporary banned because of too many requests."].join("\n"),i=function(n){return"https://www.instagram.com/"+n},l=function(n,o){try{var t=n;return o&&(t=r.exec(n)[1]),JSON.parse(t)}catch(n){throw new Error(n)}},u=function(n,o){return new Promise((function(t,r){var e=new XMLHttpRequest;e.open(n,o),e.onload=function(){return t(e)},e.onerror=r,e.send()}))},a=function(n,r){return void 0===r&&(r=!0),o(void 0,void 0,void 0,(function(){var o,e,i,a;return t(this,(function(t){switch(t.label){case 0:return[4,u("GET",n)];case 1:if(o=t.sent(),e=o.responseText,i=o.status,a=o.responseURL,i>=200&&i<400)return[2,l(e,r)];throw new Error(i+" for "+a)}}))}))},c=function(r){return o(void 0,void 0,void 0,(function(){var o,l,u,c,s,d,v,f,h,p;return t(this,(function(t){switch(t.label){case 0:return o={city_list:null,country_info:null},l=i("explore/locations/"+r+"/"),[4,a(l)];case 1:if(u=t.sent(),!(c=null===(p=null==u?void 0:u.entry_data)||void 0===p?void 0:p.LocationsDirectoryPage))throw new Error(e);return s=n({},null==c?void 0:c[0]),d=s.city_list,v=void 0===d?null:d,f=s.country_info,h=void 0===f?null:f,o.city_list=v,o.country_info=h,[2,o]}}))}))},s=function(){return o(void 0,void 0,void 0,(function(){var o,r,l,u,c,s,d;return t(this,(function(t){switch(t.label){case 0:return o={country_list:null},r=i("explore/locations/"),[4,a(r)];case 1:if(l=t.sent(),!(u=null===(d=null==l?void 0:l.entry_data)||void 0===d?void 0:d.LocationsDirectoryPage))throw new Error(e);return c=n({},null==u?void 0:u[0]).country_list,s=void 0===c?null:c,o.country_list=s,[2,o]}}))}))},d=function(r,l){return o(void 0,void 0,void 0,(function(){var o,u,c,s,d,v,f,h;return t(this,(function(t){switch(t.label){case 0:return o={location:null},u=i("explore/locations/"+r+"/"+l+"/"),[4,a(u)];case 1:if(c=t.sent(),!(s=null===(f=null==c?void 0:c.entry_data)||void 0===f?void 0:f.LocationsPage))throw new Error(e);return d=n({},null===(h=null==s?void 0:s[0])||void 0===h?void 0:h.graphql).location,v=void 0===d?null:d,o.location=v,[2,o]}}))}))},v=function(r){return o(void 0,void 0,void 0,(function(){var o,l,u,c,s,d,v,f;return t(this,(function(t){switch(t.label){case 0:return o={location:null},l=i("explore/locations/"+r+"/"),[4,a(l)];case 1:if(u=t.sent(),!(c=null===(v=null==u?void 0:u.entry_data)||void 0===v?void 0:v.LocationsPage))throw new Error(e);return s=n({},null===(f=null==c?void 0:c[0])||void 0===f?void 0:f.graphql).location,d=void 0===s?null:s,o.location=d,[2,o]}}))}))},f=function(r){return o(void 0,void 0,void 0,(function(){var o,l,u,c,s,d,v,f;return t(this,(function(t){switch(t.label){case 0:return o={post:null},l=i("p/"+r+"/"),[4,a(l)];case 1:if(u=t.sent(),!(c=null===(v=null==u?void 0:u.entry_data)||void 0===v?void 0:v.PostPage))throw new Error(e);return s=n({},null===(f=null==c?void 0:c[0])||void 0===f?void 0:f.graphql).shortcode_media,d=void 0===s?null:s,o.post=d,[2,o]}}))}))},h=function(r){return o(void 0,void 0,void 0,(function(){var o,l,u,c,s,d,v,f;return t(this,(function(t){switch(t.label){case 0:return o={reel:null},l=i("reel/"+r+"/"),[4,a(l)];case 1:if(u=t.sent(),!(c=null===(v=null==u?void 0:u.entry_data)||void 0===v?void 0:v.PostPage))throw new Error(e);return s=n({},null===(f=null==c?void 0:c[0])||void 0===f?void 0:f.graphql).shortcode_media,d=void 0===s?null:s,o.reel=d,[2,o]}}))}))},p=function(n){return o(void 0,void 0,void 0,(function(){var o,r,l,u,c,s,d,v,f;return t(this,(function(t){switch(t.label){case 0:return o={media:{users:null,hashtags:null,places:null}},r=i("web/search/topsearch/?context=blended&query="+n+"&include_reel=true"),[4,a(r,!1)];case 1:if(!(l=t.sent()))throw new Error(e);return u=l.users,c=void 0===u?null:u,s=l.hashtags,d=void 0===s?null:s,v=l.places,f=void 0===v?null:v,o.media.users=c,o.media.hashtags=d,o.media.places=f,[2,o]}}))}))},w=function(r){return o(void 0,void 0,void 0,(function(){var o,l,u,c,s,d,v,f;return t(this,(function(t){switch(t.label){case 0:return o={tag:null},l=i("explore/tags/"+r+"/"),[4,a(l)];case 1:if(u=t.sent(),!(c=null===(v=null==u?void 0:u.entry_data)||void 0===v?void 0:v.TagPage))throw new Error(e);return s=n({},null===(f=null==c?void 0:c[0])||void 0===f?void 0:f.graphql).hashtag,d=void 0===s?null:s,o.tag=d,[2,o]}}))}))},y=function(r){return o(void 0,void 0,void 0,(function(){var o,l,u,c,s,d,v,f;return t(this,(function(t){switch(t.label){case 0:return o={profile:null},l=i(r+"/"),[4,a(l)];case 1:if(u=t.sent(),!(c=null===(v=null==u?void 0:u.entry_data)||void 0===v?void 0:v.ProfilePage))throw new Error(e);return s=n({},null===(f=null==c?void 0:c[0])||void 0===f?void 0:f.graphql).user,d=void 0===s?null:s,o.profile=d,[2,o]}}))}))},b=function(r){return o(void 0,void 0,void 0,(function(){var o,l,u,c,s,d,v,f,h,p,w,y;return t(this,(function(t){switch(t.label){case 0:return o={place:{city_info:null,country_info:null,location_list:null}},l=i("explore/locations/"+r+"/"),[4,a(l)];case 1:if(u=t.sent(),!(c=null===(y=null==u?void 0:u.entry_data)||void 0===y?void 0:y.LocationsDirectoryPage))throw new Error(e);return s=n({},null==c?void 0:c[0]),d=s.city_info,v=void 0===d?null:d,f=s.country_info,h=void 0===f?null:f,p=s.location_list,w=void 0===p?null:p,o.place.city_info=v,o.place.country_info=h,o.place.location_list=w,[2,o]}}))}))};export{c as getCitiesByCountryId,s as getCountries,d as getMediaByLocation,v as getMediaByPlaceId,f as getMediaByPostId,h as getMediaByReelId,p as getMediaBySearchQuery,w as getMediaByTag,y as getMediaByUsername,b as getPlacesByCityId};
