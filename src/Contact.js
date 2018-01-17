import React, { Component } from 'react';



class Contact extends Component {

 

  render() {
    let users = {
      6544 : {
        name : 'Ahsan',
        cell : "abc"
      },
      6555 : {
        name : 'Saddam',
        cell : "ALU"
      }
    }
    let currentUser = users[this.props.match.params.id]

    return (

      <div className="App">
        <h1>HelloContact</h1>

        User Name: {currentUser.name}
        <br/>
        User cell: {currentUser.cell}
        
      </div>
    );
  }
}

export default Contact;