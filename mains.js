const bodyParser = require("body-parser");
const express = require("express");
// const bodyParser = require('body-parser');
const { body, check, validationResult } = require('express-validator/check');
const { sanitizeParam, matchedData } = require('express-validator/filter');
const { request, response } = require("express");
const app =express();
app.use('/abc',express.static('public')) 
app.set('view engine','twig')
app.set('views','/public/views');

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies

app.get('/',(request,response)=>{
    response.render('index',{title:"Login Form",message:"Enter users and password"})
})

app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username)
})


app.post('/',urlencodedParser,[
    check('username','User should be email id').trim().isEmail(),
    check('password','password must be 5 charaters').trim().isLength({min:5}),
    check('cpassword').custom((value,{request})=>{
        if(value !=request.body.password){
            throw new Error('Confirm password doses not match password');
        }
        return true;
    })

],(request,response)=>{
    const errors=validationResult(request);
    console.log(errors.mapped());
    if(! errors.isEmpty()){
        const user = matchedData(request);
        response.render('index',{title:'User Datails',error:errors.mapped(),user:user});
    }else{
        const user = matchedData(request);
        console.log(user);
        response.render('login',{title:"Users Datails",user:user});
    }
});