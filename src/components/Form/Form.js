import "./Form.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterGamesByTitle, filterGamesByPlatfrom } from "../../helpers/filterGames";

const Form = () => {

    /*zorgt dat er meerdere input velden met id worden bijgehouden */
    const [inputs, setInputs] = useState([
        {
            id: "title",
            value: "",
            label: "TITLE",
            filter: filterGamesByTitle,
        },
        {
            id: "platforms",
            value: "",
            label: "PLATFORM",
            filter: filterGamesByPlatfrom,
        }
    ]);

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
            <div>
                <label htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
                <input onChange={onInputChanged} id={objectFromStateArray.id} type="text" value={objectFromStateArray.value} />
            </div>
        )
    })

    /*als je de from submit loopt hij filterd hij de input met de array van games */
    const submit = (event) => {
        event.preventDefault();
        inputs.forEach(input => {
            console.log(input.filter(input.value));
        })
    }

    /*renderd alles op het scherm */
    return (
        <form onSubmit={submit}>
            {inputsToBeRenderd}
            <button onClick={submit}>Zoeken</button>
        </form>
    )


}

export default Form;