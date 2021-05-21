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

export { HTTP, INSTAGRAM_HOSTNAME, NETWORK_BAN_MESSAGE, SHARED_DATA_REG_EXP, buildURL, parseJSON };
