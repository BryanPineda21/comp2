import React from "react";
import { Link } from 'react-router-dom';
import './nav.css';


const NavBar = () => {

    return(

        <header className="navbar">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">Mission</a></li>
            <li><a href="#">Learn more</a></li>
            <li><a href="/resource">resources</a></li>
          </ul>
        </nav>
      </header>




    );



}

export default NavBar







