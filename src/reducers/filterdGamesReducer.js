const filterdGamesReducer = (state, action) => {
    if(state === undefined){
        return [];
    }
    if(action.type === "FILTERDGAMES"){
        return action.payload;
    }
    return state;
}

export default filterdGamesReducer;