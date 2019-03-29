export class Palindrome {
  public test(value: string): boolean {
    if (!value) {
      return true;
    }
    const valueReverse = value
      .split('')
      .reverse()
      .join('');
    if (value.toUpperCase() === valueReverse.toUpperCase()) {
      return true;
    }
    return false;
  }
}
