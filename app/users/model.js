const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true, default: null },
    phone: { type: Number, required: true, min: 10 },
    profileImage: { type: String, default: null },
    active: { type: Boolean, default: true }
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);
module.exports = User;