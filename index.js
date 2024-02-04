const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

const USERS = [
  { 
    username: 'ram',
    firstName: 'Ram', 
    lastName: 'Kumar', 
    email: 'ram@gmail.com', 
    avatar: 'https://reqres.in/img/faces/1-image.jpg', 
    isPremium: true
  },
  { 
    username: 'lakshman',
    firstName: 'Lakshman', 
    lastName: 'Singh', 
    email: 'lakshman@gmail.com', 
    avatar: 'https://reqres.in/img/faces/6-image.jpg' ,
    isPremium: false
  }
  ,{
    username: 'charles.morris',
    email:"charles.morris@reqres.in",
    firstName:"Charles",
    lastName:"Morris",
    avatar:"https://reqres.in/img/faces/5-image.jpg",
    isPremium: false
  }
]

app.get('/', (req, res) => {
  res.send("EJS Engine + Routing Practice")
});

app.get('/not-found', (req, res) => {
  res.render('not-found')
});

app.get('/:username', (req, res) => {
  const { username } = req.params
  const userDetails = USERS.find(user => user.username === username)
  if(userDetails)
    res.render('user', userDetails)
  else 
    res.redirect('/not-found')
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})

/*
  View/ Template engine (EJS): 
    - Use same template for creating dynamic pages (Dynamic pages)
  Request parameters: 
    - Variable inside route (Dynamic routes)
*/