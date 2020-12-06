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
 * Append a query to the base instagram url
 */
export const buildURL = (query: string): string => {
  return `${INSTAGRAM_HOSTNAME}${query}`;
};

/**
 * Log error to the user console.
 * Used in every function which requires parameters
 */
export const logError = (messages: string[]): void => {
  const errors = messages.map((message) => [message, '\n']);
  errors.unshift(['[nanogram.js]', '\n']);
  console.error(errors.join(''));
};

/**
 * Parse JSON from HTTP response
 */
export const parseJSON = <T>(content: string, useRegExp: boolean): T => {
  try {
    let data = content;

    if (useRegExp) {
      data = content.replace(SHARED_DATA_REG_EXP, '$1');
    }

    return JSON.parse(data) as T;
  } catch (error) {
    logError(['failure during parsing JSON.', `Error message: ${(<Error>error).message}`]);
  }
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
export const HTTP = async <T>(url: string, useRegExp = true): Promise<T | undefined> => {
  return xhrRequest('GET', url).then((response) => {
    const responseText = response.responseText;

    if (response.status >= 200 && response.status < 400 && responseText) {
      return parseJSON(responseText, useRegExp);
    } else {
      logError(['Probably making too many requests to the Instagram application.', 'Also check method parameters']);
    }
  });
};
