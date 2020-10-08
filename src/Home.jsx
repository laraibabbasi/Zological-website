import React from 'react';
import webs from '../src/img/2.jpg';
import Comp from './Comp';
import './home.css';

const Home = ()=>{
    return(
      <>
      <Comp name="Welcome to" imgsrc={webs}
        visit="/services" btnname="Find Out More" br="img-fluid animated br" 
      />
      </>
    )
}

export default Home;