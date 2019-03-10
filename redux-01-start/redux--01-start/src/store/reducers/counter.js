import * as actionTypes from '../actions';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return updateObject(state, { counter: state.counter + 1 });
        case actionTypes.ADDITION:
            return updateObject(state, { counter: state.counter + action.value });
        case actionTypes.DECREMENT:
            return updateObject(state, { counter: state.counter - 1 })
        case actionTypes.SUBTRACTION:
            return updateObject(state, { counter: state.counter - action.value })
    }
    return state;
};

export default counterReducer;