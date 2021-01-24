var Nanogram=function(n){"use strict";var t=function(){return(t=Object.assign||function(n){for(var t,o=1,e=arguments.length;o<e;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)};function o(n,t,o,e){return new(o||(o=Promise))((function(r,i){function l(n){try{a(e.next(n))}catch(n){i(n)}}function u(n){try{a(e.throw(n))}catch(n){i(n)}}function a(n){var t;n.done?r(n.value):(t=n.value,t instanceof o?t:new o((function(n){n(t)}))).then(l,u)}a((e=e.apply(n,t||[])).next())}))}function e(n,t){var o,e,r,i,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;l;)try{if(o=1,e&&(r=2&i[0]?e.return:i[0]?e.throw||((r=e.return)&&r.call(e),0):e.next)&&!(r=r.call(e,i[1])).done)return r;switch(e=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,e=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(r=l.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){l.label=i[1];break}if(6===i[0]&&l.label<r[1]){l.label=r[1],r=i;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(i);break}r[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(n,l)}catch(n){i=[6,n],e=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var r=/<script type="text\/javascript">window._sharedData = (.*);<\/script>/,i=["[nanogram.js] It looks like your network has been temporary banned because of too many requests."].join("\n"),l=function(n){return"https://www.instagram.com/"+n},u=function(n,t){try{var o=n;return t&&(o=r.exec(n)[1]),JSON.parse(o)}catch(n){throw new Error(n)}},a=function(n,t){return new Promise((function(o,e){var r=new XMLHttpRequest;r.open(n,t),r.onload=function(){return o(r)},r.onerror=e,r.send()}))},c=function(n,t){return void 0===t&&(t=!0),o(void 0,void 0,void 0,(function(){var o,r,i,l;return e(this,(function(e){switch(e.label){case 0:return[4,a("GET",n)];case 1:if(o=e.sent(),r=o.responseText,i=o.status,l=o.responseURL,i>=200&&i<400)return[2,u(r,t)];throw new Error(i+" for "+l)}}))}))};return n.getCitiesByCountryId=function(n){return o(void 0,void 0,void 0,(function(){var o,r,u,a,s,d,v,f,h,y;return e(this,(function(e){switch(e.label){case 0:return o={city_list:null,country_info:null},r=l("explore/locations/"+n+"/"),[4,c(r)];case 1:if(u=e.sent(),!(a=null===(y=null==u?void 0:u.entry_data)||void 0===y?void 0:y.LocationsDirectoryPage))throw new Error(i);return s=t({},null==a?void 0:a[0]),d=s.city_list,v=void 0===d?null:d,f=s.country_info,h=void 0===f?null:f,o.city_list=v,o.country_info=h,[2,o]}}))}))},n.getCountries=function(){return o(void 0,void 0,void 0,(function(){var n,o,r,u,a,s,d;return e(this,(function(e){switch(e.label){case 0:return n={country_list:null},o=l("explore/locations/"),[4,c(o)];case 1:if(r=e.sent(),!(u=null===(d=null==r?void 0:r.entry_data)||void 0===d?void 0:d.LocationsDirectoryPage))throw new Error(i);return a=t({},null==u?void 0:u[0]).country_list,s=void 0===a?null:a,n.country_list=s,[2,n]}}))}))},n.getMediaByLocation=function(n,r){return o(void 0,void 0,void 0,(function(){var o,u,a,s,d,v,f,h;return e(this,(function(e){switch(e.label){case 0:return o={location:null},u=l("explore/locations/"+n+"/"+r+"/"),[4,c(u)];case 1:if(a=e.sent(),!(s=null===(f=null==a?void 0:a.entry_data)||void 0===f?void 0:f.LocationsPage))throw new Error(i);return d=t({},null===(h=null==s?void 0:s[0])||void 0===h?void 0:h.graphql).location,v=void 0===d?null:d,o.location=v,[2,o]}}))}))},n.getMediaByPlaceId=function(n){return o(void 0,void 0,void 0,(function(){var o,r,u,a,s,d,v,f;return e(this,(function(e){switch(e.label){case 0:return o={location:null},r=l("explore/locations/"+n+"/"),[4,c(r)];case 1:if(u=e.sent(),!(a=null===(v=null==u?void 0:u.entry_data)||void 0===v?void 0:v.LocationsPage))throw new Error(i);return s=t({},null===(f=null==a?void 0:a[0])||void 0===f?void 0:f.graphql).location,d=void 0===s?null:s,o.location=d,[2,o]}}))}))},n.getMediaByPostId=function(n){return o(void 0,void 0,void 0,(function(){var o,r,u,a,s,d,v,f;return e(this,(function(e){switch(e.label){case 0:return o={post:null},r=l("p/"+n+"/"),[4,c(r)];case 1:if(u=e.sent(),!(a=null===(v=null==u?void 0:u.entry_data)||void 0===v?void 0:v.PostPage))throw new Error(i);return s=t({},null===(f=null==a?void 0:a[0])||void 0===f?void 0:f.graphql).shortcode_media,d=void 0===s?null:s,o.post=d,[2,o]}}))}))},n.getMediaByReelId=function(n){return o(void 0,void 0,void 0,(function(){var o,r,u,a,s,d,v,f;return e(this,(function(e){switch(e.label){case 0:return o={reel:null},r=l("reel/"+n+"/"),[4,c(r)];case 1:if(u=e.sent(),!(a=null===(v=null==u?void 0:u.entry_data)||void 0===v?void 0:v.PostPage))throw new Error(i);return s=t({},null===(f=null==a?void 0:a[0])||void 0===f?void 0:f.graphql).shortcode_media,d=void 0===s?null:s,o.reel=d,[2,o]}}))}))},n.getMediaBySearchQuery=function(n){return o(void 0,void 0,void 0,(function(){var t,o,r,u,a,s,d,v,f;return e(this,(function(e){switch(e.label){case 0:return t={media:{users:null,hashtags:null,places:null}},o=l("web/search/topsearch/?context=blended&query="+n+"&include_reel=true"),[4,c(o,!1)];case 1:if(!(r=e.sent()))throw new Error(i);return u=r.users,a=void 0===u?null:u,s=r.hashtags,d=void 0===s?null:s,v=r.places,f=void 0===v?null:v,t.media.users=a,t.media.hashtags=d,t.media.places=f,[2,t]}}))}))},n.getMediaByTag=function(n){return o(void 0,void 0,void 0,(function(){var o,r,u,a,s,d,v,f;return e(this,(function(e){switch(e.label){case 0:return o={tag:null},r=l("explore/tags/"+n+"/"),[4,c(r)];case 1:if(u=e.sent(),!(a=null===(v=null==u?void 0:u.entry_data)||void 0===v?void 0:v.TagPage))throw new Error(i);return s=t({},null===(f=null==a?void 0:a[0])||void 0===f?void 0:f.graphql).hashtag,d=void 0===s?null:s,o.tag=d,[2,o]}}))}))},n.getMediaByUsername=function(n){return o(void 0,void 0,void 0,(function(){var o,r,u,a,s,d,v,f;return e(this,(function(e){switch(e.label){case 0:return o={profile:null},r=l(n+"/"),[4,c(r)];case 1:if(u=e.sent(),!(a=null===(v=null==u?void 0:u.entry_data)||void 0===v?void 0:v.ProfilePage))throw new Error(i);return s=t({},null===(f=null==a?void 0:a[0])||void 0===f?void 0:f.graphql).user,d=void 0===s?null:s,o.profile=d,[2,o]}}))}))},n.getPlacesByCityId=function(n){return o(void 0,void 0,void 0,(function(){var o,r,u,a,s,d,v,f,h,y,p,w;return e(this,(function(e){switch(e.label){case 0:return o={place:{city_info:null,country_info:null,location_list:null}},r=l("explore/locations/"+n+"/"),[4,c(r)];case 1:if(u=e.sent(),!(a=null===(w=null==u?void 0:u.entry_data)||void 0===w?void 0:w.LocationsDirectoryPage))throw new Error(i);return s=t({},null==a?void 0:a[0]),d=s.city_info,v=void 0===d?null:d,f=s.country_info,h=void 0===f?null:f,y=s.location_list,p=void 0===y?null:y,o.place.city_info=v,o.place.country_info=h,o.place.location_list=p,[2,o]}}))}))},Object.defineProperty(n,"__esModule",{value:!0}),n}({});