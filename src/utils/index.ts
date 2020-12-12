/**
 * Base instagram url for every http request
 */
export const INSTAGRAM_HOSTNAME = 'https://www.instagram.com/';

/**
 * RegExp to parse
 * <script type="text/javascript">window._sharedData = {}</script>
 * from HTML response
 */
export const SHARED_DATA_REG_EXP = /^[\w\W]*<script type="text\/javascript">window._sharedData = ({[\w\W]*});<\/script>[\w\W]*$/g;

/**
 * Message for network ban
 */
export const NETWORK_BAN_MESSAGE = [
  '[nanogram.js] It looks like your network has been temporary banned because of too many requests.',
  'See ...',
].join('\n');

/**
 * Append a query to the base instagram url
 */
export const buildURL = (query: string): string => {
  return `${INSTAGRAM_HOSTNAME}${query}`;
};

/**
 * Parse JSON from HTTP response
 */
export const parseJSON = <T>(content: string, useRegExp: boolean): T => {
  let data = content;

  if (useRegExp) {
    data = content.replace(SHARED_DATA_REG_EXP, '$1');
  }

  return JSON.parse(data) as T;
};

/**
 * Promisified XMLHttpRequest
 */
const xhrRequest = (method: string, url: string): Promise<XMLHttpRequest> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = (): void => resolve(xhr);
    xhr.onerror = reject;
    xhr.send();
  });
};

/**
 * Module for making HTTP requests
 */
export const HTTP = async <T>(url: string, useRegExp = true): Promise<T | never> => {
  const response = await xhrRequest('GET', url);
  const { responseText, status, responseURL } = response;

  if (status >= 200 && status < 400) {
    return parseJSON(responseText, useRegExp);
  } else {
    throw new Error(`${status} for ${responseURL}`);
  }
};
