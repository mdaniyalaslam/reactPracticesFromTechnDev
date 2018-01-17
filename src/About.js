import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class About extends Component {

  operation() {
    console.log('success')
    this.props.history.push('/')
  }

  routeToContact() {
    this.props.history.push('/contact/6548')
  }

  render() {
    return (
      <div className="App">
        <h1>About Component</h1>
        <button onClick={this.operation.bind(this)}>Operation</button>
        <button onClick={this.routeToContact.bind(this)}>Contact</button>

        <ul>
          <li><Link to='/contact/6544'>6544</Link></li>
          <li><Link to='/contact/6555'>6555</Link></li>
        </ul>
      </div>
    );
  }
}

export default About;