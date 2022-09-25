'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome browser

  name: ReferenceError
  message: cannot access before initialization

  location:line 20 column 13

  life cycle:before initialization

  the mistake: variable is being used after initialization

  the fix(es): we should declare the variable before its initialized
*/

let tomatoes = 'fresh';
console.log(tomatoes);


