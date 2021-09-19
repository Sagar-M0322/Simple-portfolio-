import React from 'react'
import SocialContact from '../../comman/social contanct'
import "./about.css"

function About() {
    return (
        <div className="about">
            <div className="abouttop">
                <div className="aboutinfo">
                    Hi there this <span className="name">Sagar</span>
                    <br/> I love to develop websites
                    <br/>and explore in the web development tools as well.
                </div>
                <div className="aboutphoto">
                    <img src={require('../../../assets/image1.jpeg').default} 
                    className='picture'/>
                </div>
            </div>
            <div className="aboutbtm"> 
                <SocialContact/>
            </div>
        </div>
    );
}

export default About;