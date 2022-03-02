let express = require('express');

let app = express(); // server itself

app.get('/api', (req, res) => {  
    res.json({ message: 'Hello from the server!'});  
  }); 

let server = app.listen(8000, () => {
    let port = server.address().port;
    console.log('Pet Scheduler app listening on %s',port);
});