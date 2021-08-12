
// Lyft Interview Test
// Prompt
// Please write a small web application in Python/Ruby/Node. The application only needs to do the following:

//     Accept a POST request to the route “/test”, which accepts one argument “string_to_cut”
//     Return a JSON object with the key “return_string” and a string containing every third letter from the original string.

// Example
// If you POST
// {"string_to_cut": "iamyourlyftdriver"}
// it will return:
// {"return_string": "muydv"}

// Note: To see expected behavior you can test against a current working example with the command:
// curl -X POST https://lyft-interview-test.glitch.me/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'

const express = require("express");
const axios = require('axios');
// const bodyParser = require('body-parser');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

let user = {
  name:'',
  lastname: ''
 };
 
 let response = {
  error: false,
  code: 200,
  message: ''
 };

app.get('/', function (req, res) {
  response = {
    error: false,
    code: 200,
    message: 'Starting point'
  };
 
if(user.name === '' || user.lastname === ''){
    response = {
      error: true,
      code: 501,
      message: 'User has not been created!'
    };
 } else {
    response = {
      error: false,
      code: 200,
      message: 'User´s response',
      response: user
    };
  }
  res.send(response);
});
  

app.post('/user', function (req, res) {
  if(!req.body.name || !req.body.lastname){
    response = {
      error: true,
      code: 502,
      message: 'Name and Last name should be provided'
    };
 } else {
  if (user.name !== '' || user.lastname !== ''){
    response = {
      error: true,
      code: 503,
      message: 'User has already been created',
    };
  } else {
    user = {
      name: req.body.name,
      lastname: req.body.lastname
    };
    response = {
      error: false,
      code: 200,
      message: 'User has been created',
      message: user
    };
  }
    
  }
  
   
  res.send('[POST]', response);
});


app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});



// app.get('/test', function (req, res) {
//     res.send('Saludos desde express');
//   });

// app.post('/hola', function (req, res) {
//   res.send('[POST]Saludos desde express');
// });  
  
// app.listen(3000, () => {
//  console.log("El servidor está inicializado en el puerto 3000");
// });


// axios.post('https://lyft-interview-test.glitch.me/test', {
//     "string_to_cut": "iamyourlyftdriver",
// })
// //{
//     // res.json({lat:..., lng:...}
// //}
// .then(res => {
//     console.log(res.data)
//     //console.log(res.json({"return-string": res}))
// }).catch(error =>{
//     console.log(error);
// });



