'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome browser Version 105.0.5195.125 (Official Build) (64-bit)

  name: Reference Error
  message: isValidUserName

  location: line 24 column 19

  life cycle: before initialization

  the mistake: variable is not initialized and in the wrong place

  the fix(es): initialize variable before using it 
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);
let isValidUserName;

if (userName.length > 3) {
  isValidUserName = true;
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
