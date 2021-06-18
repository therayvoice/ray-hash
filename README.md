# ray-hash
A crypto based NodeJS library for hashes, built for the development of ray-net. Highly Chainable, Pipeable, and overall awesome.

# Installation
To install ray-hash with NPM use:
```
npm i ray-hash --save
```

To Import in code use:
```javascript
const hash = require('ray-hash');
```

# Usage
To get Hash of a string:
```javascript
let stringHash = hash
  .getHash("Hello World")
  .value;
```

To get Hash of a file: 
```javascript
let fileHash = hash
  .getHashOfFile("./anyFile.xyz")
  .value;
```

To pass the value to an external Method like console.log():
```javascript
hash
  .getHashOfFile("./tests/mainTest.js")
  .pipe(console.log);
```

Warning: Do not pass the value to an Internal Method, the library is not supposed to be used like that!

To verify a hash of a file:
```javascript
const fileHash = "bdccc9054d039718af1e1d1545470c850e1d2830dacf9400551534522eb6c027";

let fileIsSolid = hash
  .verifyFile("./file.xyz", fileHash)
  .value; // return true/false
```

Join my Discord Server at "Ray Voice's Server" for disscussion on future versions.

# License
MIT License

Copyright (c) 2021 Ray Voice

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

