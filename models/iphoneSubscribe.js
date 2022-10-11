const mongoose = require('mongoose');


const iphoneSubscribeSchema = mongoose.Schema({
    model:{
        type:String,
        required:true
    },
    size: {
        type:String,
        required:true
    },
    color: {
        type: String,
        required:true
    },
    post: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
})

iphoneSubscribeSchema.set('toJSON', {
    virtuals: true
})



exports.IphoneSubscribe = mongoose.model('IphoneSubscribe', iphoneSubscribeSchema);