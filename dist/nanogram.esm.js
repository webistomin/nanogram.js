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

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var NETWORK_BAN_MESSAGE = [
    '[nanogram.js] It looks like your network has been temporary banned because of too many requests.',
].join('\n');
/**
 * Append a query to the base instagram url
 */
var buildURL = function (query) {
    return "" + INSTAGRAM_HOSTNAME + query;
};
/**
 * Parse JSON from HTTP response
 */
var parseJSON = function (content, useRegExp) {
    try {
        var data = content;
        if (useRegExp) {
            data = SHARED_DATA_REG_EXP.exec(content)[1];
        }
        return JSON.parse(data);
    }
    catch (error) {
        throw new Error(error);
    }
};
/**
 * Promisified XMLHttpRequest
 */
var xhrRequest = function (method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () { return resolve(xhr); };
        xhr.onerror = reject;
        xhr.send();
    });
};
/**
 * Module for making HTTP requests
 */
var HTTP = function (url, useRegExp) {
    if (useRegExp === void 0) { useRegExp = true; }
    return __awaiter(void 0, void 0, void 0, function () {
        var response, responseText, status, responseURL;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, xhrRequest('GET', url)];
                case 1:
                    response = _a.sent();
                    responseText = response.responseText, status = response.status, responseURL = response.responseURL;
                    if (status >= 200 && status < 400) {
                        return [2 /*return*/, parseJSON(responseText, useRegExp)];
                    }
                    else {
                        throw new Error(status + " for " + responseURL);
                    }
            }
        });
    });
};

/**
 * Get content from
 * https://www.instagram.com/explore/locations/{countryId}/
 *
 * @example
 * https://www.instagram.com/explore/locations/US/
 */
var getCitiesByCountryId = function (countryId) { return __awaiter(void 0, void 0, void 0, function () {
    var result, url, response, content, _a, _b, city_list, _c, country_info;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                result = {
                    city_list: null,
                    country_info: null,
                };
                url = buildURL("explore/locations/" + countryId + "/");
                return [4 /*yield*/, HTTP(url)];
            case 1:
                response = _e.sent();
                content = (_d = response === null || response === void 0 ? void 0 : response.entry_data) === null || _d === void 0 ? void 0 : _d.LocationsDirectoryPage;
                if (content) {
                    _a = __assign({}, content === null || content === void 0 ? void 0 : content[0]), _b = _a.city_list, city_list = _b === void 0 ? null : _b, _c = _a.country_info, country_info = _c === void 0 ? null : _c;
                    result.city_list = city_list;
                    result.country_info = country_info;
                }
                else {
                    throw new Error(NETWORK_BAN_MESSAGE);
                }
                return [2 /*return*/, result];
        }
    });
}); };

/**
 * Get content from
 * https://www.instagram.com/explore/locations/
 *
 * @example
 * https://www.instagram.com/explore/locations/
 */
var getCountries = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result, url, response, content, _a, country_list;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                result = {
                    country_list: null,
                };
                url = buildURL("explore/locations/");
                return [4 /*yield*/, HTTP(url)];
            case 1:
                response = _c.sent();
                content = (_b = response === null || response === void 0 ? void 0 : response.entry_data) === null || _b === void 0 ? void 0 : _b.LocationsDirectoryPage;
                if (content) {
                    _a = __assign({}, content === null || content === void 0 ? void 0 : content[0]).country_list, country_list = _a === void 0 ? null : _a;
                    result.country_list = country_list;
                }
                else {
                    throw new Error(NETWORK_BAN_MESSAGE);
                }
                return [2 /*return*/, result];
        }
    });
}); };

/**
 * Get content from
 * https://www.instagram.com/explore/locations/{locationId}/{placeName}
 *
 * @example
 * https://www.instagram.com/explore/locations/6264386/highbridge-park
 */
var getMediaByLocation = function (locationId, placeName) { return __awaiter(void 0, void 0, void 0, function () {
    var result, url, response, content, _a, location_1;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                result = {
                    location: null,
                };
                url = buildURL("explore/locations/" + locationId + "/" + placeName + "/");
                return [4 /*yield*/, HTTP(url)];
            case 1:
                response = _d.sent();
                content = (_b = response === null || response === void 0 ? void 0 : response.entry_data) === null || _b === void 0 ? void 0 : _b.LocationsPage;
                if (content) {
                    _a = __assign({}, (_c = content === null || content === void 0 ? void 0 : content[0]) === null || _c === void 0 ? void 0 : _c.graphql).location, location_1 = _a === void 0 ? null : _a;
                    result.location = location_1;
                }
                else {
                    throw new Error(NETWORK_BAN_MESSAGE);
                }
                return [2 /*return*/, result];
        }
    });
}); };

/**
 * Get content from
 * https://www.instagram.com/explore/locations/{placeId}/
 *
 * @example
 * https://www.instagram.com/explore/locations/2999512/
 */
var getMediaByPlaceId = function (placeId) { return __awaiter(void 0, void 0, void 0, function () {
    var result, url, response, content, _a, location_1;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                result = {
                    location: null,
                };
                url = buildURL("explore/locations/" + placeId + "/");
                return [4 /*yield*/, HTTP(url)];
            case 1:
                response = _d.sent();
                content = (_b = response === null || response === void 0 ? void 0 : response.entry_data) === null || _b === void 0 ? void 0 : _b.LocationsPage;
                if (content) {
                    _a = __assign({}, (_c = content === null || content === void 0 ? void 0 : content[0]) === null || _c === void 0 ? void 0 : _c.graphql).location, location_1 = _a === void 0 ? null : _a;
                    result.location = location_1;
                }
                else {
                    throw new Error(NETWORK_BAN_MESSAGE);
                }
                return [2 /*return*/, result];
        }
    });
}); };

/**
 * Get content from
 * https://www.instagram.com/p/{postId}/
 *
 * @example
 * https://www.instagram.com/p/CIrIDMtDwn4/
 */
var getMediaByPostId = function (postId) { return __awaiter(void 0, void 0, void 0, function () {
    var result, url, response, content, _a, shortcode_media;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                result = {
                    post: null,
                };
                url = buildURL("p/" + postId + "/");
                return [4 /*yield*/, HTTP(url)];
            case 1:
                response = _d.sent();
                content = (_b = response === null || response === void 0 ? void 0 : response.entry_data) === null || _b === void 0 ? void 0 : _b.PostPage;
                if (content) {
                    _a = __assign({}, (_c = content === null || content === void 0 ? void 0 : content[0]) === null || _c === void 0 ? void 0 : _c.graphql).shortcode_media, shortcode_media = _a === void 0 ? null : _a;
                    result.post = shortcode_media;
                }
                else {
                    throw new Error(NETWORK_BAN_MESSAGE);
                }
                return [2 /*return*/, result];
        }
    });
}); };

/**
 * Get content from
 * https://www.instagram.com/reel/{reelId}/
 *
 * @example
 * https://www.instagram.com/reel/CKONdDkJaPU/
 */
var getMediaByReelId = function (reelId) { return __awaiter(void 0, void 0, void 0, function () {
    var result, url, response, content, _a, shortcode_media;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                result = {
                    reel: null,
                };
                url = buildURL("reel/" + reelId + "/");
                return [4 /*yield*/, HTTP(url)];
            case 1:
                response = _d.sent();
                content = (_b = response === null || response === void 0 ? void 0 : response.entry_data) === null || _b === void 0 ? void 0 : _b.PostPage;
                if (content) {
                    _a = __assign({}, (_c = content === null || content === void 0 ? void 0 : content[0]) === null || _c === void 0 ? void 0 : _c.graphql).shortcode_media, shortcode_media = _a === void 0 ? null : _a;
                    result.reel = shortcode_media;
                }
                else {
                    throw new Error(NETWORK_BAN_MESSAGE);
                }
                return [2 /*return*/, result];
        }
    });
}); };

/**
 * Get content from
 * https://www.instagram.com/web/search/topsearch/?context=blended&query={query}&include_reel=true
 *
 * @example
 * https://www.instagram.com/web/search/topsearch/?context=blended&query=sunset&include_reel=true
 */
var getMediaBySearchQuery = function (query) { return __awaiter(void 0, void 0, void 0, function () {
    var result, url, response, _a, users, _b, hashtags, _c, places;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                result = {
                    media: {
                        users: null,
                        hashtags: null,
                        places: null,
                    },
                };
                url = buildURL("web/search/topsearch/?context=blended&query=" + query + "&include_reel=true");
                return [4 /*yield*/, HTTP(url, false)];
            case 1:
                response = _d.sent();
                if (response) {
                    _a = response.users, users = _a === void 0 ? null : _a, _b = response.hashtags, hashtags = _b === void 0 ? null : _b, _c = response.places, places = _c === void 0 ? null : _c;
                    result.media.users = users;
                    result.media.hashtags = hashtags;
                    result.media.places = places;
                }
                else {
                    throw new Error(NETWORK_BAN_MESSAGE);
                }
                return [2 /*return*/, result];
        }
    });
}); };

/**
 * Get content from
 * https://www.instagram.com/explore/tags/{tag}/
 *
 * @example
 * https://www.instagram.com/explore/tags/sunset/
 */
var getMediaByTag = function (tag) { return __awaiter(void 0, void 0, void 0, function () {
    var result, url, response, content, _a, hashtag;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                result = {
                    tag: null,
                };
                url = buildURL("explore/tags/" + tag + "/");
                return [4 /*yield*/, HTTP(url)];
            case 1:
                response = _d.sent();
                content = (_b = response === null || response === void 0 ? void 0 : response.entry_data) === null || _b === void 0 ? void 0 : _b.TagPage;
                if (content) {
                    _a = __assign({}, (_c = content === null || content === void 0 ? void 0 : content[0]) === null || _c === void 0 ? void 0 : _c.graphql).hashtag, hashtag = _a === void 0 ? null : _a;
                    result.tag = hashtag;
                }
                else {
                    throw new Error(NETWORK_BAN_MESSAGE);
                }
                return [2 /*return*/, result];
        }
    });
}); };

/**
 * Get content from
 * https://www.instagram.com/{username}/
 *
 * @example:
 * https://www.instagram.com/instagram/
 */
var getMediaByUsername = function (username) { return __awaiter(void 0, void 0, void 0, function () {
    var result, url, response, content, _a, user;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                result = {
                    profile: null,
                };
                url = buildURL(username + "/");
                return [4 /*yield*/, HTTP(url)];
            case 1:
                response = _d.sent();
                content = (_b = response === null || response === void 0 ? void 0 : response.entry_data) === null || _b === void 0 ? void 0 : _b.ProfilePage;
                if (content) {
                    _a = __assign({}, (_c = content === null || content === void 0 ? void 0 : content[0]) === null || _c === void 0 ? void 0 : _c.graphql).user, user = _a === void 0 ? null : _a;
                    result.profile = user;
                }
                else {
                    throw new Error(NETWORK_BAN_MESSAGE);
                }
                return [2 /*return*/, result];
        }
    });
}); };

/**
 * Get content from
 * https://www.instagram.com/explore/locations/{cityId}/
 *
 * @example
 * https://www.instagram.com/explore/locations/c2728325/
 */
var getPlacesByCityId = function (cityId) { return __awaiter(void 0, void 0, void 0, function () {
    var result, url, response, content, _a, _b, city_info, _c, country_info, _d, location_list;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                result = {
                    place: {
                        city_info: null,
                        country_info: null,
                        location_list: null,
                    },
                };
                url = buildURL("explore/locations/" + cityId + "/");
                return [4 /*yield*/, HTTP(url)];
            case 1:
                response = _f.sent();
                content = (_e = response === null || response === void 0 ? void 0 : response.entry_data) === null || _e === void 0 ? void 0 : _e.LocationsDirectoryPage;
                if (content) {
                    _a = __assign({}, content === null || content === void 0 ? void 0 : content[0]), _b = _a.city_info, city_info = _b === void 0 ? null : _b, _c = _a.country_info, country_info = _c === void 0 ? null : _c, _d = _a.location_list, location_list = _d === void 0 ? null : _d;
                    result.place.city_info = city_info;
                    result.place.country_info = country_info;
                    result.place.location_list = location_list;
                }
                else {
                    throw new Error(NETWORK_BAN_MESSAGE);
                }
                return [2 /*return*/, result];
        }
    });
}); };

export { getCitiesByCountryId, getCountries, getMediaByLocation, getMediaByPlaceId, getMediaByPostId, getMediaByReelId, getMediaBySearchQuery, getMediaByTag, getMediaByUsername, getPlacesByCityId };
