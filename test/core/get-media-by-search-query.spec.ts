import xhrmock from 'xhr-mock';
import { SEARCH_PAGE_VALID_CONTENT } from '../__mocks__/get-media-by-search-query.mock';
import { getMediaBySearchQuery } from '../../src';
import { NETWORK_BAN_MESSAGE } from '../../src/utils';

describe('[nanogram.js] - core', () => {
  describe('getMediaBySearchQuery method', () => {
    const SEARCH_QUERY = '111';
    const URL = `https://www.instagram.com/web/search/topsearch/?context=blended&query=${SEARCH_QUERY}&include_reel=true`;

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
        return res.status(200).body(JSON.stringify(SEARCH_PAGE_VALID_CONTENT.media));
      });

      await getMediaBySearchQuery(SEARCH_QUERY);
    });

    it('return correct value if everything is OK', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(SEARCH_PAGE_VALID_CONTENT.media),
      });

      const result = await getMediaBySearchQuery(SEARCH_QUERY);
      expect(result).toEqual(SEARCH_PAGE_VALID_CONTENT);
    });

    it('throw error if has network ban', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(null),
      });

      try {
        await getMediaBySearchQuery(SEARCH_QUERY);
      } catch (error) {
        expect(error).toEqual(new Error(NETWORK_BAN_MESSAGE));
      }
    });
  });
});
