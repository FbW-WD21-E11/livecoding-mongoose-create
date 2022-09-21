import mongoose from "mongoose";

//what will the data look like? (what data will we collect and of which type is that data?)
const userSchema = new mongoose.Schema({
  username: String, 
  email: String,
  password: String,
  age: Number, 
  firstname: String,
  lastname: String,
  height: Number,
  country: String
});

//allows us to make database operations /find /findbyid, /updating
const User = mongoose.model("User", userSchema);

//exporting the model so we can use it for making database operations.
export default User;
