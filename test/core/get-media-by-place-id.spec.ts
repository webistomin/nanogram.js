import xhrmock from 'xhr-mock';
import { PLACE_PAGE_RESPONSE, PlACE_PAGE_VALID_CONTENT } from '../__mocks__/get-media-by-place-id.mock';
import { getMediaByPlaceId } from '../../src';
import { NETWORK_BAN_MESSAGE } from '../../src/utils';

describe('[nanogram.js] - core', () => {
  describe('getPlacesByCityId method', () => {
    const PLACE_ID = 2999512;
    const URL = `https://www.instagram.com/explore/locations/${PLACE_ID}`;

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
        return res.status(200).body(JSON.stringify(PLACE_PAGE_RESPONSE));
      });

      await getMediaByPlaceId(PLACE_ID);
    });

    it('return correct value if everything is OK', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(PLACE_PAGE_RESPONSE),
      });

      const result = await getMediaByPlaceId(PLACE_ID);
      expect(result).toEqual(PlACE_PAGE_VALID_CONTENT);
    });

    it('throw error if has network ban', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      try {
        await getMediaByPlaceId(PLACE_ID);
      } catch (error) {
        expect(error).toEqual(new Error(NETWORK_BAN_MESSAGE));
      }
    });
  });
});
