const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserDataSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'VK_User' },
    nikName: String,
    email: {
        type: String,
        required: true
    },
    telf: String,
    lastConnection: Date,
    validatedIPs: [{
        type: String
    }],
});

module.exports = mongoose.model('VK_UserData', UserDataSchema);