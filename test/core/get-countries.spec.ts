import xhrmock from 'xhr-mock';
import { getCountries } from '../../src/nanogram';
import {
  COUNTRIES_PAGE_INVALID_CONTENT,
  COUNTRIES_PAGE_RESPONSE,
  COUNTRIES_PAGE_RESPONSE_EMPTY,
  COUNTRIES_PAGE_VALID_CONTENT,
} from '../__mocks__/get-countries.mock';
import { NETWORK_BAN_MESSAGE } from '../../src/utils';
import { buildHTML } from '../helpers/build-html';

describe('[nanogram.js] - core', () => {
  describe('getCountries method', () => {
    const URL = `https://www.instagram.com/explore/locations/`;

    beforeEach(() => {
      xhrmock.setup();
    });

    afterEach(() => {
      xhrmock.teardown();
    });

    it('fetch correct URL', async () => {
      expect.assertions(1);

      xhrmock.get(URL, (req, res) => {
        expect(req.url().toString()).toEqual(URL);
        return res.status(200).body(buildHTML(JSON.stringify(COUNTRIES_PAGE_RESPONSE)));
      });

      await getCountries();
    });

    it('return correct value if everything is OK', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: buildHTML(JSON.stringify(COUNTRIES_PAGE_RESPONSE)),
      });

      const result = await getCountries();
      expect(result).toEqual(COUNTRIES_PAGE_VALID_CONTENT);
    });

    it('return default value if response is empty', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: buildHTML(JSON.stringify(COUNTRIES_PAGE_RESPONSE_EMPTY)),
      });

      const result = await getCountries();
      expect(result).toEqual(COUNTRIES_PAGE_INVALID_CONTENT);
    });

    it('throw error if has network ban', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: buildHTML(JSON.stringify({})),
      });

      try {
        await getCountries();
      } catch (error) {
        expect(error).toEqual(new Error(NETWORK_BAN_MESSAGE));
      }
    });
  });
});
