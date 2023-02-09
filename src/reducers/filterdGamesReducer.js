/*krijgt de array van de gefilterde games binnen en display kan die ophalen */
const filterdGamesReducer = (state, action) => {
    if (state === undefined) {
        return [];
    }
    if (action.type === "FILTERDGAMES") {
        return action.payload;
    }
    return state;
}

export default filterdGamesReducer;