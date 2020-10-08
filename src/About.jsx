import React from 'react';
import Comp from './Comp';
import S7 from '../src/img/s7.jpg';

const About = ()=>{
    return(
        <div>
            <Comp name="Welcome to About Page" imgsrc={S7}
        visit="/contact" btnname="Contact Us" br="img-fluid animated bs"
      />
        </div>
    )
}

export default About;