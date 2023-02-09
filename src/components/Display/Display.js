import { useSelector } from "react-redux";
import "./Display.css";

const Display = () => {
    const filterdGames = useSelector(state => { return state })

    let firstToBeRenderd = false;

    const titlesToBeRendered = filterdGames.map(game => {
        if(firstToBeRenderd === false){
            firstToBeRenderd = true
            return(
            <section className="display">
                <h2>{game.title}</h2>
                <figure className="display__play">Play this!</figure>
            </section>
            )
        }
        return (
            <section className="display">
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