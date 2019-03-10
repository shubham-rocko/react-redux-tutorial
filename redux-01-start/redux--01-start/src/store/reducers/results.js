import * as actionTypes from '../actions';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result }) })
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return updateObject(state, { result: updatedArray });
    }

    return state;
};

export default resultReducer;