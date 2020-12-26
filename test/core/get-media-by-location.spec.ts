import xhrmock from 'xhr-mock';
import {
  LOCATION_PAGE_INVALID_CONTENT,
  LOCATION_PAGE_RESPONSE,
  LOCATION_PAGE_RESPONSE_EMPTY,
  LOCATION_PAGE_VALID_CONTENT,
} from '../__mocks__/get-media-by-location.mock';
import { getMediaByLocation } from '../../src';
import { NETWORK_BAN_MESSAGE } from '../../src/utils';
import { buildHTML } from '../helpers/build-html';

describe('[nanogram.js] - core', () => {
  describe('getMediaByLocation method', () => {
    const LOCATION_ID = 6264386;
    const PLACE_NAME = 'highbridge-park';
    const URL = `https://www.instagram.com/explore/locations/${LOCATION_ID}/${PLACE_NAME}/`;

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
        return res.status(200).body(buildHTML(JSON.stringify(LOCATION_PAGE_RESPONSE)));
      });

      await getMediaByLocation(LOCATION_ID, PLACE_NAME);
    });

    it('return correct value if everything is correct', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: buildHTML(JSON.stringify(LOCATION_PAGE_RESPONSE)),
      });

      const result = await getMediaByLocation(LOCATION_ID, PLACE_NAME);
      expect(result).toEqual(LOCATION_PAGE_VALID_CONTENT);
    });

    it('return default value if response is empty', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: buildHTML(JSON.stringify(LOCATION_PAGE_RESPONSE_EMPTY)),
      });

      const result = await getMediaByLocation(LOCATION_ID, PLACE_NAME);
      expect(result).toEqual(LOCATION_PAGE_INVALID_CONTENT);
    });

    it('throw error if has network ban', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: buildHTML(JSON.stringify({})),
      });

      try {
        await getMediaByLocation(LOCATION_ID, PLACE_NAME);
      } catch (error) {
        expect(error).toEqual(new Error(NETWORK_BAN_MESSAGE));
      }
    });
  });
});
