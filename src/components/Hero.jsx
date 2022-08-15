import React from 'react'
import '../styles/hero.scss'
import Button from "./button";
import luaphoto from '@images/luaphoto.jpeg'


const Hero = () => {

    return(
        <section className="hero">
            <div className="info">
                <h1>Hi!!! I'm LUA</h1>
                <p className="title">
                    IT Recruitment, Marketing & Business Management Specialist.
                </p>
                <Button
                    buttonText='Download CV'
                />
            </div>
            <div className="photo-container">
                <div className="photo">
                    <img src={luaphoto} alt="Lua Salazar" />

                </div>
            </div>
        </section>
    )
}

export default Hero;
