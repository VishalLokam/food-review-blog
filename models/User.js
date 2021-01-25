const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({

    fullName:{
        type: String,
        required: true
    },
    email:{
        type: mongoose.SchemaTypes.Email,
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