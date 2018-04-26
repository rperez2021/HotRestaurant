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

function is_open_table () {
    return firebase.database().ref('tables/').once('value').then(function(snapshot) {
        var table_data = snapshot.val();
        return table_data
});
}

is_open_table()
    .then(data => console.log(data))







//   app.get('/api/characters/:character', (req, res) => {
//     var char_update = firebase.database().ref('characters/');
//     char_update.on('value', function (snapshot) {
//         snapshot.val().forEach(element => {
//             var input = req.params.character
//             if (element.routeName === input.toLowerCase().trim()) {
//                 res.send(element)
//             } else {
//                 console.log("broke")
//             }
//         });
//     });
// }) 