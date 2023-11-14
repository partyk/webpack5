const fs = require('fs');
const createDirectory = (path) => {
    if (fs.existsSync(path)) {
        return;
    }

    fs.mkdir(path, {
        recursive: true,
    }, error => {
        if (error) {
            throw new Error(error);
        } else {
            console.log(`Directory ${path} was created.`);
        }
    });
};

module.exports = createDirectory;
