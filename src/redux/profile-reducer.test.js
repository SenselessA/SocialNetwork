import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer"

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's, my first post", likesCount: 11 },
        { id: 3, message: "blabla", likesCount: 11 },
        { id: 4, message: "dada", likesCount: 11 },
    ]
}

test('length of posts should be incremented', () => {
    // 1. text data
    let action = addPostActionCreator('Panimau')
    
    // 2. actionw
    let newState = profileReducer(state, action)

    // 3. expectation, ожидаем (expect), что (newState.posts.length) будет равен(toBe) (===) 5
    expect(newState.posts.length).toBe(5)
});

test('message of new posts should be correct', () => {
    // 1. text data
    let action = addPostActionCreator('Panimau')
    
    // 2. actionw
    let newState = profileReducer(state, action)

    // 3. expectation, ожидаем (expect), что (newState.posts.length) будет равен(toBe) (===) 5
    expect(newState.posts[4].message).toBe('Panimau')
});

test('after deleting length of messages should be decrement', () => {
    // 1. text data
    let action = deletePost(1)
    
    // 2. actionw
    let newState = profileReducer(state, action)

    // 3. expectation, ожидаем (expect), что (newState.posts.length) будет равен(toBe) (===) 5
    expect(newState.posts.length).toBe(3)
}); 