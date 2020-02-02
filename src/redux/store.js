import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: "It's, my first post", likesCount: 11 },
                { id: 3, message: "blabla", likesCount: 11 },
                { id: 4, message: "dada", likesCount: 11 },
            ],
            newPostText: 'Andrusha',
        },
        dialogsPage: {
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
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State chanhed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
        
    }
}





export default store

window.state = store