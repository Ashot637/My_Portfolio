import React from 'react'
import classes from './projects.module.scss';
import website1 from '../../img/1.png';
import website2 from '../../img/2.png';
import website3 from '../../img/3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className={classes.projects}>
            <div className={classes.inner}>
                <h2 className={classes.title} data-aos="fade-left" data-aos-duration="1000">PROJECTS</h2>
                <div className={classes.list}>
                    <div className={classes.website}>
                        <img src={website1} alt='' className={classes.img} data-aos="fade-down" data-aos-duration="1000" />
                        <div className={classes.desc}><a href="https://ashot637.github.io/React__Pizza__Redux-toolkit--TypeScript/" className={classes.link}>Case Study 1 of 3:</a> Pizza Shop</div>
                    </div>
                    <div className={classes.website}>
                        <img src={website2} alt='' className={classes.img} data-aos="fade-down" data-aos-duration="1000" />
                        <div className={classes.desc}><a href="https://ashot637.github.io/Hydra/" className={classes.link}>Case Study 2 of 3:</a> Hydra Website</div>
                    </div>
                    <div className={classes.website}>
                        <img src={website3} alt='' className={classes.img} data-aos="fade-down" data-aos-duration="1000" />
                        <div className={classes.desc}><a href="https://ashot637.github.io/React__Sneakers-shop/" className={classes.link}>Case Study 3 of 3:</a> Sneakers Shop</div>
                    </div>
                </div>

                <div className={classes.bg}></div>
            </div>

        </div>
    )
}

export default Projects;