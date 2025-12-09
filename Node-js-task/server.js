const http = require('http');

function sendJSON(res, statusCode, data) {
    res.writeHead(statusCode, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
}

let users = [
  {id: 1, name:"smith", age:25},
  {id: 2, name:"john", age:34},
  {id: 3, name:"james", age:29},
];

const server = http.createServer(async (req, res) => {
    const method = req.method;
    const url = req.url;

    try {
      //GET ALL
      if (method === 'GET' && url === '/api/v1/user') {
        sendJSON(res, 200, { success: true, data: users });
      }

     //GET by ID
      else if(method === 'GET' && url.startsWith("/api/v1/user/")){
        const id = req.url.split('/')[4];
        if(id <= users.length){
          const user = users.find((p) => p.id == id);
          sendJSON(res, 200, {success: true, data: user});
        }else{
          sendJSON(res, 404, {success: true, message: 'No item found with the given ID'});
        }
      }
      
      //POST
      else if(method === 'POST' && url === '/api/v1/user'){
        let body = '';
        req.on('data', chunk =>{
          body += chunk.toString();
        })

        req.on('end', () =>{
          const newUser = JSON.parse(body);
          users.push(newUser);
          sendJSON(res, 201, {status: true, data: users})
        })
      
      }
      
      //Login
      else if(method === 'POST' && url === '/api/v1/sessions'){
        sendJSON(res, 200, {succes: true, message: 'User login '});
      }
      
      //Loggout
      else if(method === 'DELETE' && url === '/api/v1/sessions'){
        sendJSON(res, 200, {succes: true, message: 'User logout'});
      }

      else{
        sendJSON(res, 404, {succes: false, message: 'Page not found'});
      }
      
    } catch(err) {
        sendJSON(res, 500, { success: false, message: err.message });
    }
});

// Start server
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});