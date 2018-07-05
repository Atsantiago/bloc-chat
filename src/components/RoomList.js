import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      newRoomName: '',
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');

  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = {key: snapshot.key, value: snapshot.val() };
      this.setState({ rooms: this.state.rooms.concat( room.value )});
    })
  }

  createRoom(event) {
    event.preventDefault();
    const newRoomName = this.state.newRoomName;
    this.roomsRef.push({name: newRoomName});
    this.setState({newRoomName: ''});
  }

  handleChange(event){
    this.setState({ newRoomName: event.target.value });
  }

  render(){
    return(
      <div>
          <table id="roomlist">
            <tbody>
                {this.state.rooms.map((room, index) =>
                    <tr className="rooms" key={index}>
                      <td>{ room.name }</td>
                    </tr>
                  )}
            </tbody>
          </table>
          <form onSubmit={this.createRoom.bind(this)}>
            <label>
              New Room:
                <input type="text" value={this.state.newRoomName}
                  onChange={this.handleChange.bind(this)} placeholder="Your room name" />
            </label>
            <input type="submit" value="Submit"/>
          </form>
      </div>
    )
  }

}
export default RoomList;
