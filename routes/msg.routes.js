import { Router } from "express";

const route=Router();
import {addReminder, getAllReminders } from "../controllers/msg.controller.js"

route.post("/addreminder", addReminder);
route.get("/getreminders", getAllReminders);

export {route};