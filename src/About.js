import React, { Component } from 'react';



class About extends Component {

    operation() {
        console.log('success')
        this.props.history.push('/')
    }
    
    routeToContact(){
        this.props.history.push('/contact')
    }

  render() {
    return (
      <div className="App">
        <h1>About Component</h1>
        <button onClick={this.operation.bind(this)}>Operation</button>
        <button onClick={this.routeToContact.bind(this)}>Contact</button>
      </div>
    );
  }
}

export default About;