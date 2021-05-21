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

import { extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { HTTP, NETWORK_BAN_MESSAGE, buildURL } from '../utils/index.js';

/**
 * Get content from
 * https://www.instagram.com/explore/locations/{cityId}/
 *
 * @example
 * https://www.instagram.com/explore/locations/c2728325/
 */

var getPlacesByCityId = function getPlacesByCityId(cityId) {
  return new Promise(function ($return, $error) {
    var _response$entry_data, result, url, response, content, _content$, _content$$city_info, city_info, _content$$country_inf, country_info, _content$$location_li, location_list;

    result = {
      place: {
        city_info: null,
        country_info: null,
        location_list: null
      }
    };
    url = buildURL("explore/locations/" + cityId + "/");
    return Promise.resolve(HTTP(url)).then(function ($await_1) {
      try {
        response = $await_1;
        content = response == null ? void 0 : (_response$entry_data = response.entry_data) == null ? void 0 : _response$entry_data.LocationsDirectoryPage;

        if (content) {
          _content$ = _extends({}, content == null ? void 0 : content[0]), _content$$city_info = _content$.city_info, city_info = _content$$city_info === void 0 ? null : _content$$city_info, _content$$country_inf = _content$.country_info, country_info = _content$$country_inf === void 0 ? null : _content$$country_inf, _content$$location_li = _content$.location_list, location_list = _content$$location_li === void 0 ? null : _content$$location_li;
          result.place.city_info = city_info;
          result.place.country_info = country_info;
          result.place.location_list = location_list;
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

export default getPlacesByCityId;
export { getPlacesByCityId };
