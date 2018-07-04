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
      this.setState({ rooms: this.state.rooms.concat( room.value )});
      console.log(this.state.rooms);
      console.log(room.key);
    })
  }

  render(){
    return(
          <table id="roomlist">
            <tbody>
                {this.state.rooms.map((room, index) =>
                    <tr className="rooms" key={index}>
                      <td>{ room }</td>
                    </tr>
                  )}
            </tbody>
          </table>
    );
  }

}
export default RoomList;
