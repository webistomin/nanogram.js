import xhrmock from 'xhr-mock';
import { PLACES_PAGE_RESPONSE, PLACES_PAGE_VALID_CONTENT } from '../__mocks__/get-places-by-city-id.mock';
import { getPlacesByCityId } from '../../src';
import { NETWORK_BAN_MESSAGE } from '../../src/utils';

describe('[nanogram.js] - core', () => {
  describe('getPlacesByCityId method', () => {
    const CITY_ID = 'c2728325';
    const URL = `https://www.instagram.com/explore/locations/${CITY_ID}`;

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
        return res.status(200).body(JSON.stringify(PLACES_PAGE_RESPONSE));
      });

      await getPlacesByCityId(CITY_ID);
    });

    it('return correct value if everything is correct', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(PLACES_PAGE_RESPONSE),
      });

      const result = await getPlacesByCityId(CITY_ID);
      expect(result).toEqual(PLACES_PAGE_VALID_CONTENT);
    });

    it('throw error if has network ban', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      try {
        await getPlacesByCityId(CITY_ID);
      } catch (error) {
        expect(error).toEqual(new Error(NETWORK_BAN_MESSAGE));
      }
    });
  });
});
