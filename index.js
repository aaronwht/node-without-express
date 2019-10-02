const http = require('http')

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
  'Access-Control-Max-Age': 2592000 // 30 days
  /** add other headers as per requirement */
}

http
  .createServer((req, res) => {
    // Only permits content being posted from http://localhost:3000
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    // res.setHeader('Access-Control-Allow-Origin', '*'); - allow posts from anywhere - not recommended

    if (req.method === 'OPTIONS') {
      res.writeHead(204, headers)
      return res.end()
    }

    if (['GET', 'POST', 'PUT'].indexOf(req.method) >= 0) {
      // chunks through the posted data to build a string
      let postedData = ''
      req.on('data', chunk => {
        postedData += chunk.toString()
      })
      req.on('end', () => {
        // postedData = {"website":"some value"}
        // with express, body-parser provides req.body.website for this value

        // turn data string into JSON
        if (postedData && typeof (postedData) !== 'undefined') {
          const cleanData = JSON.parse(postedData)
          return res.end(cleanData["website"])
        } else {
          return res.end('website')
        }
      })
    } else {
      res.writeHead(405, headers)
      return res.end(`${req.method} is not allowed for the request.`)
    }
  })
  .listen(process.env.PORT || 3030)
