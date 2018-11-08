# PersonalNumberGenerator [![Version](https://img.shields.io/npm/v/@sletheren/personalnumbergenerator.svg)](https://www.npmjs.com/package/@sletheren/personalnumbergenerator)

A very small Javascript tool to generate valid swedish personal numbers for mocking,testing or whatever you need.

## Get started

It's very easy to use the tool, follow the instructions

### Add the package

Install the package using npm

```
npm i @sletheren/personalnumbergenerator 
```

### Import the package

* NodeJS:
```
const personalnumbergenerator = require('@sletheren/personalnumbergenerator'); 
```
* Javascript (ES6):
```
import personalnumbergenerator from '@sletheren/personalnumbergenerator'; 
```

### Generate a Personal number
Call the function you imported to generate a personal number
```
const personalNumber = personalnumbergenerator();
// personalNumber will have a format like YYMMDD1234 like 9311102001 (with a valid checksum)
```


### Enjoy mocking/Testing :)

