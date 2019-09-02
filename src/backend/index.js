const http = require('http');
const port = 4300;

const server = http.createServer((request, response) => {
   if (request.method === 'GET')  {
       response.end('Hello world');
   }
});

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
