import React from 'react';
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom';
import '../../App.css'
import cn from 'classnames'


const Header = (props) => {
    return (
        <header className={s.header}>
                <img className={s.iconHeader} alt="logo" src="https://cdn.onlinewebfonts.com/svg/img_35174.png" />

                <h1>Way of the Samurai</h1>

                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div className={s.login}>
                            <div className={cn(s.loginName)}>{props.login} </div> <button className={cn("btn", s.logBtn)} onClick={props.logout}>Log out</button></div>
                        : <NavLink className={cn("btn", s.logBtn)} to={'/login'} >Login</NavLink>
                    }
            </div>
        </header>
    )
}

export default Header;