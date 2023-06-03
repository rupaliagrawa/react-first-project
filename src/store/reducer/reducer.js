
const initialState = {
    counter:0,
    value:3
}

const rootReducer =  (state=initialState,action) => {
    if(action.type == "INCREMENT_COUNTER") {
        return{
            ...state,
            counter:state.counter + 1,
        };
    }
    return state
};
export default rootReducer;