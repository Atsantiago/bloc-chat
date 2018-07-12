import React, { Component } from 'react';
import messageData from './../data/messages.js';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      content: '',
      sentAt: '',
      roomId: ''
    };

  this.roomsRef = this.props.firebase.database().ref('rooms');

  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {

    })
  }
}
export default MessageList;
