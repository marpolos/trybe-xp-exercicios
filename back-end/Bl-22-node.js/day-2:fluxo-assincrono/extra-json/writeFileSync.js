'use strict';

const fs = require('fs');

const student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};

// const data = JSON.stringify(student);
// Fica o json em apenas uma linha.
// Abaixo a forma mais humana de json.
const data = JSON.stringify(student, null, 2)
fs.writeFileSync('student-2.json', data);