

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome browser

  name:Syntax Error
  message:Unexpected token

  location: line 27

  life cycle:

  the mistake: in execution phase

  the fix(es): add else if

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}


