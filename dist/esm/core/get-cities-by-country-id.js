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
 * https://www.instagram.com/explore/locations/{countryId}/
 *
 * @example
 * https://www.instagram.com/explore/locations/US/
 */

var getCitiesByCountryId = function getCitiesByCountryId(countryId) {
  return new Promise(function ($return, $error) {
    var _response$entry_data, result, url, response, content, _content$, _content$$city_list, city_list, _content$$country_inf, country_info;

    result = {
      city_list: null,
      country_info: null
    };
    url = buildURL("explore/locations/" + countryId + "/");
    return Promise.resolve(HTTP(url)).then(function ($await_1) {
      try {
        response = $await_1;
        content = response == null ? void 0 : (_response$entry_data = response.entry_data) == null ? void 0 : _response$entry_data.LocationsDirectoryPage;

        if (content) {
          _content$ = _extends({}, content == null ? void 0 : content[0]), _content$$city_list = _content$.city_list, city_list = _content$$city_list === void 0 ? null : _content$$city_list, _content$$country_inf = _content$.country_info, country_info = _content$$country_inf === void 0 ? null : _content$$country_inf;
          result.city_list = city_list;
          result.country_info = country_info;
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

export default getCitiesByCountryId;
export { getCitiesByCountryId };
