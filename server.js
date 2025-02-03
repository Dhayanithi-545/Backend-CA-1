const express = require('express')
const app = express();
app.use(express.json());

const port = 3000;

app.get('/',(req,res)=>{
  res.send("Welcome to Signup Page")
})

app.post('/signup', (req,res)=>{
  const {username, email, password, dob} = req.body;
  //username in String format
  if(!username){
    return res.status(404).json({message : "Username Cannot be empty"});
  }
  //email in string format
  if(!email){
    return res.status(404).json({message : "Email Cannot be empty"});
  }
  //password in string format
  if(password.length < 8 || password.length > 16){
    return res.status(404).json({message : "Password length should be greater than 8 or less than or equal to 16"});
  }

  res.status(201).json({
    UserName : username,
    Email : email,
    Password : password,
    Date_of_Birth : dob
  })

})

app.listen(port, ()=>{
  console.log("Your port is running on http://localhost:3000")
})