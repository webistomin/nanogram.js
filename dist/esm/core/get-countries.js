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
 * https://www.instagram.com/explore/locations/
 *
 * @example
 * https://www.instagram.com/explore/locations/
 */

var getCountries = function getCountries() {
  return new Promise(function ($return, $error) {
    var _response$entry_data, result, url, response, content, _content$, _content$$country_lis, country_list;

    result = {
      country_list: null
    };
    url = buildURL("explore/locations/");
    return Promise.resolve(HTTP(url)).then(function ($await_1) {
      try {
        response = $await_1;
        content = response == null ? void 0 : (_response$entry_data = response.entry_data) == null ? void 0 : _response$entry_data.LocationsDirectoryPage;

        if (content) {
          _content$ = _extends({}, content == null ? void 0 : content[0]), _content$$country_lis = _content$.country_list, country_list = _content$$country_lis === void 0 ? null : _content$$country_lis;
          result.country_list = country_list;
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

export default getCountries;
export { getCountries };
