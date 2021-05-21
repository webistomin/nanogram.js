/**
*
* nanogram.js
*
* @version 3.2.0
* @author Alexey Istomin
* @email: webistomin@gmail.com
* @license: MIT
*
**/

import { HTTP, NETWORK_BAN_MESSAGE, buildURL } from '../utils/index.js';

/**
 * Get content from
 * https://www.instagram.com/web/search/topsearch/?context=blended&query={query}&include_reel=true
 *
 * @example
 * https://www.instagram.com/web/search/topsearch/?context=blended&query=sunset&include_reel=true
 */

var getMediaBySearchQuery = function getMediaBySearchQuery(query) {
  return new Promise(function ($return, $error) {
    var result, url, response, _response$users, users, _response$hashtags, hashtags, _response$places, places;

    result = {
      media: {
        users: null,
        hashtags: null,
        places: null
      }
    };
    url = buildURL("web/search/topsearch/?context=blended&query=" + query + "&include_reel=true");
    return Promise.resolve(HTTP(url, false)).then(function ($await_1) {
      try {
        response = $await_1;

        if (response) {
          _response$users = response.users, users = _response$users === void 0 ? null : _response$users, _response$hashtags = response.hashtags, hashtags = _response$hashtags === void 0 ? null : _response$hashtags, _response$places = response.places, places = _response$places === void 0 ? null : _response$places;
          result.media.users = users;
          result.media.hashtags = hashtags;
          result.media.places = places;
        } else {
          return $error(new Error(NETWORK_BAN_MESSAGE));
        }

        return $return(result);
      } catch ($boundEx) {
        return $error($boundEx);
      }
    }, $error);
  });
};

export default getMediaBySearchQuery;
export { getMediaBySearchQuery };
