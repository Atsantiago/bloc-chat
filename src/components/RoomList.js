import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');

  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = {key: snapshot.key, value: snapshot.val() };
      //room.key = snapshot.key//
      this.setState({ rooms: this.state.rooms.concat( room.value )});
      console.log(this.state.rooms);
    })
  }

  render(){
    return(
          <table id="roomlist">
            <tbody>
                {this.state.rooms.map((room) =>
                    <tr key={room.key}> { room }</tr>
                  )}
            </tbody>
          </table>
    );
  }

}
export default RoomList;
