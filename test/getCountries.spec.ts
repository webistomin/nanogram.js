import Nanogram from '../src/nanogram';
import xhrmock from 'xhr-mock';

import {
  COUNTRIES_PAGE_INVALID_CONTENT,
  COUNTRIES_PAGE_RESPONSE,
  COUNTRIES_PAGE_VALID_CONTENT,
} from './__mocks__/getCountries';

describe('Nanogram library', () => {
  describe('getCountries method', () => {
    let lib: Nanogram = null;
    const URL = `https://www.instagram.com/explore/locations/`;

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

      await lib.getCountries();
    });

    it('return correct value if everything is correct', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(COUNTRIES_PAGE_RESPONSE),
      });

      await lib.getCountries().then((res) => {
        expect(res).toEqual(COUNTRIES_PAGE_VALID_CONTENT);
      });
    });

    it('return default value if API returns nothing', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      await lib.getCountries().then((res) => {
        expect(res).toEqual(COUNTRIES_PAGE_INVALID_CONTENT);
      });
    });
  });
});
