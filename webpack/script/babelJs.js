const config = require('./../config/webpack.config');

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const terser = require('terser');

const files = [
    path.resolve(config.path.src, 'js/src/extend/test.js'),
];
const outputDirectory = path.resolve(config.path.dist, 'assets/js/extend');

if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, {recursive: true});
}
files.forEach(async (file) => {
    const sourceFilePath = file;
    const outputFilePath = path.join(outputDirectory, path.basename(file));
    // Překlad pomocí Babel.transformSync
    const sourceCode = fs.readFileSync(sourceFilePath, 'utf-8');
    // babel
    const babelCode = await babel.transform(sourceCode, {
        presets: ['@babel/preset-env'],
    });
    const minifiedCode = await terser.minify(babelCode.code);
    // Uložení výsledného kódu do cílového souboru
    fs.writeFileSync(outputFilePath, minifiedCode.code, 'utf-8');
});
