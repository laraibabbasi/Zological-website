import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
const App=()=>{
    return(
        <>
        <Navbar/>
        <Switch>
        <Route path="/contact">
            <Contact/>
        </Route>
        <Route path="/services">
            <Service name="Our Services"/>
        </Route>
        <Route path="/about">
            <About/>
        </Route>
         <Route exact path="/">
           <Home/>
           <Service name="Explore Our Attractions"/>
           <About/>
           <Contact/>
         </Route>
          <Redirect to="/"/>  
        </Switch>
        <Footer/>
        </>
    )
}

export default App;