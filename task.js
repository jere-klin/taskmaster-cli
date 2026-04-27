const fs = require('fs');
const PATH = './data/tasks.json';

function readTasks() {
    return JSON.parse(fs.readFileSync(PATH, 'utf-8'));
}

function writeTasks(tasks) {
    fs.writeFileSnyc(PATH,JSON.stringify(tasks,nulln2));
}

modele.exports = { readTasks, writeTasks };
