import Nanogram from '../src/nanogram';
import xhrmock from 'xhr-mock';
import {
  PLACES_PAGE_RESPONSE,
  PLACES_PAGE_INVALID_CONTENT,
  PLACES_PAGE_VALID_CONTENT,
} from './__mocks__/getPlacesByCityId';

describe('Nanogram library', () => {
  describe('getPlacesByCityId method', () => {
    let lib: Nanogram = null;
    const CITY_ID = 'c2728325';
    const URL = `https://www.instagram.com/explore/locations/${CITY_ID}`;

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

      await lib.getPlacesByCityId(CITY_ID);
    });

    it('return correct value if everything is correct', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(PLACES_PAGE_RESPONSE),
      });

      await lib.getPlacesByCityId(CITY_ID).then((res) => {
        expect(res).toEqual(PLACES_PAGE_VALID_CONTENT);
      });
    });

    it('return default value if API returns nothing', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      await lib.getPlacesByCityId(CITY_ID).then((res) => {
        expect(res).toEqual(PLACES_PAGE_INVALID_CONTENT);
      });
    });

    it('return default value if search query is invalid', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      await lib.getPlacesByCityId(undefined as string).then((res) => {
        expect(res).toEqual(PLACES_PAGE_INVALID_CONTENT);
      });
    });

    it('print error to console if argument is not provided', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      await lib.getPlacesByCityId(undefined as string);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
