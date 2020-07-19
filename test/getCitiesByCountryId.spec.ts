import Nanogram from '../src/nanogram';
import xhrmock from 'xhr-mock';
import {
  CITIES_PAGE_RESPONSE,
  CITIES_PAGE_INVALID_CONTENT,
  CITIES_PAGE_VALID_CONTENT,
} from './__mocks__/getCitiesByCountryId';

describe('Nanogram library', () => {
  describe('getCitiesByCountryId method', () => {
    let lib: Nanogram = null;
    const COUNTRY_ID = 'US';
    const URL = `https://www.instagram.com/explore/locations/${COUNTRY_ID}`;

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

      await lib.getCitiesByCountryId(COUNTRY_ID);
    });

    it('return correct value if everything is correct', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(CITIES_PAGE_RESPONSE),
      });

      await lib.getCitiesByCountryId(COUNTRY_ID).then((res) => {
        expect(res).toEqual(CITIES_PAGE_VALID_CONTENT);
      });
    });

    it('return default value if API returns nothing', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      await lib.getCitiesByCountryId(COUNTRY_ID).then((res) => {
        expect(res).toEqual(CITIES_PAGE_INVALID_CONTENT);
      });
    });

    it('return default value if search query is invalid', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      await lib.getCitiesByCountryId(undefined as string).then((res) => {
        expect(res).toEqual(CITIES_PAGE_INVALID_CONTENT);
      });
    });

    it('print error to console if argument is not provided', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      await lib.getCitiesByCountryId(undefined as string);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
