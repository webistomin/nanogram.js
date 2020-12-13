import { buildURL } from '../../src/utils';

describe('[nanogram.js] - utils', () => {
  describe('buildURL method', () => {
    it('append string to base url', () => {
      const PATH = '/p/123';
      const result = buildURL(PATH);
      expect(result).toEqual(`https://www.instagram.com/${PATH}`);
    });
  });
});
