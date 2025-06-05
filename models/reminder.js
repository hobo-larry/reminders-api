"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reminder {
    constructor(title) {
        this.title = title;
        this.id = Date.now();
        this.isComplete = false;
    }
}
exports.default = Reminder;
