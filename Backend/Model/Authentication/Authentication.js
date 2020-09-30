const mongoose = require('mongoose');
const { Schema } = mongoose;

const registrationScheme = new Schema({
    user_name: String,
    email: String,
    phone: Number,
    otp: Number,
})



const Scheme = new Schema({
    user_name: String,
    email: String,
    phone: Number,
    otp: Number,
})



mongoose.model('registration', registrationScheme);

