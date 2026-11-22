const express = require('express');
const connectDB = require('./db/db_connection');
const Student = require('./models/studentModel');

const app = express();

connectDB();

app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        console.error("Error fetching Students Data: ", error);
        res.status(500).send("Server Error");
    }
});

app.get('/api/students/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ msg: 'Student Not Found' });
        }
        res.json(student);
    } catch (error) {
        console.error("Error fetching Student Data: ", error);
        res.status(500).send("Server Error");
    }
});

app.listen(2000, () => {
    console.log("Server is running on port no 2000");
});