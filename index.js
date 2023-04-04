const express = require('express');
const app = express();
const reqFilter=(req,res,next) =>{
console.log('reqFilter')
   if(!req.query.age){
    res.send("Please enter a age.");
   }
   else if(req.query.age<18){
    res.send("You cant access Page")
   }
   else{
    next();
   }
   
}
app.use(reqFilter);
app.get('/', (req, res)=>{
    res.send('<h1>Hey Baby how r u</h1>');
})
app.get('/about', (req, res)=>{
    res.send("Welcome to about page");
})
app.listen(4500)