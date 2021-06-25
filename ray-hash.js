const crypto = require('crypto');
const fs = require('ray-fs');
const path = require('path');

const rayHashAuthors = "Ray Voice and Anna Voice";
const rayHashVersion = "v0.1.0";

module.exports = {
  value: 0,
  version: function(){
    this.value = rayHashVersion;
    return this;
  },
  authors: function(){
    this.value = rayHashAuthors;
    return this;
  },
  pipe: function (method) {
    return method(this.value);
  },
  pipeForVal: function (method) {
    return method(this.value).value;
  },
  getHash: function (data) {
    const hash = crypto.createHash('sha256');
    hash.setEncoding('hex');
    hash.write(JSON.stringify(data));
    hash.end();
    this.value = hash.read();
    return this;
  },
  getHashOfFile: function (fileURL) {
    const fileData = fs.read(fileURL).value;
    this.value = this.getHash(fileData).value;
    return this;
  },
  verifyFile: function (fileName, supposedHash) {
    const fileURL = fileName;
    const realFileHash = this.getHashOfFile(fileURL).value;
    if (supposedHash === realFileHash) {
      this.value = true;
    } else {
      this.value = false;
    }
    return this;
  }
}

