import * as actionTypes from '../actions';

const initialState = {
    counter: 0
};

const counterReducer = (state = initialState, action) => {
    switch(action.type){
       case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.ADDITION:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.SUBTRACTION:
            return {
                ...state,
                counter: state.counter - action.value
            };
    }
   
    return state;
};

export default counterReducer;