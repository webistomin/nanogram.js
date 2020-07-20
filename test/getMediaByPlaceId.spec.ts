import Nanogram from '../src/nanogram';
import xhrmock from 'xhr-mock';
import {
  PlACE_PAGE_INVALID_CONTENT,
  PLACE_PAGE_RESPONSE,
  PlACE_PAGE_VALID_CONTENT,
} from './__mocks__/getMediaByPlaceId';

describe('Nanogram library', () => {
  describe('getPlacesByCityId method', () => {
    let lib: Nanogram = null;
    const PLACE_ID = 2999512;
    const URL = `https://www.instagram.com/explore/locations/${PLACE_ID}`;

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

      await lib.getMediaByPlaceId(PLACE_ID);
    });

    it('return correct value if everything is correct', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(PLACE_PAGE_RESPONSE),
      });

      await lib.getMediaByPlaceId(PLACE_ID).then((res) => {
        expect(res).toEqual(PlACE_PAGE_VALID_CONTENT);
      });
    });

    it('return default value if API returns nothing', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      await lib.getMediaByPlaceId(PLACE_ID).then((res) => {
        expect(res).toEqual(PlACE_PAGE_INVALID_CONTENT);
      });
    });

    it('return default value if search query is invalid', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      await lib.getMediaByPlaceId(undefined as number).then((res) => {
        expect(res).toEqual(PlACE_PAGE_INVALID_CONTENT);
      });
    });

    it('print error to console if argument is not provided', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      await lib.getMediaByPlaceId(undefined as number);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
