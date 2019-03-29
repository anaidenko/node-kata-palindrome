import { Palindrome } from './Palindrome';

describe('Palindrome', () => {
  it('should have constructor', () => {
    expect(new Palindrome()).toBeTruthy();
  });

  describe('#test', () => {
    it('should be truthy for empty string', () => {
      expect(new Palindrome().test('')).toBe(true);
    });

    it('should be falsy for "asdf" and "qwer"', () => {
      expect(new Palindrome().test('asdf')).toBe(false);
      expect(new Palindrome().test('qwer')).toBe(false);
    });

    it('should be truthy for "a", ada" and "yay"', () => {
      expect(new Palindrome().test('a')).toBe(true);
      expect(new Palindrome().test('ada')).toBe(true);
      expect(new Palindrome().test('yay')).toBe(true);
    });

    it('should ignore case', () => {
      expect(new Palindrome().test('Ada')).toBe(true);
      expect(new Palindrome().test('yaY')).toBe(true);
    });
  });
});
