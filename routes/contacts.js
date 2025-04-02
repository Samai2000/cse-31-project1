const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define a schema for contacts
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: String
});

const Contact = mongoose.model('Contact', contactSchema);

// GET all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single contact by ID
router.get('/:id', getContact, (req, res) => {
  res.json(res.contact);
});

// Middleware to get a contact by ID
async function getContact(req, res, next) {
  let contact;
  try {
    contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Cannot find contact' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.contact = contact;
  next();
}

module.exports = router;

const contactsRoute = require('./routes/contacts');
app.use('/contacts', contactsRoute);