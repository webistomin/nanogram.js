import Nanogram from '../src/nanogram';
import xhrmock from 'xhr-mock';
import { SEARCH_PAGE_INVALID_CONTENT, SEARCH_PAGE_VALID_CONTENT } from './__mocks__/getMediaBySearchQuery';

describe('Nanogram library', () => {
  describe('getMediaBySearchQuery method', () => {
    let lib: Nanogram = null;
    const SEARCH_QUERY = '111';
    const URL = `https://www.instagram.com/web/search/topsearch/?context=blended&query=${SEARCH_QUERY}&include_reel=true`;

    beforeEach(() => {
      xhrmock.setup();
      lib = new Nanogram();
    });

    afterEach(() => {
      xhrmock.teardown();
      jest.clearAllMocks();
    });

    it('fetch correct URL', async () => {
      expect.assertions(1);

      xhrmock.get(URL, (req, res) => {
        expect(req.url().toString()).toEqual(URL);
        return res.status(200).body(JSON.stringify({}));
      });

      await lib.getMediaBySearchQuery(SEARCH_QUERY);
    });

    it('return correct value if everything is correct', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(SEARCH_PAGE_VALID_CONTENT.media),
      });

      await lib.getMediaBySearchQuery(SEARCH_QUERY).then((res) => {
        expect(res).toEqual(SEARCH_PAGE_VALID_CONTENT);
      });
    });

    it('return default value if API returns nothing', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      await lib.getMediaBySearchQuery(SEARCH_QUERY).then((res) => {
        expect(res).toEqual(SEARCH_PAGE_INVALID_CONTENT);
      });
    });

    it('return default value if search query is invalid', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      await lib.getMediaBySearchQuery(undefined as string).then((res) => {
        expect(res).toEqual(SEARCH_PAGE_INVALID_CONTENT);
      });
    });

    it('print error to console if argument is not provided', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      await lib.getMediaBySearchQuery(undefined as string);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
