import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router-dom';
import AddMessageFormRedux from './AddMesagesForm';

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={'content ' + style.dialogs}>

            <div className={style.dialogNames}>
                {dialogElements}
            </div>

            <div className={style.messages}>
                <div>{messagesElements}</div>

                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>

        </div>
    )
}

export default Dialogs;