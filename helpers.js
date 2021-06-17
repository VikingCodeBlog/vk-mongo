const path = require('path');
const fs = require('fs');
const ROUTE = '/src/helpers/';

const directoryPath = path.join(__dirname, ROUTE);

const toExport = {};
const files = fs.readdirSync(directoryPath);
files.forEach((file) => toExport[file.replace('.js', '')] = require(`.${ROUTE}${file}`));

module.exports = toExport;