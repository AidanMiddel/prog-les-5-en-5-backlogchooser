import { useSelector } from "react-redux";
import "./Display.css";

const Display = () => {
    /*haalt de array van de gefilterde games binnen en zet hem in een variabele */
    const filterdGames = useSelector(state => { return state })

    /*nieuw variabele om het eerste resultaat bij te houden */ 
    let firstToBeRenderd = false;

    /*filterd op eerste resultaat om een recomondatie te geven*/
    const titlesToBeRendered = filterdGames.map(game => {
        if(firstToBeRenderd === false){
            firstToBeRenderd = true
            return(
            <section key={game.title} className="display">
                <h2>{game.title}</h2>
                <figure className="display__play">Play this!</figure>
            </section>
            )
        }
        return (
            <section key={game.title} className="display">
                <h2>{game.title}</h2>
            </section>
        )

    })
    return (
        <>
            {titlesToBeRendered}
        </>
    )
}

export default Display;