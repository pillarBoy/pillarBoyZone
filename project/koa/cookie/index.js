var http = require('http')

http.createServer((req, res) => {
  console.log(req.headers.cookie);
  if (req.url === 'favicon.ico') return res.end('')
  res.setHeader("Set-Cookie", 'cookie1=123')
  res.end('hello cookie')
})
.listen(3301)