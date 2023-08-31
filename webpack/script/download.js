const config = require('./../config/webpack.config');
const fs = require('fs');
const download = require('download');

(async () => {
    fs.writeFileSync(config.path.temp + '/reklama.css', await download('https://1gr.cz/css/externi/reklama.css'));
})();
