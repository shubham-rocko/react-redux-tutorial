export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDITION =  'ADDITION';
export const SUBTRACTION = 'SUBTRACTION';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    };
}

export const decrement = () => {
    return {
        type: DECREMENT
    };
}

export const addition = () => {
    return {
        type: ADDITION,
        value: 5
    };
}

export const subtraction = () => {
    return {
        type: SUBTRACTION,
        value: 5
    };
}

export const saveResult = (currResult) => {
    return{
        type: STORE_RESULT,
        result: currResult
    }
}

export const storeResult = (currResult) => {
    return (dispatch) => {
        setTimeout(() => {
                dispatch(saveResult(currResult));
            }, 2000);
    }
}

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        resultElId: id
    };
}
