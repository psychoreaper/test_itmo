const redux = require('redux');

const reducer = (state = {isAuth: false}, action) => {
    switch (action.type) {
        case "login":
            return {isAuth: true};
        case "logout":
            return {isAuth: false};
        default:
            return state;
    }
};

const store = redux.createStore(reducer);

export default store;