const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, '/src/helpers');

const exportHelpers = {};
const files = fs.readdirSync(directoryPath);
files.forEach(function (file) {
  exportHelpers[file.replace('.js', '')] = require(`./src/helpers/${file}`)
});

module.exports = exportHelpers;