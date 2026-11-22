const express = require('express');
const connectDB = require('./db/db_connection');
const Student = require('./models/studentModel');

const app = express();

connectDB();

app.use(express.json());

app.put('/api/students/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        const { name, email, age, course, city, isActive } = req.body;

        const updateStudent = await Student.findByIdAndUpdate(
            studentId,
            { name, email, age, course, city, isActive },
            { new: true }
        );

        if (!updateStudent) {
            return res.status(404).json({ msg: "Student not Found" });
        }
        res.json(updateStudent);
    } catch (error) {
        console.log("Error updating Student Data: ", error);
        res.status(500).send("Server Error");
    }
});

app.listen(2000, () => {
    console.log("Server is running on port no 2000");
});