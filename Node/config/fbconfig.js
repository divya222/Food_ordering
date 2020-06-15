var firebase = require('firebase');
var firebaseConfig = {
    apiKey: "AIzaSyAF2WO7SuEmk8cY9jwJTeJxxJzSvcv0sxA",
    authDomain: "foodorder-f4971.firebaseapp.com",
    databaseURL: "https://foodorder-f4971.firebaseio.com",
    projectId: "foodorder-f4971",
    storageBucket: "foodorder-f4971.appspot.com",
    messagingSenderId: "1019835764714",
    appId: "1:1019835764714:web:c4ed61ad2b38e16c78ec93",
    measurementId: "G-L09VT7MD9H"
  };
  firebase.initializeApp(firebaseConfig);
  var db = firebase.database();
  module.exports = db;