import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Dialogs.module.css';

const DialogItem = (props) => {
    
    const path = "/dialogs/" + props.id

    return (
        <div className={style.dialogName}>
            <NavLink to={path} className={style.dialogName__item} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem