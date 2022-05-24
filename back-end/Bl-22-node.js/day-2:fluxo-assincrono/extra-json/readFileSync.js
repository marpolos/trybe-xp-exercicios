'use strict';

const fs = require('fs');

const rawData = fs.readFileSync('student.json');
const student = JSON.parse(rawData);

console.log(student);
console.log('This is after the read sync call');
//console.log(rawData);

