import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList'
import * as firebase from 'firebase';

//Initialize Firebase
var config = {
   apiKey: "AIzaSyBBBNTu1v9iV0NjMSLeCv5YgjdKcS6ZL18",
   authDomain: "bloc-chat-c9968.firebaseapp.com",
   databaseURL: "https://bloc-chat-c9968.firebaseio.com",
   projectId: "bloc-chat-c9968",
   storageBucket: "bloc-chat-c9968.appspot.com",
   messagingSenderId: "411781985615"
 };
 firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomList firebase={ firebase } />
      </div>
    );
  }
}

export default App;
