import * as actionTypes from './actionTypes';

export const saveResult = (currResult) => {
    return{
        type: actionTypes.STORE_RESULT,
        result: currResult
    }
}

export const storeResult = (currResult) => {
    return (dispatch, getState) => {
        setTimeout(() => {
                // const oldCounter = getState().ctr.counter;
                // console.log(oldCounter);
                dispatch(saveResult(currResult));
            }, 2000);
    }
}

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    };
}
