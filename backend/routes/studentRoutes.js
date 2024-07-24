const express = require('express');

const studentRoutes = (db, upload) => {
  const router = express.Router();

  // Create a student
  router.post('/', upload.single('image'), (req, res) => {
    const { name, email, phone } = req.body;
    const image = req.file ? req.file.filename : '';
    const sql = 'INSERT INTO students (name, email, phone, image) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, phone, image], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  // Read all students
  router.get('/', (req, res) => {
    const sql = 'SELECT * FROM students';
    db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });

  // Update a student
  router.put('/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const image = req.file ? req.file.filename : req.body.existingImage;
    const sql = 'UPDATE students SET name = ?, email = ?, phone = ?, image = ? WHERE id = ?';
    db.query(sql, [name, email, phone, image, id], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  // Delete a student
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM students WHERE id = ?';
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  return router;
};

module.exports = studentRoutes;
