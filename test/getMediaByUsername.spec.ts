import Nanogram from '../src/nanogram';
import xhrmock from 'xhr-mock';
import { USER_PAGE_INVALID_CONTENT, USER_PAGE_VALID_CONTENT, USER_PAGE_RESPONSE } from './__mocks__/getMediaByUsername';

describe('Nanogram library', () => {
  describe('getMediaByUsername method', () => {
    let lib: Nanogram = null;
    const USERNAME = 'instagram';
    const URL = `https://www.instagram.com/${USERNAME}`;

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

      await lib.getMediaByUsername(USERNAME);
    });

    it('return correct value if everything is correct', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(USER_PAGE_RESPONSE),
      });

      await lib.getMediaByUsername(USERNAME).then((res) => {
        expect(res).toEqual(USER_PAGE_VALID_CONTENT);
      });
    });

    it('return default value if API returns nothing', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      await lib.getMediaByUsername(USERNAME).then((res) => {
        expect(res).toEqual(USER_PAGE_INVALID_CONTENT);
      });
    });

    it('return default value if search query is invalid', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      await lib.getMediaByUsername(undefined as string).then((res) => {
        expect(res).toEqual(USER_PAGE_INVALID_CONTENT);
      });
    });

    it('print error to console if argument is not provided', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      await lib.getMediaByUsername(undefined as string);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
