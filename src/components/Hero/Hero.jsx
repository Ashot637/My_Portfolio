import React from 'react'
import classes from './hero.module.scss';
import img from '../../img/me.jpg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
    const [text] = useTypewriter({
        words: [
            "Hi!, My name's Ash Martirosyan",
            "<Guy, Who loves to Code.tsx />"
        ],
        delaySpeed: 2000
    });

    return (
        <div className={classes.hero}>
            <div className="container">
                <div className={classes.inner}>
                    <div className={classes.circle}></div>
                    <div className={classes.buble}></div>
                    <img src={img} alt="" className={classes.img} />
                    <span className={classes.title}>SOFTWARE ENGINEER</span>
                    <h1>
                        <span className={classes.typeWritter}>{text}</span>
                        <Cursor cursorColor='#F7AB0A' cursorStyle='|' />
                    </h1>
                    <nav>
                        <ul className={classes.nav}>
                            <li><a className={classes.link} href="#skills">SKILLS</a></li>
                            <li><a className={classes.link} href="#projects">PROJECTS</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Hero;