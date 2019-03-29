import * as readline from 'readline';

import { Palindrome } from './modules/Palindrome';

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

input.question(`Enter text to check if it is a palindrome: `, text => {
  if (new Palindrome().test(text)) {
    console.log('It is palindrome!');
  } else {
    console.log('Not palindrome.');
  }

  input.close();
  process.exit();
});
