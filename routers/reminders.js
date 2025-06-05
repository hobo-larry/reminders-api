"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reminder_1 = __importDefault(require("../models/reminder"));
const router = (0, express_1.Router)();
const reminders = [];
router.get('/', (req, res) => {
    res.json(reminders);
});
router.post('/', (req, res) => {
    const { title } = req.body;
    const reminder = new reminder_1.default(title);
    // Here you would typically save the reminder to a database
    reminders.push(reminder);
    res.status(201).json(reminder);
});
exports.default = router;
