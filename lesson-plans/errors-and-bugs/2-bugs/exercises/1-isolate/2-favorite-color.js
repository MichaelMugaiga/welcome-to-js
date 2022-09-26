'use strict';

/*
  test cases:
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  experiment 1
    line: 21
    why:
    trying:

  experiment 2
    line: 22
    why:
    trying:

*/

let message = 'you entered "';

while (true) {
  const input = prompt('enter something');

  if (input !== null && input.length > 0) {
    message = message + input + '"';
    break;
  }
}

alert(message);
