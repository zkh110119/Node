const npm = require('npm');

npm.load({}, function () {
    npm.commands.list(['npm'], function (err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(result.dependencies["npm"]?true:false);
        }
    })
})