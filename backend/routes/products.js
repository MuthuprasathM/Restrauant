const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

// POST a new product (with validation for required fields)
router.post('/add', async (req, res) => {
  const { name, price, description, imageUrl } = req.body;

  // Validate input fields
  if (!name || !price || !description || !imageUrl) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create and save the new product
    const newProduct = new Product({ name, price, description, imageUrl });
    await newProduct.save();

    // Respond with success message and the created product
    res.status(201).json({ message: 'Product added successfully', newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'There was an error adding the product' });
  }
});

// POST a basic new product (fallback endpoint)
router.post('/', async (req, res) => {
  const { name, price } = req.body;

  // Basic validation
  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  try {
    const newProduct = new Product({ name, price });
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
