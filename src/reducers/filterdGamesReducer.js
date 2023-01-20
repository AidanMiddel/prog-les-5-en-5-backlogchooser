const filterdGamesReducer = (state, action) => {
    if(state === undefined){
        return "Aidan";
    }
    if(action.type === "FILTERDGAMES"){
        return action.payload;
    }
    return state;
}

export default filterdGamesReducer;