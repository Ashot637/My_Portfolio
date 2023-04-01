import React from 'react'
import { SocialIcon } from 'react-social-icons';
import classes from './header.module.scss';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className={classes.inner}>
                    <div>
                        <SocialIcon className={classes.icon} url='https://www.github.com/Ashot637/' fgColor='grey' bgColor='transparent' />
                        <SocialIcon className={classes.icon} url='https://www.facebook.com/Ash.Martirosyan8/' fgColor='grey' bgColor='transparent' />
                        <SocialIcon className={classes.icon} url='https://mail.google.com/mail/u/0/?fs=1&to=ashotmartirosyan637@gmail.com&su=SUBJECT&body=BODY&bcc=ashotmartirosyan637@gmail.com&tf=cm' fgColor='grey' bgColor='transparent' />
                    </div>
                    <span>
                        +37499001578
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header;