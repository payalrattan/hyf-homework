// import express from 'express'
// const app = express()
// const port = 5000

// app.get('/', (req, res) => {
//   res.send('welcome to node express app')
// })

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// })
// import express from 'express';
// const app = express();
// const port = 3000;

// app.use(express.json()); // To parse JSON body

// app.get('/hello', (req, res) => {
//   res.send('Welcome to the Node.js Express app!');
// });

// app.post('/greet', (req, res) => {
//   const {name,age,address,isMarried }= req.body;
//   res.send(`Hello, ${name}!\n age is ${age} \n you live in ${address} \n you are married: ${isMarried}`);
// });


// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // add your MySQL password
  database: 'myapp'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('❌ DB connection error:', err);
  } else {
    console.log('✅ Connected to MySQL');
  }
});

// POST route to add user
app.post('/info', (req, res) => {
  const { name, age, isStudy } = req.body;

  const sql = 'INSERT INTO users (name, age, is_study) VALUES (?, ?, ?)';
  db.query(sql, [name, age, isStudy], (err, result) => {
    if (err) {
      console.error('❌ Error inserting:', err);
      res.status(500).send('Error saving data');
    } else {
      res.send('✅ User saved successfully');
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
