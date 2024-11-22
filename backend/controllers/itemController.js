const Item = require("../models/item");

// Get all items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new item
exports.addItem = async (req, res) => {
  const { fname, lname, email, phone } = req.body;
  try {
    const newItem = new Item({ fname, lname, email, phone });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an item
exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const { fname, lname, email, phone } = req.body;
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      id,
      { fname, lname, email, phone },
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete an item
exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    await Item.findByIdAndDelete(id);
    res.status(200).json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
