import Nanogram from '../src/nanogram';

describe('Nanogram library', () => {
  describe('parseJSON method', () => {
    let lib: Nanogram = null;

    beforeEach(() => {
      lib = new Nanogram();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("print error to console if can't parse content from string", async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      await lib['parseJSON'](undefined as string, true);
      expect(consoleSpy).toHaveBeenCalled();
    });

    it('parse js object from valid string', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      const validString = '<script type="text/javascript">window._sharedData = {"config":{"hello":"world"}};</script>';
      const result = await lib['parseJSON'](validString, true);
      expect(consoleSpy).not.toHaveBeenCalled();
      expect(result).toEqual({ config: { hello: 'world' } });
    });
  });
});
