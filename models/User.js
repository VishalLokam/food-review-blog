const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    city:{
        type: String,
        default: "Pune"
    }
});

module.exports = mongoose.model('Users', UserSchema);