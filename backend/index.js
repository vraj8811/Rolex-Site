const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rolex',
  });

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL database');
    }
  });

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage });

  app.post('/api/addWatch', upload.single('image'), (req, res) => {
    const { name, price, isfeatured, isnew, issale } = req.body;
    const image = req.file.filename;
  
    const sql = 'INSERT INTO watchmaster (name, price, image, isfeatured, isnew, issale) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [name, price, image, isfeatured, isnew, issale];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error executing SQL query: ' + err.message);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      console.log('Watch added successfully');
      res.status(200).json({ success: true });
    });
  });

  app.get('/api/featured-watches', (req, res) => {
    const query = 'SELECT id,name, price, image, isfeatured, isnew, issale FROM watchmaster WHERE isfeatured = 1';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });

  app.get('/api/new-arrival-watches', (req, res) => {
    const query = 'SELECT id,name, price, image, isfeatured, isnew, issale FROM watchmaster WHERE isnew = 1';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });

  app.get('/api/all-watches', (req, res) => {
    const query = 'SELECT id,name, price, image, isfeatured, isnew, issale FROM watchmaster ORDER BY price DESC';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });