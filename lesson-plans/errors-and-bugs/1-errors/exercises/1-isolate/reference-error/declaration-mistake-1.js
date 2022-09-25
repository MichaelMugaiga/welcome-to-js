'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome browser Version 105.0.5195.125 (Official Build) (64-bit)

  name: Refernce Error
  message: welf not defined

  location: line 20

  life cycle: execution phase

  the mistake: forgot to declare the variable welf

  the fix(es): we can use var, let or const to fix the error

var welf = 'ingrad';

console.log(welf);
