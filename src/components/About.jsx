import React from 'react';
import './About.css';
import Profile from "../assets/images/Profile.jpg"
import NavBar from './NavBar';

function About() {
  return (
    <>
        <NavBar />
        <div id="myself">
        <section id="profile">
            <div className="image-container">
            <img id="profile-picture" src={Profile} alt="Profile" />
            </div>
            <h2>Tung Quan Hoang</h2>
        </section>
        <section id="about-me">
            <h2>About me</h2>
            <p>
            I am a Vietnamese student currently doing a double degree of Bachelor of Commerce/Computer Science
            at the University of New South Wales (UNSW) in Sydney, Australia. I am confident in handling data 
            in various ways and I am currently trying to also be good at computer science.
            </p>
            <p>
            I am both a dog and cat person. I love playing games with good characterization, loot explosions,
            and skill trees (Path of Exile is an example)! I also like playing at an arcade, especially dancing games.
            Other than that, I also love having plants (basically anything green) around me so I have some terrariums 
            and succulents.
            </p>
        </section>
        </div>
    </>
  );
}

export default About;
