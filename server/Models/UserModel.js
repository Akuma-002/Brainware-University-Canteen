const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    // Basic Info
    name: { 
    type: String, 
    required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true },
    phoneNumber: { 
        type: Number, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    studentCode:{
        type:String,
        required: true
    },

  // Role
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
    },

    // Address (can store multiple)
    // addresses: [{
    //     label: { 
    //         type: String, 
    //         default: 'Home' 
    //     }, // Home / Office etc.
    //     street: String,
    //     city: String,
    //     state: String,
    //     pincode: String,
    //     country: { type: String, default: 'India' }
    // }],

    // Cart
    cart: [{
        foodName : {
            type: String,
            required: [true, 'Food name is required'] 
        },
        quantity: { 
            type: Number, 
            default: 1 
        }
    }],

    // Order History
    orders: [{
        foodName:{
            type: String,
            required: [true, 'Food name is required'] 
        },
        quantity: { 
            type: Number, 
            default: 1 
        },
        orderTime:{
            type: Date,
            default: Date.now,
            required:true
        },
        orderId:{
            type: String,
            requirde: true
        }
    }],

    // Profile Image
    avatar: { type: String, default: '/assets/images/profile.png' }, // URL to image

    // Timestamps
    
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;