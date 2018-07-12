import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList'
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
  constructor(props) {
    super(props);

    this.state = {
      activeRoom: '',
    };

    this.setActiveRoom = this.setActiveRoom.bind(this);
  }

  setActiveRoom(room) {
    this.setState({ activeRoom: room });
    console.log(this.state.activeRoom);
  }

  render() {
    return (
      <div className="App">
        <RoomList firebase={ firebase } setActiveRoom={this.setActiveRoom}/>

      </div>
    );
  }
}

export default App;
