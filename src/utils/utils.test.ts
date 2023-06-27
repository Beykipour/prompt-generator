import { _getInstructionIfApplicable, _trimAllValuesInObject } from './utils';

describe('utils', () => {
  describe('_trimAllValuesInObject', () => {
    it('should trim all the values in the object', () => {
      expect(
        _trimAllValuesInObject({ a: ['a ', ' b'], b: 1, c: ['a', 'b'], d: ' d ', e: 'e', f: { a: ' fa ' } }),
      ).toEqual({
        a: ['a', 'b'],
        b: 1,
        c: ['a', 'b'],
        d: 'd',
        e: 'e',
        f: { a: 'fa' },
      });
    });
  });

  describe('_getInstructionIfApplicable', () => {
    it('should return the instruction if the condition is true', () => {
      expect(_getInstructionIfApplicable('instruction', true)).toBe('instruction');
    });

    it('should return an empty string if the condition is false', () => {
      expect(_getInstructionIfApplicable('instruction', false)).toBe('');
    });
  });
});
