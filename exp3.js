const fs = require('fs');

fs.writeFileSync('data.txt', 'Hello, Node.js!');
console.log('File created successfully');

const data = fs.readFileSync('data.txt', 'utf8');
console.log('File content:', data);

fs.appendFileSync('data.txt', '\nWelcome to CRUD operations!');
console.log('File updated successfully');


fs.unlinkSync('data.txt');
console.log('File deleted successfully');