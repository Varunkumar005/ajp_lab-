const express = require("express");
const router = express.Router();
const Faculty = require("../models/Faculty");

//CREATE
router.post("/faculties", async (req,res) =>{
    const faculty = new Faculty(req.body);
    await faculty.save();
    res.send(faculty);
});

//READ
router.get("/faculties", async (req, res)=> {
    const faculty = await Faculty.find();
    res.send(faculty);
});

// CREATE - Insert single faculty
router.post("/faculties", async (req, res) => {
    const faculty = new Faculty(req.body);
    await faculty.save();
    res.send(faculty);
});

// CREATE - Insert multiple faculties
router.post("/faculties/bulk", async (req, res) => {
    const faculties = await Faculty.insertMany(req.body);
    res.send(faculties);
});

// READ - Get all faculties
router.get("/faculties", async (req, res) => {
    const faculties = await Faculty.find();
    res.send(faculties);
});

// READ - Get single faculty by ID
router.get("/faculties/:id", async (req, res) => {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) return res.status(404).send({ message: "Faculty not found" });
    res.send(faculty);
});

// UPDATE - Update a faculty by ID
router.put("/faculties/:id", async (req, res) => {
    const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!faculty) return res.status(404).send({ message: "Faculty not found" });
    res.send(faculty);
});

// DELETE - Delete a faculty by ID
router.delete("/faculties/:id", async (req, res) => {
    const faculty = await Faculty.findByIdAndDelete(req.params.id);
    if (!faculty) return res.status(404).send({ message: "Faculty not found" });
    res.send({ message: "Faculty deleted", faculty });
});

module.exports = router;