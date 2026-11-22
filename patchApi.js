const express = require('express');
const connectDB = require('./db/db_connection');
const Student = require('./models/studentModel');

const app = express();

connectDB();

app.use(express.json());

app.patch('/api/students/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        const updatedData = req.body;

        const updatedStudent = await Student.findByIdAndUpdate(
            studentId,
            { $set: updatedData },
            { new: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({ msg: "Student not found" });
        }
        res.json(updatedStudent);
    } catch (error) {
        console.log("Error updating Data: ", error);
        res.status(500).send("Server Error");
    }
});

app.listen(2000, () => {
    console.log("Server is running on port no 2000");
});