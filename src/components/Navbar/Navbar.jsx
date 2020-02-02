import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';


const Navbar = (props) => {
    return (
        <nav className={style.nav}>
            <NavLink className={style.nav__item} activeClassName={style.active} to="/profile">Profile</NavLink>
            <NavLink className={style.nav__item} activeClassName={style.active} to="/dialogs">Messages</NavLink>
            <NavLink className={style.nav__item} activeClassName={style.active} to="/users">Users</NavLink>
            <NavLink className={style.nav__item} activeClassName={style.active} to="/news">News</NavLink>
            <NavLink className={style.nav__item} activeClassName={style.active} to="/music">Music</NavLink>
            <NavLink className={style.nav__item} activeClassName={style.active} to="/settings">Settings</NavLink>
        </nav>
    )
}

export default Navbar;