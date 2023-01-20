import { games } from "../data/games";

export const filterGames = (nameToBeSearched) => {
    const filterd = [];
    games.map(game => {
        if(game.title === nameToBeSearched){
            filterd.push(game);
        }
    })
    return filterd
}