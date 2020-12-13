import { parseJSON } from '../../src/utils';

describe('[nanogram.js] - utils', () => {
  describe('parseJSON method', () => {
    it('parse js object from valid string', () => {
      const VALID_RESPONSE =
        '<script type="text/javascript">window._sharedData = {"config":{"hello":"world"}};</script>';
      const result = parseJSON(VALID_RESPONSE, true);
      expect(result).toEqual({ config: { hello: 'world' } });
    });

    it('parse js object from valid string without RegExp', () => {
      const VALID_RESPONSE = '{ "hello": "world" }';
      const result = parseJSON(VALID_RESPONSE, false);
      expect(result).toEqual({ hello: 'world' });
    });

    it('throw error if data is invalid', () => {
      expect(() => {
        const INVALID_RESPONSE: string = undefined;
        parseJSON(INVALID_RESPONSE, false);
      }).toThrow();
    });
  });
});
