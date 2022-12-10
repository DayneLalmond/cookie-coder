const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
// maybe have the post included in the user model
    clipboard: [
        {
            code: {
                type: String,
                required: true,
            }
        }
    ],
    topic: [
        {
            text: {
                type: String,
                required: true,
            }
        }
    ]

});

const User = model('User', userSchema);

module.exports = User;