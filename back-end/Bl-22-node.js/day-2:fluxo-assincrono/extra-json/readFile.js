const withAsync = fs.readFile('./student.json', (err, data) => {
    if(err) throw err;
    const student = JSON.parse(data);
    console.log(student);
});
console.log('This is after the read async call');