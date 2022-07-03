const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 

    name:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    contactNo:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    dob:{
        type:Date,
        required:true
    },

});

module.exports = mongoose.model('Users',userSchema);