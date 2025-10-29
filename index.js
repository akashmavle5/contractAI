const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1111',   
  database: 'contract_ai'     
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected!');
});

//  Default route
app.get('/', (req, res) => {
  res.send('Backend running successfully!');
});

//  Signup API
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashed], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Signup successful!' });
  });
});

// Login API
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length === 0) return res.status(401).json({ message: 'User not found' });

    const valid = await bcrypt.compare(password, result[0].password);
    if (valid) res.json({ message: 'Login successful!' });
    else res.status(401).json({ message: 'Wrong password' });
  });
});

app.listen(8000, () => console.log(' Server running on port 8000'));
