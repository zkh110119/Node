const fs = require('fs'),
    path = require('path');

// fs.open(path.join(__dirname, '/files/file.txt'), 'r', function (err, fd) {
//     if (err) {
//         console.error(err.stack);
//     } else {
//         console.log(fd);
//     }
// })

fs.readdir(__dirname,function(err,files){
    console.log(files);
})