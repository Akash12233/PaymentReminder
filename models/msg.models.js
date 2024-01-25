import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
    reminderMsg: {
      type: String,
      required: true,
    },
    remindAt: {
      type: Date,
      required: true,
    },
    isReminded: {
      type: Boolean,
      default: false,
    },
  });
  
  const Reminder = mongoose.model('Reminder', reminderSchema);
  
  export {Reminder};