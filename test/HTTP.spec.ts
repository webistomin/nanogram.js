import Nanogram from '../src/nanogram';
import xhrmock from 'xhr-mock';

describe('Nanogram library', () => {
  describe('HTTP method', () => {
    let lib: Nanogram = null;
    const URL = 'https://www.instagram.com/instagram';

    beforeEach(() => {
      xhrmock.setup();
      lib = new Nanogram();
    });

    afterEach(() => {
      xhrmock.teardown();
      jest.clearAllMocks();
    });

    it("print error to console if can't parse content from string", async () => {
      xhrmock.get(URL, {
        status: 404,
        body: JSON.stringify({
          ok: false,
        }),
      });

      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      await lib['HTTP'](URL);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
