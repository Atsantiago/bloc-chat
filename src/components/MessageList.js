import React, { Component } from 'react';
import messageData from './../data/messages.js';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

//receive firebase as prop
  //  this.roomsRef = this.props.firebase.database().ref('rooms');

  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
    //  const message = {key: snapshot.key, value: snapshot.val() };
    //  this.setState({ rooms: this.state.rooms.concat( room.value )});
    })
  }

  export default MessageList;
