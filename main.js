const express = require("express");
const app =express();

app.use('/static',express.static('public'));

console.log(app);
app.get("/ab?cd",(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});
app.get("/users/:Id",(req,res)=>{
    res.send("hello afroj " + req.params.Id);
});
app.get('/users/profile', (req, res) => {
    res.send('GET request to the homepage')
  });
  app.post('/usres/profile', (req, res) => {
    res.send('POST request to the homepage')
  });
  app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...')
    next()
  });
app.listen(3000,()=>console.log("server running on port:3000"));


