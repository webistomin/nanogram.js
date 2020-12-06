export const INSTAGRAM_HOSTNAME = 'https://www.instagram.com/';
export const SHARED_DATA_TAG_EXP = /^[\w\W]*<script type="text\/javascript">window._sharedData = ({[\w\W]*});<\/script>[\w\W]*$/g;

export const buildURL = (query: string): string => {
  return `${INSTAGRAM_HOSTNAME}${query}`;
};

export const logError = (params: string[]): void => {
  const message = `Nanogram: please provide a valid ${params.join(' and ')}`;
  console.error(message);
};

export const parseJSON = <T>(content: string, useRegExp: boolean): T => {
  try {
    let data = content;

    if (useRegExp) {
      data = content.replace(SHARED_DATA_TAG_EXP, '$1');
    }

    return JSON.parse(data) as T;
  } catch (error) {
    console.error(`Nanogram: failure during parsing JSON.\nError message: ${(<Error>error).message}`);
  }
};

export const HTTP = async <T>(request: string, useRegExp = true): Promise<T | undefined> => {
  const xhrrequest = (method: string, url: string): Promise<XMLHttpRequest> => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = (): void => resolve(xhr);
      xhr.onerror = reject;
      xhr.send();
    });
  };

  const response = await xhrrequest('GET', request).then((response: XMLHttpRequest) => {
    if (response.status >= 200 && response.status < 400) {
      return response.responseText;
    } else {
      console.error(
        [
          'Nanogram: error during request',
          'Probably making too many requests to the Instagram application.',
          'Also check method parameters',
        ].join('\n')
      );
    }
  });

  if (response) {
    return parseJSON(response, useRegExp);
  }

  return;
};
