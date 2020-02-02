import React from 'react';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return (
        <header className="header">
            <img alt="logo" src="https://cdn.worldvectorlogo.com/logos/puma-logo.svg" />

            <div className={style.loginBlock}>
                { props.isAuth 
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;