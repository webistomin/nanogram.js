import Nanogram from '../src/nanogram';
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

describe('Nanogram library', () => {
  describe('HTTP method', () => {
    let lib: Nanogram = null;
    const URL = 'https://www.instagram.com/instagram';

    beforeEach(() => {
      fetchMock.resetMocks();
      lib = new Nanogram();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("print error to console if can't parse content from string", async () => {
      fetchMock.mockOnce('the next call to fetch will always return this as the body');
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      await lib['HTTP'](URL);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
