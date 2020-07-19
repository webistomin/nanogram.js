import Nanogram from '../src/nanogram';
import xhrmock from 'xhr-mock';
import { TAG_PAGE_RESPONSE, TAG_PAGE_VALID_CONTENT, TAG_PAGE_INVALID_CONTENT } from './__mocks__/getMediaByTag';

describe('Nanogram library', () => {
  describe('getMediaByTag method', () => {
    let lib: Nanogram = null;
    const TAG = 'test';
    const URL = `https://www.instagram.com/explore/tags/${TAG}`;

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

      await lib.getMediaByTag(TAG);
    });

    it('return correct value if everything is correct', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(TAG_PAGE_RESPONSE),
      });

      await lib.getMediaByTag(TAG).then((res) => {
        expect(res).toEqual(TAG_PAGE_VALID_CONTENT);
      });
    });

    it('return default value if API returns nothing', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      await lib.getMediaByTag(TAG).then((res) => {
        expect(res).toEqual(TAG_PAGE_INVALID_CONTENT);
      });
    });

    it('return default value if search query is invalid', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      await lib.getMediaByTag(undefined as string).then((res) => {
        expect(res).toEqual(TAG_PAGE_INVALID_CONTENT);
      });
    });

    it('print error to console if argument is not provided', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      await lib.getMediaByTag(undefined as string);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
