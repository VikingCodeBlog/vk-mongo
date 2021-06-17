const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, '/src/models');

const exportModels = {};
const files = fs.readdirSync(directoryPath);
files.forEach(function (file) {
  exportModels[file.replace('.js', '')] = require(`./src/models/${file}`)
});

module.exports = exportModels;