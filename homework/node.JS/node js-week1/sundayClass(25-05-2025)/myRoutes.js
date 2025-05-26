import express from 'express'
import data from './data.json' with { type: 'json' }
const app = express()
const port = 5000
const myRoutes = express.Router()
app.use(myRoutes)
myRoutes.get('/users', (req, res) => {
  res.send('Numbers of users')
});
myRoutes.get('/active-users', (req, res) => {
  res.json(data);
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})