import classes from './skills.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Skills = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className={classes.skills}>
            <div className="container">
                <div className={classes.inner}>
                    <h2 className={classes.title} data-aos="fade-left" data-aos-duration="1000">SKILLS</h2>
                    <span className={classes.subtitle}>HOVER OVER A SKILL FOR CURRENT PROFIESCENCY</span>
                    <div className={classes.grid}>
                        <div className={classes.skill}>
                            <img src="data:image/png;base64,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" alt="" className={classes.img} />
                            <div className={classes.percent}>
                                <p>95%</p>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <img src="data:image/png;base64,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" alt="" className={classes.img} />
                            <div className={classes.percent}>
                                <p>90%</p>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <img src="data:image/png;base64,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" alt="" className={classes.img} />
                            <div className={classes.percent}>
                                <p>90%</p>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <img src="data:image/png;base64,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" alt="" className={classes.img} />
                            <div className={classes.percent}>
                                <p>70%</p>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <img src="data:image/png;base64,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" alt="" className={classes.img} />
                            <div className={classes.percent}>
                                <p>85%</p>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" className={classes.img} />
                            <div className={classes.percent}>
                                <p>85%</p>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="" className={classes.img} />
                            <div className={classes.percent}>
                                <p>85%</p>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <img src="https://i.pinimg.com/236x/5c/88/9d/5c889d33114df76e3cb00bc5897a3abe.jpg" alt="" className={classes.img} />
                            <div className={classes.percent}>
                                <p>80%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;