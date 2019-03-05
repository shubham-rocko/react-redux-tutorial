const redux =  require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//recuder
const rootReducer = (state = initialState, action) => {
    return state;
}

//store
const store = createStore(rootReducer);
console.log(store.getState());

//dispatching actions

//subscriptions