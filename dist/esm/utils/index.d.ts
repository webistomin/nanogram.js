/**
 * Base instagram url for every http request
 */
export declare const INSTAGRAM_HOSTNAME = "https://www.instagram.com/";
/**
 * RegExp to parse
 * <script type="text/javascript">window._sharedData = {}</script>
 * from HTML response
 */
export declare const SHARED_DATA_REG_EXP: RegExp;
/**
 * Message for network ban
 */
export declare const NETWORK_BAN_MESSAGE: string;
/**
 * Append a query to the base instagram url
 */
export declare const buildURL: (query: string) => string;
/**
 * Parse JSON from HTTP response
 */
export declare const parseJSON: <T>(content: string, useRegExp: boolean) => T;
/**
 * Module for making HTTP requests
 */
export declare const HTTP: <T>(url: string, useRegExp?: boolean) => Promise<T>;
