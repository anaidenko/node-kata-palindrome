export class Palindrome {
  public test(value: string): boolean {
    if (!value) {
      return true;
    }
    const valueNormalized = value.replace(/[^a-z0-9]/gi, '').toUpperCase();
    const valueNormalizedReverse = valueNormalized
      .split('')
      .reverse()
      .join('');
    if (valueNormalized === valueNormalizedReverse) {
      return true;
    }
    return false;
  }
}
