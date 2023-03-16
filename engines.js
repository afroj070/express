const express = require("express");
const app =express();
app.use('/abc',express.static("public"));
app.set('view engine', 'pug');
app.set('views','./public/views');
app.set('/',(request,response)=>{
    response.render('index',{tital:"tetorial websit",masage:"Hello world"});
});
app.set('/',(request,response)=>{
    response.render('index',{tital:"tetorial websit",masage:"Hello world"});
});
app.listen(3000,()=>console.log("server running on port:3000"));