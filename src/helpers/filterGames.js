import { games } from "../data/games";


/*kijkt naar de input van de form en filterd alle letters in de data array om te kijken of er een titel overeen komt */
export const filterGamesByTitle = (nameToBeSearched) => {
    return games.filter(game => {
        if (game.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1) {
            return game;
        }
    })
}

/*als hij een input binnen krijgt kijkt hij per item in de array of 1 platfrom overeen komt */
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