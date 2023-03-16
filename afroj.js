const { response } = require("express");
const bodyParser = require('body-parser');
const { check, validationResult, check } = require('express-validator');

const express = require("express");
const app =express();
app.use('/abc',express.static("public"));
app.set('view engine', 'pug');
app.set('views','./public/views');


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get =('/',(request,response)=>{
    response.render('index',{title:'login form',massage:"enter username and password"});
});
app.get =('/login',urlencodedParser,function(request,response){
    response.send('wellcome', + request.body.username);
});
app.post =('/',urlencodedParser,[
check('username','Username shoud be email id').isEmail(),
check('password','password must be in 5 characters').isLength({min:5})


],(request,response)=>{
    const error = validationResult(request);
    console.log(error.mapped());
    console.log(request.body);
    response.render('index',{title:'user details',error:mapped()});
});

// app.get =('/about/:a-:b',(request,response)=>{
//     response.render('about',{title:'about',sum:parseInt (request.params.a)+parseInt (request.params.b)
//     ,Substraction:parseInt (request.params.a)-parseInt (request.params.b)
//     ,mul:parseInt (request.params.a)-parseInt (request.params.b)})
// });

app.listen(3000,()=>console.log("server running on port:3000"));