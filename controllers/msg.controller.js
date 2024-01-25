import { Reminder } from "../models/msg.models.js";

const addReminder = async (req, res) => {
  const { reminderMsg, remindAt } = req.body;

  // Assuming 'remindAt' is a string representing a date, convert it to a Date object
  const remindAtDate = new Date(remindAt);

  try {
    // Create a new instance of the Reminder model
    const newReminder = new Reminder({
      reminderMsg,
      remindAt: remindAtDate,
      isReminded: false, // You might set this to false by default
    });

    // Save the new reminder to the database
    const savedReminder = await newReminder.save();

    res.status(201).json({
      success: true,
      reminder: savedReminder,
    });
  } catch (error) {
    console.error('Error adding reminder:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
};

const getAllReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.status(200).json(reminders);
  } catch (error) {
    console.error('Error fetching reminders:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

export { addReminder, getAllReminders };