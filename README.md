 Payment Reminder system implemented using Node.js and Express, with MongoDB as the database. The system allows users to add reminders, sends email reminders based on due dates, and uses Mailtrap.io for testing email functionalities.

Key Components:
Express Setup (index.js):

Configures Express, CORS, body parser, MongoDB, dotenv, Nodemailer, cron, and path.
Connects to the MongoDB database.
Defines routes for adding reminders (/addReminder) and retrieving all reminders (/getAllReminder).
Sets up a scheduled job (sendReminders()) using cron to dispatch reminders.
Handles POST requests to add reminders.
Extracts reminder details from the request body.
Uses parameterized queries to insert reminders into the database.
Sends a response with the added reminder details.
Get All Reminders (/getAllReminder Route):

Handles GET requests to retrieve all reminders from the database.
Sends a response with an array of formatted reminders.
Email Reminder Sending (sendEmailReminder()):

Uses Nodemailer to send email reminders.
Configures email options with sender, recipient, subject, and message details.
Marks the corresponding reminder as sent in the database after successful email sending.
Scheduled Job (setupEmailReminderJob()):

Sets up a cron job to execute sendReminders() at regular intervals.
Testing Environment:
Mailtrap.io is used for testing email functionalities. It provides a secure environment for simulating email sending without affecting real users.
Additional Notes:
The project uses environment variables stored in a .env file.
The node_modules directory is excluded from version control using a .gitignore file.
Known Issues:
There's an issue related to the Mailtrap credentials, with a warning about "Too many failed login attempts."
A potential EventEmitter memory leak warning is reported.
Recommendations:
Ensure correct Mailtrap credentials are used.
Address EventEmitter memory leak warning by adjusting the listener limit using emitter.setMaxListeners().
Note: The provided summary is based on the information available and may need adjustments based on the complete code and any additional details.






