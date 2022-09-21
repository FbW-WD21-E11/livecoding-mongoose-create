import mongoose from 'mongoose';

const {Schema, model} = mongoose;

//HOW THE DATA WILL LOOK LIKE
const carSchema = new Schema({
    dateCreated:{type:Date, default:Date.now},
    brand:String,
    model:String, 
    year:Number
});

//MODEL, interface with database
const Car = model("Car", carSchema);

export default Car;