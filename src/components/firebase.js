import firebase from "firebase";

var config = {
  apiKey: "AIzaSyA8ahNCxj_65-Y5_S4oGuelsUhdluAIL_Y",
  authDomain: "nathanaelsee-com.firebaseapp.com",
  databaseURL: "https://nathanaelsee-com.firebaseio.com",
  projectId: "nathanaelsee-com",
  storageBucket: "nathanaelsee-com.appspot.com",
};
firebase.initializeApp(config);
var database = firebase.database();


export default database;
