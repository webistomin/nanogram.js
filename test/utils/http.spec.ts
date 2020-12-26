import xhrmock from 'xhr-mock';
import * as Utils from '../../src/utils';

describe('[nanogram.js] - utils', () => {
  describe('HTTP method', () => {
    const URL = 'https://www.instagram.com/instagram';

    beforeEach(() => {
      xhrmock.setup();
    });

    afterEach(() => {
      xhrmock.teardown();
    });

    it("throw error if can't load data", async () => {
      xhrmock.get(URL, {
        status: 404,
      });

      try {
        await Utils.HTTP(URL);
      } catch (error) {
        expect(error).toEqual(new Error('404 for '));
      }
    });

    it('return result on success response', async () => {
      xhrmock.get(URL, {
        status: 200,
      });

      const parseJSONSpy = jest.spyOn(Utils, 'parseJSON').mockImplementation();
      await Utils.HTTP(URL);
      expect(parseJSONSpy).toHaveBeenCalled();
    });
  });
});
