import "./Form.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterGamesByTitle, filterGamesByPlatfrom } from "../../helpers/filterGames";

const Form = () => {

    const [inputs, setInputs] = useState([
        {
            id: "title",
            value: "",
            label: "TITLE",
        },
        {
            id: "platforms",
            value: "",
            label: "PLATFORM",
        }
    ]);

    const onInputChanged = (event) => {
        let copy = [...inputs];
        copy.map(input => {
            if (input.id === event.target.id) {
                input.value = event.target.value;
            }
        })
        setInputs(copy);
    }

    const inputsToBeRenderd = inputs.map(objectFromStateArray => {
        return (
            <div>
                <label htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
                <input onChange={onInputChanged} id={objectFromStateArray.id} type="text" value={objectFromStateArray.value} />
            </div>
        )
    })

    const submit = (event) => {
        event.preventDefault();
        console.log(filterGamesByPlatfrom("ps4"))
    }

    return (
        <form onSubmit={submit}>
            {inputsToBeRenderd}
            <button onClick={submit}>Zoeken</button>
        </form>
    )


}

export default Form;