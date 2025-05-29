// import knex from 'knex'
// import express from 'express'
// const app = express()
// const port = 5000
// const knexInstance = knex({
//     client: 'mysql2',
//     connection: {
//         host: '127.0.0.1',
//         port: 3306,
//         user: 'root',
//         password: 'Payal@210887',
//         database: 'books'
//     }
// })
// app.get('/', async (req, res) => {
//     const [rows] = await knexInstance.raw('SELECT VERSION()')

//     res.json({
//          nodeVersion: process.version,
//         mysqlVersion: rows[0]['VERSION()']
//     })
// })

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`)
// })
import knex from 'knex';
import express from 'express';

const app = express();
const port = 5000;

app.use(express.json()); // Needed to parse JSON body

const knexInstance = knex({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'Payal@210887',
    database: 'node'
  }
});

// Test GET route
app.get('/', async (req, res) => {
  const [rows] = await knexInstance.raw('SELECT VERSION()');
  res.json({
    nodeVersion: process.version,
    mysqlVersion: rows[0]['VERSION()']
  });
});

// POST route to insert data
app.post('/info', async (req, res) => {
  const { name, age, address, isMarried } = req.body;
  // then insert into DB
  try {
    await knexInstance('students').insert({
      name,
      age,
      address,
      is_married: isMarried
    });

    res.send('✅ User saved successfully');
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).send('Error saving data');
  }
});

app.listen(port, () => {
  console.log(`🚀 Listening on http://localhost:${port}`);
});
