import React from 'react'
import { sendMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hok/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
           dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

/*  Что делает COMPOSE: Возьми "диалогс" закинь в withAuthRedirect("диалогс"), потом "результат" withAuthRedirect закинь в connect(mapStateToProps, mapDispatchToProps)("результат")
let AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default DialogsContainer; */

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs)