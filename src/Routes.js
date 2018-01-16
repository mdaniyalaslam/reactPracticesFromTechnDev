import React from 'react';

// import {BrowserRouter as Router, Route} from 'react-router-dom';
// changes because of customeHistory the new
import {Router, Route} from 'react-router-dom';

import App from './App';
import About from './About';
import Navbar from './Navbar';
import Contact from './Contact';
import CreateBrowserHistory from 'history/createBrowserHistory';

const customHistory = CreateBrowserHistory();

const CustomRoutes = () =>(
    <Router history = {customHistory}>
        <div>
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <hr/> */}

            <Navbar/>

            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>

)

export default CustomRoutes;