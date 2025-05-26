import knex from 'knex'
import express from 'express'
const app = express()
const port = 5000
const knexInstance = knex({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'Payal@210887',
        database: 'books'
    }
})
app.get('/', async (req, res) => {
    const [rows] = await knexInstance.raw('SELECT VERSION()')

    res.json({
        // nodeVersion: process.version,
        mysqlVersion: rows[0]['VERSION()']
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})