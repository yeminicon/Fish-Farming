import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const AppointSchema = new Schema({
  title: String,
  name: String,
  date: Number,
  address:String,
  phone: Number,
  
}, 
  { timestamps: true }
);

const AppointModel = mongoose.model("Appoint", AppointSchema);

export default AppointModel;
