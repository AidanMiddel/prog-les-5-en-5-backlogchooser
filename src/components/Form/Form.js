import "./Form.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterGamesByTitle, filterGamesByPlatfrom, filterGamesByGenre } from "../../helpers/filterGames";
import { games } from "../../data/games"

const Form = () => {

    /*zorgt dat er meerdere input velden met id worden bijgehouden */
    const [inputs, setInputs] = useState([
        {
            id: "title",
            value: "",
            label: "Title",
            filter: filterGamesByTitle,
        },
        {
            id: "platforms",
            value: "",
            label: "Platform",
            filter: filterGamesByPlatfrom,
        },
        {
            id: "genres",
            value: "",
            label: "Genres",
            filter: filterGamesByGenre,
        }
    ]);

    let dispatch = useDispatch();

    /*houd bij wat er in de input velden word gezet */
    const onInputChanged = (event) => {
        let copy = [...inputs];
        copy.map(input => {
            if (input.id === event.target.id) {
                input.value = event.target.value;
            }
        })
        setInputs(copy);
    }

    /*renderd evenveel input velden als in de state staan*/
    const inputsToBeRenderd = inputs.map(objectFromStateArray => {
        return (
            <div key={objectFromStateArray.id} className="form__wrapper">
                <label className="form__label" htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
                <input className="form__input" onChange={onInputChanged} id={objectFromStateArray.id} type="text" value={objectFromStateArray.value} />
            </div>
        )
    })

    /*als je de from submit loopt hij filterd hij de input met de array van games en stuurd hij dat naar de store */
    const submit = (event) => {
        event.preventDefault();
        let result = games;
        inputs.forEach(input => {
            result = input.filter(input.value, result);
        })
        dispatch({
            type: "FILTERDGAMES",
            payload: result
        })
    }

    /*renderd alles op het scherm */
    return (
        <form className="form" onSubmit={submit}>
            <div className="form__inputsWrapper">
                {inputsToBeRenderd}
            </div>
            <button className="form__search" onClick={submit}>Zoeken</button>
        </form>
    )


}

export default Form;