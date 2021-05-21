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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Base instagram url for every http request
 */
var INSTAGRAM_HOSTNAME = 'https://www.instagram.com/';
/**
 * RegExp to parse
 * <script type="text/javascript">window._sharedData = {}</script>
 * from HTML response
 */

var SHARED_DATA_REG_EXP = /<script type="text\/javascript">window._sharedData = (.*);<\/script>/;
/**
 * Message for network ban
 */

var NETWORK_BAN_MESSAGE = ['[nanogram.js] It looks like your network has been temporary banned because of too many requests.'].join('\n');
/**
 * Append a query to the base instagram url
 */

var buildURL = function buildURL(query) {
  return "" + INSTAGRAM_HOSTNAME + query;
};
/**
 * Parse JSON from HTTP response
 */

var parseJSON = function parseJSON(content, useRegExp) {
  try {
    var data = content;

    if (useRegExp) {
      data = SHARED_DATA_REG_EXP.exec(content)[1];
    }

    return JSON.parse(data);
  } catch (error) {
    throw new Error(error);
  }
};
/**
 * Promisified XMLHttpRequest
 */

var xhrRequest = function xhrRequest(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.onload = function () {
      return resolve(xhr);
    };

    xhr.onerror = reject;
    xhr.send();
  });
};
/**
 * Module for making HTTP requests
 */


var HTTP = function HTTP(url, useRegExp) {
  return new Promise(function ($return, $error) {
    var response, responseText, status, responseURL;

    if (useRegExp === void 0) {
      useRegExp = true;
    }

    return Promise.resolve(xhrRequest('GET', url)).then(function ($await_2) {
      try {
        response = $await_2;
        responseText = response.responseText, status = response.status, responseURL = response.responseURL;

        if (status >= 200 && status < 400) {
          return $return(parseJSON(responseText, useRegExp));
        } else {
          return $error(new Error(status + " for " + responseURL));
        }

        return $return();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    }, $error);
  });
};

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

/**
 * Get content from
 * https://www.instagram.com/explore/locations/{locationId}/{placeName}
 *
 * @example
 * https://www.instagram.com/explore/locations/6264386/highbridge-park
 */

var getMediaByLocation = function getMediaByLocation(locationId, placeName) {
  return new Promise(function ($return, $error) {
    var _response$entry_data, result, url, response, content, _content$, _content$0$graphql, _content$0$graphql$lo, location;

    result = {
      location: null
    };
    url = buildURL("explore/locations/" + locationId + "/" + placeName + "/");
    return Promise.resolve(HTTP(url)).then(function ($await_1) {
      try {
        response = $await_1;
        content = response == null ? void 0 : (_response$entry_data = response.entry_data) == null ? void 0 : _response$entry_data.LocationsPage;

        if (content) {
          _content$0$graphql = _extends({}, content == null ? void 0 : (_content$ = content[0]) == null ? void 0 : _content$.graphql), _content$0$graphql$lo = _content$0$graphql.location, location = _content$0$graphql$lo === void 0 ? null : _content$0$graphql$lo;
          result.location = location;
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

/**
 * Get content from
 * https://www.instagram.com/explore/locations/{placeId}/
 *
 * @example
 * https://www.instagram.com/explore/locations/2999512/
 */

var getMediaByPlaceId = function getMediaByPlaceId(placeId) {
  return new Promise(function ($return, $error) {
    var _response$entry_data, result, url, response, content, _content$, _content$0$graphql, _content$0$graphql$lo, location;

    result = {
      location: null
    };
    url = buildURL("explore/locations/" + placeId + "/");
    return Promise.resolve(HTTP(url)).then(function ($await_1) {
      try {
        response = $await_1;
        content = response == null ? void 0 : (_response$entry_data = response.entry_data) == null ? void 0 : _response$entry_data.LocationsPage;

        if (content) {
          _content$0$graphql = _extends({}, content == null ? void 0 : (_content$ = content[0]) == null ? void 0 : _content$.graphql), _content$0$graphql$lo = _content$0$graphql.location, location = _content$0$graphql$lo === void 0 ? null : _content$0$graphql$lo;
          result.location = location;
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

/**
 * Get content from
 * https://www.instagram.com/reel/{reelId}/
 *
 * @example
 * https://www.instagram.com/reel/CKONdDkJaPU/
 */

var getMediaByReelId = function getMediaByReelId(reelId) {
  return new Promise(function ($return, $error) {
    var _response$entry_data, result, url, response, content, _content$, _content$0$graphql, _content$0$graphql$sh, shortcode_media;

    result = {
      reel: null
    };
    url = buildURL("reel/" + reelId + "/");
    return Promise.resolve(HTTP(url)).then(function ($await_1) {
      try {
        response = $await_1;
        content = response == null ? void 0 : (_response$entry_data = response.entry_data) == null ? void 0 : _response$entry_data.PostPage;

        if (content) {
          _content$0$graphql = _extends({}, content == null ? void 0 : (_content$ = content[0]) == null ? void 0 : _content$.graphql), _content$0$graphql$sh = _content$0$graphql.shortcode_media, shortcode_media = _content$0$graphql$sh === void 0 ? null : _content$0$graphql$sh;
          result.reel = shortcode_media;
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

/**
 * Get content from
 * https://www.instagram.com/explore/tags/{tag}/
 *
 * @example
 * https://www.instagram.com/explore/tags/sunset/
 */

var getMediaByTag = function getMediaByTag(tag) {
  return new Promise(function ($return, $error) {
    var _response$entry_data, result, url, response, content, _content$, _content$0$graphql, _content$0$graphql$ha, hashtag;

    result = {
      tag: null
    };
    url = buildURL("explore/tags/" + tag + "/");
    return Promise.resolve(HTTP(url)).then(function ($await_1) {
      try {
        response = $await_1;
        content = response == null ? void 0 : (_response$entry_data = response.entry_data) == null ? void 0 : _response$entry_data.TagPage;

        if (content) {
          _content$0$graphql = _extends({}, content == null ? void 0 : (_content$ = content[0]) == null ? void 0 : _content$.graphql), _content$0$graphql$ha = _content$0$graphql.hashtag, hashtag = _content$0$graphql$ha === void 0 ? null : _content$0$graphql$ha;
          result.tag = hashtag;
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

/**
 * Get content from
 * https://www.instagram.com/{username}/
 *
 * @example:
 * https://www.instagram.com/instagram/
 */

var getMediaByUsername = function getMediaByUsername(username) {
  return new Promise(function ($return, $error) {
    var _response$entry_data, result, url, response, content, _content$, _content$0$graphql, _content$0$graphql$us, user;

    result = {
      profile: null
    };
    url = buildURL(username + "/");
    return Promise.resolve(HTTP(url)).then(function ($await_1) {
      try {
        response = $await_1;
        content = response == null ? void 0 : (_response$entry_data = response.entry_data) == null ? void 0 : _response$entry_data.ProfilePage;

        if (content) {
          _content$0$graphql = _extends({}, content == null ? void 0 : (_content$ = content[0]) == null ? void 0 : _content$.graphql), _content$0$graphql$us = _content$0$graphql.user, user = _content$0$graphql$us === void 0 ? null : _content$0$graphql$us;
          result.profile = user;
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

export { getCitiesByCountryId, getCountries, getMediaByLocation, getMediaByPlaceId, getMediaByPostId, getMediaByReelId, getMediaBySearchQuery, getMediaByTag, getMediaByUsername, getPlacesByCityId };
