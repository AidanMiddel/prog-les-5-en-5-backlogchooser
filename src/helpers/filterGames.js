import { games } from "../data/games";

export const filterGamesByTitle = (nameToBeSearched) => {
    return games.filter(game => {
        if (game.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1) {
            return game;
        }
    })
}

export const filterGamesByPlatfrom = (platformToBeSearched) => {
    return games.filter(platform => {
        let found = false;
        platform.platforms.forEach(platform => {
            if(platform === platformToBeSearched.toUpperCase()){
                found = true;
            }
        });
        if (found === true){
            return platform
        }
    })
}