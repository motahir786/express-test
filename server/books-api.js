const express = require('express');
const router = express.Router();

const books = require('./authors');

router.get('/', (req, res) => books.getAll(req, res));
router.get('/:id', (req, res) => books.getById(req, res));

module.exports = router;