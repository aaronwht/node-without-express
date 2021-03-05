const express = require('express')
const http = require('http')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use(cors())
app.options('*', cors())
// supports parsing of application/json
app.use(bodyParser.json())

// supports parsing of applicaiton/x-www-form-urlencoded data
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/', (req, res) => {
  return res.send(JSON.stringify({ website: req.body.website}))
})
http.createServer(app).listen(process.env.PORT || 3030)
