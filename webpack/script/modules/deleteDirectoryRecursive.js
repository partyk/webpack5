const fs = require('fs');
const path = require('path');

function deleteDirectoryRecursive(directoryPath) {
    if (fs.existsSync(directoryPath)) {
        fs.readdirSync(directoryPath).forEach((file) => {
            const curPath = path.join(directoryPath, file);

            if (fs.lstatSync(curPath).isDirectory()) {
                // Pokud je to adresář, rekurzivně voláme funkci
                deleteDirectoryRecursive(curPath);
            } else {
                // Pokud je to soubor, smažeme ho
                fs.unlinkSync(curPath);
            }
        });

        // Po smazání obsahu adresáře můžeme smazat samotný adresář
        fs.rmdirSync(directoryPath);
    }
}

module.exports = deleteDirectoryRecursive;
