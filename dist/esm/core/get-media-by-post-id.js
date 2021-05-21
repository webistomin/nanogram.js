/**
*
* nanogram.js
*
* @version 3.3.0-0
* @author Alexey Istomin
* @email: webistomin@gmail.com
* @license: MIT
*
**/

import { extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { HTTP, NETWORK_BAN_MESSAGE, buildURL } from '../utils/index.js';

/**
 * Get content from
 * https://www.instagram.com/p/{postId}/
 *
 * @example
 * https://www.instagram.com/p/CIrIDMtDwn4/
 */

var getMediaByPostId = function getMediaByPostId(postId) {
  return new Promise(function ($return, $error) {
    var _response$entry_data, result, url, response, content, _content$, _content$0$graphql, _content$0$graphql$sh, shortcode_media;

    result = {
      post: null
    };
    url = buildURL("p/" + postId + "/");
    return Promise.resolve(HTTP(url)).then(function ($await_1) {
      try {
        response = $await_1;
        content = response == null ? void 0 : (_response$entry_data = response.entry_data) == null ? void 0 : _response$entry_data.PostPage;

        if (content) {
          _content$0$graphql = _extends({}, content == null ? void 0 : (_content$ = content[0]) == null ? void 0 : _content$.graphql), _content$0$graphql$sh = _content$0$graphql.shortcode_media, shortcode_media = _content$0$graphql$sh === void 0 ? null : _content$0$graphql$sh;
          result.post = shortcode_media;
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

export default getMediaByPostId;
export { getMediaByPostId };
