const mongoose = require('mongoose');

const AppSchema = new mongoose.Schema({
    name: String,
});

const VK_App = mongoose.model('VK_App', AppSchema);

module.exports = VK_App;