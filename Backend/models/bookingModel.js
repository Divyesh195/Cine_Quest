import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    customerID : {type:String , required : true},
    movieID : {type:String , required : true},
    slotDate : {type:String , required : true},
    slotTime : {type:String , required : true},
    customerData : {type:Object , required : true},
    movieData : {type:Object , required : true},
    amount : {type:Number , required : true},
    date : {type:Number , required : true},
    payment : {type:Boolean , default:false},
    isCompleted : {type:Boolean , default:false},
})

const bookingModel = mongoose.models.booking || mongoose.model('booking',bookingSchema);

export default bookingModel;