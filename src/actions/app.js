export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const UPDATE_TOTAL = "UPDATE_TOTAL"

export const addFeature = newTitle => {
    console.log(newTitle);
    return {
        type: ADD_FEATURE,
        payload: newTitle
    };
};

export const removeFeature = remove => {
    return {
        type: REMOVE_FEATURE,
        payload: remove
    };
};

export const updateTotal = update => {
    return {
        type: UPDATE_TOTAL,
        payload: update
    }

}

