import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyA8CClbRRnTzqvr2d67iEQtyY9H5Rg0XZI",
  authDomain: "effyisimpulsive.firebaseapp.com",
  databaseURL: "https://effyisimpulsive.firebaseio.com",
  projectId: "effyisimpulsive",
  storageBucket: "effyisimpulsive.appspot.com",
  messagingSenderId: "1084699373670"
};
var fire = firebase.initializeApp(config);
export default fire;
