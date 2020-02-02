const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Katya' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Denis' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' }
    ],
    messages: [
        { id: 1, message: 'Andrey' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'How are you?' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo!' },
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody

            return { 
                ...state,
                messages: [ ...state.messages, { id: 6, message: body } ]
            }

        default: return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer