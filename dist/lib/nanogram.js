var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var Nanogram = /** @class */ (function () {
    function Nanogram() {
        this.INSTAGRAM_HOSTNAME = 'https://www.instagram.com/';
        this.SHARED_DATA_TEG_EXP = /^[\w\W]*<script type="text\/javascript">window._sharedData = ({[\w\W]*});<\/script>[\w\W]*$/g;
    }
    Nanogram.prototype.buildUrl = function (query) {
        return "" + this.INSTAGRAM_HOSTNAME + query;
    };
    Nanogram.prototype.parseJSON = function (content) {
        try {
            var parsedData = content.replace(this.SHARED_DATA_TEG_EXP, '$1');
            return JSON.parse(parsedData);
        }
        catch (error) {
            console.error("Nanogram: failure during parsing JSON.\nError message: " + error.message);
        }
    };
    Nanogram.prototype.HTTP = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var requestOptions, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestOptions = {
                            method: 'GET',
                            redirect: 'follow',
                        };
                        return [4 /*yield*/, fetch(request, requestOptions).then(function (response) {
                                if (response.ok) {
                                    return response.text();
                                }
                                else {
                                    console.error('Nanogram: error during request.\nProbably making too many requests to the Instagram application.\nAlso check method parameters.');
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            return [2 /*return*/, this.parseJSON(response)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Nanogram.prototype.getMediaByUsername = function (username) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!username) {
                            console.error('Nanogram: please provide a valid username');
                            return [2 /*return*/, {
                                    profile: null,
                                }];
                        }
                        url = this.buildUrl(username);
                        return [4 /*yield*/, this.HTTP(url)];
                    case 1:
                        response = _d.sent();
                        if (response) {
                            return [2 /*return*/, {
                                    profile: ((_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.entry_data) === null || _a === void 0 ? void 0 : _a.ProfilePage[0]) === null || _b === void 0 ? void 0 : _b.graphql) === null || _c === void 0 ? void 0 : _c.user) || null,
                                }];
                        }
                        return [2 /*return*/, {
                                profile: null,
                            }];
                }
            });
        });
    };
    Nanogram.prototype.getMediaByTag = function (tag) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!tag) {
                            console.error('Nanogram: please provide a valid tag');
                            return [2 /*return*/, {
                                    tag: null,
                                }];
                        }
                        url = this.buildUrl("explore/tags/" + tag);
                        return [4 /*yield*/, this.HTTP(url)];
                    case 1:
                        response = _d.sent();
                        if (response) {
                            return [2 /*return*/, {
                                    tag: ((_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.entry_data) === null || _a === void 0 ? void 0 : _a.TagPage[0]) === null || _b === void 0 ? void 0 : _b.graphql) === null || _c === void 0 ? void 0 : _c.hashtag) || null,
                                }];
                        }
                        return [2 /*return*/, {
                                tag: null,
                            }];
                }
            });
        });
    };
    Nanogram.prototype.getMediaByLocation = function (locationId, placeName) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!locationId || !placeName) {
                            console.error('Nanogram: please provide a valid location id and place name');
                            return [2 /*return*/, {
                                    location: null,
                                }];
                        }
                        url = this.buildUrl("explore/locations/" + locationId + "/" + placeName);
                        return [4 /*yield*/, this.HTTP(url)];
                    case 1:
                        response = _d.sent();
                        if (response) {
                            return [2 /*return*/, {
                                    location: ((_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.entry_data) === null || _a === void 0 ? void 0 : _a.LocationsPage[0]) === null || _b === void 0 ? void 0 : _b.graphql) === null || _c === void 0 ? void 0 : _c.location) || null,
                                }];
                        }
                        return [2 /*return*/, {
                                location: null,
                            }];
                }
            });
        });
    };
    Nanogram.prototype.getCountries = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = this.buildUrl("explore/locations/");
                        return [4 /*yield*/, this.HTTP(url)];
                    case 1:
                        response = _c.sent();
                        if (response) {
                            return [2 /*return*/, {
                                    country_list: ((_b = (_a = response === null || response === void 0 ? void 0 : response.entry_data) === null || _a === void 0 ? void 0 : _a.LocationsDirectoryPage[0]) === null || _b === void 0 ? void 0 : _b.country_list) || null,
                                }];
                        }
                        return [2 /*return*/, {
                                country_list: null,
                            }];
                }
            });
        });
    };
    Nanogram.prototype.getCitiesByCountryId = function (countryId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, _a, city_list, country_info;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!countryId) {
                            console.error('Nanogram: please provide a valid country id');
                            return [2 /*return*/, {
                                    city_list: null,
                                    country_info: null,
                                }];
                        }
                        url = this.buildUrl("explore/locations/" + countryId);
                        return [4 /*yield*/, this.HTTP(url)];
                    case 1:
                        response = _b.sent();
                        if (response) {
                            _a = response === null || response === void 0 ? void 0 : response.entry_data.LocationsDirectoryPage[0], city_list = _a.city_list, country_info = _a.country_info;
                            return [2 /*return*/, {
                                    city_list: city_list || null,
                                    country_info: country_info || null,
                                }];
                        }
                        return [2 /*return*/, {
                                city_list: null,
                                country_info: null,
                            }];
                }
            });
        });
    };
    Nanogram.prototype.getPlaceByCityId = function (cityId) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var url, response, _b, city_info, country_info, location_list;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!cityId) {
                            console.error('Nanogram: please provide a valid city id');
                            return [2 /*return*/, {
                                    place: {
                                        city_info: null,
                                        country_info: null,
                                        location_list: null,
                                    },
                                }];
                        }
                        url = this.buildUrl("explore/locations/" + cityId);
                        return [4 /*yield*/, this.HTTP(url)];
                    case 1:
                        response = _c.sent();
                        if (response) {
                            _b = (_a = response === null || response === void 0 ? void 0 : response.entry_data) === null || _a === void 0 ? void 0 : _a.LocationsDirectoryPage[0], city_info = _b.city_info, country_info = _b.country_info, location_list = _b.location_list;
                            return [2 /*return*/, {
                                    place: {
                                        city_info: city_info || null,
                                        country_info: country_info || null,
                                        location_list: location_list || null,
                                    },
                                }];
                        }
                        return [2 /*return*/, {
                                place: {
                                    city_info: null,
                                    country_info: null,
                                    location_list: null,
                                },
                            }];
                }
            });
        });
    };
    Nanogram.prototype.getMediaByPlaceId = function (placeId) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!placeId) {
                            console.error('Nanogram: please provide a valid place id');
                            return [2 /*return*/, {
                                    location: null,
                                }];
                        }
                        url = this.buildUrl("explore/locations/" + placeId);
                        return [4 /*yield*/, this.HTTP(url)];
                    case 1:
                        response = _c.sent();
                        if (response) {
                            return [2 /*return*/, {
                                    location: ((_b = (_a = response === null || response === void 0 ? void 0 : response.entry_data) === null || _a === void 0 ? void 0 : _a.LocationsPage[0]) === null || _b === void 0 ? void 0 : _b.graphql.location) || null,
                                }];
                        }
                        return [2 /*return*/, {
                                location: null,
                            }];
                }
            });
        });
    };
    Nanogram.prototype.getMediaBySearchQuery = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var url, _a, users, hashtags, places;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!query) {
                            console.error('Nanogram: please provide a search query');
                            return [2 /*return*/, {
                                    users: null,
                                    hashtags: null,
                                    places: null,
                                }];
                        }
                        url = this.buildUrl("web/search/topsearch/?context=blended&query=" + query + "&include_reel=true");
                        return [4 /*yield*/, this.HTTP(url)];
                    case 1:
                        _a = _b.sent(), users = _a.users, hashtags = _a.hashtags, places = _a.places;
                        return [2 /*return*/, {
                                users: users || null,
                                hashtags: hashtags || null,
                                places: places || null,
                            }];
                }
            });
        });
    };
    return Nanogram;
}());
export default Nanogram;
//# sourceMappingURL=nanogram.js.map