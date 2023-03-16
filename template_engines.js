const { request, response } = require("express");
const express = require("express");
const app =express();
app.use('/abc',express.static('public'));
app.set('view engine', 'pug');



app.listen(3000,()=>console.log("server running on port:3000"));