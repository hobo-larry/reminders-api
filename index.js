"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reminders_1 = __importDefault(require("./routers/reminders"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware to parse JSON bodies
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use('/reminders', reminders_1.default);
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
