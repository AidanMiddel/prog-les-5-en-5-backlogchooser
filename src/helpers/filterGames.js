/*kijkt naar de input van de form en filterd alle letters in de data array om te kijken of er een titel overeen komt */
export const filterGamesByTitle = (nameToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(game => {
        if (game.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1) {
            return game;
        }
    })
}

/*als hij een input binnen krijgt kijkt hij per item in de array of 1 platfrom overeen komt vergeleken met de titel en genre */
export const filterGamesByPlatfrom = (platformToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(platform => {
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

/*als hij een input binnen krijgt kijkt hij per item in de array of 1 gerne overeen komt vergeleken met de titel en platform */
export const filterGamesByGenre = (genreToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(genre => {
        let found = false;
        genre.genres.forEach(genre => {
            if(genre === genreToBeSearched.toUpperCase()){
                found = true;
            }
        });
        if (found === true){
            return genre
        }
    })
}