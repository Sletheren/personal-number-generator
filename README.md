# Personal-Number-Generator [![Version](https://img.shields.io/npm/v/personal-number-generator.svg)](https://www.npmjs.com/package/personal-number-generator)

A very small Javascript tool to generate valid swedish personal numbers for mocking, testing or whatever you need.

## Get started

It's very easy to use the tool, follow the instructions

### Add the package

Install the package using npm

```
npm i personal-number-generator 
```

### Import the package

* NodeJS:
````js
const personalnumbergenerator = require('personal-number-generator'); 
````

* Javascript (ES6):
````js
import personalnumbergenerator from 'personal-number-generator'; 
````

### Generate a Personal number
Call the function you imported to generate a personal number

````js
const personalNumber = personalnumbergenerator();
console.log(personalNumber); // 9407121939
````

### Enjoy generating :)

