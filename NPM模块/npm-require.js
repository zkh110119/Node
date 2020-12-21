const npm = require('npm');

npm.load({}, function () {
    npm.commands.find(['npm'], function (err, ...result) {
        if (err) {
            console.error(err);
        } else {
            console.log(result);
        }
    })
})