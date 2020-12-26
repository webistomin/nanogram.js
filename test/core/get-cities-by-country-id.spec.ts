import xhrmock from 'xhr-mock';
import { getCitiesByCountryId } from '../../src/nanogram';
import { NETWORK_BAN_MESSAGE } from '../../src/utils';
import {
  CITIES_PAGE_INVALID_CONTENT,
  CITIES_PAGE_RESPONSE,
  CITIES_PAGE_RESPONSE_EMPTY,
  CITIES_PAGE_VALID_CONTENT,
} from '../__mocks__/get-cities-by-country-id.mock';
import { buildHTML } from '../helpers/build-html';

describe('[nanogram.js] - core', () => {
  describe('getCitiesByCountryId method', () => {
    const COUNTRY_ID = 'US';
    const URL = `https://www.instagram.com/explore/locations/${COUNTRY_ID}/`;

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
        return res.status(200).body(buildHTML(JSON.stringify(CITIES_PAGE_RESPONSE)));
      });

      await getCitiesByCountryId(COUNTRY_ID);
    });

    it('return correct value if everything is OK', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: buildHTML(JSON.stringify(CITIES_PAGE_RESPONSE)),
      });

      const result = await getCitiesByCountryId(COUNTRY_ID);
      expect(result).toEqual(CITIES_PAGE_VALID_CONTENT);
    });

    it('return default value if response is empty', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: buildHTML(JSON.stringify(CITIES_PAGE_RESPONSE_EMPTY)),
      });

      const result = await getCitiesByCountryId(COUNTRY_ID);
      expect(result).toEqual(CITIES_PAGE_INVALID_CONTENT);
    });

    it('throw error if has network ban', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: buildHTML(JSON.stringify({})),
      });

      try {
        await getCitiesByCountryId(COUNTRY_ID);
      } catch (error) {
        expect(error).toEqual(new Error(NETWORK_BAN_MESSAGE));
      }
    });
  });
});
