document.addEventListener("DOMContentLoaded", () => {
    loadReminders();
  });
  
  function addReminder() {
    const reminderMsg = document.getElementById("reminderMsg").value;
    const remindAt = document.getElementById("remindAt").value;
  
    // Validate inputs
    if (!reminderMsg || !remindAt || new Date(remindAt) <= new Date()) {
      alert("Invalid input! Please enter a valid reminder message and a future date.");
      return;
    }
  
    const data = {
      reminderMsg,
      remindAt,
    };
  
    fetch("/api/addReminder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then((result) => {
      console.log("Reminder added:", result);
      loadReminders(); // Refresh the list after adding a new reminder
    })
    .catch((error) => {
      console.error("Error adding reminder:", error);
    });
  }
  
  function loadReminders() {
    fetch("/api/getreminders")
    .then(response => response.json())
    .then((reminders) => {
      displayReminders(reminders);
    })
    .catch((error) => {
      console.error("Error fetching reminders:", error);
    });
  }
  
  function displayReminders(reminders) {
    const reminderList = document.getElementById("reminderList");
    reminderList.innerHTML = "<h2>Reminder List</h2>";
  
    reminders.forEach((reminder) => {
      const reminderItem = document.createElement("p");
      reminderItem.className = "reminderItem";
      reminderItem.textContent = `${reminder.reminderMsg} - ${new Date(reminder.remindAt).toLocaleString()}`;
      reminderList.appendChild(reminderItem);
    });
  }
  