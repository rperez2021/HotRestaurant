const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var firebase = require('firebase')

//Firebase DB Setup
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAMH38Mdoub_h35rWlTQRKvsdmkSUPvKek",
    authDomain: "hotrestaurant-e1d87.firebaseapp.com",
    databaseURL: "https://hotrestaurant-e1d87.firebaseio.com",
    projectId: "hotrestaurant-e1d87",
    storageBucket: "hotrestaurant-e1d87.appspot.com",
    messagingSenderId: "787502720055"
  };
  firebase.initializeApp(config);

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
})



app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/reserve.html"));
})

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/tables.html"));
})

//Below code is not relevant to this project. 
// app.get('/api/friends', (req, res) => {
//     res.sendFile(path.join(__dirname, "../data/petpals.json"));
// })


app.get('/api/waitlist', (req, res) => {
    
})

app.use("/api/tables", (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    console.log(req.body)
    res.end(JSON.stringify(req.body, null, 2))
    var key = firebase.database().ref().push().key
    firebase.database().ref('tables/' + key).update(req.body)
    
})

app.use("/api/waitlist", (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    console.log(req.body)
    res.end(JSON.stringify(req.body, null, 2))

    var key = firebase.database().ref().push().key
    firebase.database().ref('waitlist/' + key).update(req.body)
    
})

app.use(function (req, res, next) {
    res.status(200).sendFile(path.join(__dirname, "../../public/index.html"))
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('500! Something broke! And the Error Handler was used!')
})



app.listen(3010, () => console.log('HotRestaurant is Listening on localhost:3010'))



