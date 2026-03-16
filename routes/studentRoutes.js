const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

//CREATE
router.post("/students", async (req,res) =>{
    const student = new Student(req.body);
    await student.save();
    res.send(student);
});

//READ
router.get("/students", async (req, res)=> {
    const students = await Student.find();
    res.send(students);
});

// CREATE - Insert single student
router.post("/students", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send(student);
});

// CREATE - Insert multiple students
router.post("/students/bulk", async (req, res) => {
    const students = await Student.insertMany(req.body);
    res.send(students);
});

// READ - Get all students
router.get("/students", async (req, res) => {
    const students = await Student.find();
    res.send(students);
});

// READ - Get single student by ID
router.get("/students/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send({ message: "Student not found" });
    res.send(student);
});

// UPDATE - Update a student by ID
router.put("/students/:id", async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) return res.status(404).send({ message: "Student not found" });
    res.send(student);
});

// DELETE - Delete a student by ID
router.delete("/students/:id", async (req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).send({ message: "Student not found" });
    res.send({ message: "Student deleted", student });
});

module.exports = router;