const http = require('http')

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
  'Access-Control-Max-Age': 2592000 // 30 days
  /** add other headers as per requirement */
}

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    return res.end();
  }

  if (['GET', 'POST', 'PUT'].indexOf(req.method) >= 0) {
    // chunks through the posted data to build a string
    let postedData = '';
    req.on('data', chunk => {
      postedData += chunk.toString();
    });

    req.on('end', () => {
      // turn data string into JSON
      if (postedData !== null && typeof postedData !== 'undefined') {
        const data = JSON.parse(postedData)
        return res.end(JSON.stringify({ 'website': data.website }));
       } else {
         return res.end('website');
       }
    })
  } else {
    res.writeHead(405, headers);
    return res.end(`${req.method} is not allowed for the request.`);
  }
})
.listen(process.env.PORT || 3030);
