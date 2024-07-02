const express = require("express");
const Class = require("../models/Classes");
const router = express.Router();

// Get all approved classes
router.get("/approved-classes", async (req, res) => {
  try {
    const query = { status: "approved" };
    const result = await Class.find(query);
    res.status(200).json(result);
  } catch (err) {
    console.error("Failed to fetch approved classes:", err);
    res.status(500).json({ error: "Failed to fetch approved classes" });
  }
});

// Get classes by instructor email address
router.get("/classes/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const classes = await Class.find({ instructorEmail: email });
    if (classes.length === 0) {
      return res
        .status(404)
        .json({ message: "No classes found for this instructor" });
    }
    res.status(200).send(classes);
  } catch (err) {
    console.error("Failed to fetch classes by instructor email:", err);
    res.status(500).json({ error: "Failed to fetch classes" });
  }
});

// Manage all classes
router.get("/classes-manage", async (req, res) => {
  try {
    const result = await Class.find();
    res.status(200).send(result);
  } catch (err) {
    console.error("Failed to fetch classes", err);
    res.status(500).json({ error: "Failed to fetch classes" });
  }
});

// Get single class details
router.get("/class/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const singleClass = await Class.findById(id);

    if (!singleClass) {
      return res.status(404).json({ message: "Class not found" });
    }

    res.status(200).json(singleClass);
  } catch (err) {
    console.error("Failed to fetch class details:", err);
    res.status(500).json({ error: "Failed to fetch class details" });
  }
});

// Add new classes
router.post("/new-class", async (req, res) => {
  const classes = req.body;

  try {
    await Class.insertMany(classes);
    res.status(201).json({ message: "Classes added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add classes" });
  }
});

// Update all details of a class by ID
router.put("/update-class/:id", async (req, res) => {
  const id = req.params.id;
  const { name, description, price, availableSeats, videoLink, status } =
    req.body;

  try {
    const updatedClass = await Class.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        availableSeats,
        videoLink,
        status,
      },
      { new: true }
    );

    if (!updatedClass) {
      return res.status(404).json({ message: "Class not found" });
    }

    res.status(200).json(updatedClass);
  } catch (err) {
    console.error("Failed to update class details:", err);
    res.status(500).json({ error: "Failed to update class details" });
  }
});

// Update status and reason of a class by ID
router.patch("/change-status/:id", async (req, res) => {
  const id = req.params.id;
  const { status, reason } = req.body;
  try {
    const updatedClass = await Class.findByIdAndUpdate(
      id,
      { status, reason },
      { new: true }
    );
    if (!updatedClass) {
      return res.status(404).json({ message: "Class not found" });
    }
    res
      .status(200)
      .json({ message: "Class updated successfully", updatedClass });
  } catch (err) {
    console.error("Failed to update class:", err);
    res.status(500).json({ error: "Failed to update class" });
  }
});

module.exports = router;
