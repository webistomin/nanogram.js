import { parseJSON } from '../../src/utils';
import { buildHTML } from '../helpers/build-html';

describe('[nanogram.js] - utils', () => {
  describe('parseJSON method', () => {
    it('parse js object from valid string', () => {
      const VALID_RESPONSE = buildHTML(JSON.stringify({ config: { hello: 'world' } }));
      const result = parseJSON(VALID_RESPONSE, true);
      expect(result).toEqual({ config: { hello: 'world' } });
    });

    it('parse js object from valid string without RegExp', () => {
      const VALID_RESPONSE = JSON.stringify({ config: { hello: 'world' } });
      const result = parseJSON(VALID_RESPONSE, false);
      expect(result).toEqual({ config: { hello: 'world' } });
    });

    it('throw error if data is invalid', () => {
      expect(() => {
        const INVALID_RESPONSE: string = undefined;
        parseJSON(INVALID_RESPONSE, false);
      }).toThrow();
    });
  });
});
