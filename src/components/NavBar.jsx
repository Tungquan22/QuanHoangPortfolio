import React from 'react';
import './NavBar.css';
import LinkedIn from "../assets/images/linkedin-small.png"
import Github from "../assets/images/github-small.png"
import Kaggle from "../assets/images/kaggle-small.png"
import Resume from "../assets/files/QuanHoang_Resume.pdf"
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
        <div className="navbar">
            <div className="social-links">
                <a href="https://www.linkedin.com/in/tung-quan-hoang/" target="_blank" rel="noreferrer">
                    <img id="linkedin" src={LinkedIn} alt="LinkedIn" />
                </a>
                <a href="https://github.com/tungquanhoang" target="_blank" rel="noreferrer">
                    <img id="github" src={Github} alt="GitHub" />
                </a>
                <a href="https://www.kaggle.com/kwonhoang" target="_blank" rel="noreferrer">
                    <img id="kaggle" src={Kaggle} alt="Kaggle" />
                </a>
            </div>
            <nav>
                <ul>
                <li><a href="index.html">Myself</a></li>
                <Link className='nav-link' to='/my-hobbies'>
                    My Hobbies
                </Link>
                <Link className='nav-link' to='/my-projects'>
                    My Projects
                </Link>
                <div>
                    <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
                </div>
                </ul>
            </nav>
        </div>
    </>
  );
}

export default NavBar;