import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../src/img/1.jpg';
import './services.css';

const Card=(props)=> {
    return (
        <>
                        <div className="col-md-4 col-10 mx-auto abc ">
                          <div class="card">
                            <img src={props.src} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{props.title}</h5>
                                <p class="card-text">{props.txt}</p>
                                <a href={props.visit} target="blank" class="btn btn-primary">Click For Detail</a>
                            </div>
                            </div>
                            </div>
        </>
    )
}

export default Card
