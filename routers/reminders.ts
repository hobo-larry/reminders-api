import { Router } from "express";
import ReminderDto from "../dtos/create-reminder";
import Reminder from "../models/reminder";
const router = Router()

const reminders: Reminder[] = [];

router.get('/', (req, res) => {
    res.json(reminders)})



router.post('/', (req, res) => {
    const {title} = req.body as ReminderDto
    const reminder = new Reminder(title)
    // Here you would typically save the reminder to a database
    reminders.push(reminder)
    res.status(201).json(reminder)
})
export default router