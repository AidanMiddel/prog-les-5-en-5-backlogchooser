import "./Form.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterGames } from "../../helpers/filterGames";

const Form = () => {

    const [inputs, setInputs] = useState([
        {
            id: "test",
            value: "",
        },
        {
            id: "test2",
            value: "",
        }
    ]);
    const dispatch = useDispatch();

    const onInputChanged = (event) => {
        let copy = [...inputs];
        copy.map(input => {
            if(input.id === event.target.id){
                input.value = event.target.value;
            }
        })
        setInputs(copy);
    }

    const submit = (event) => {
        
    }

    return (
        <form onSubmit={submit}>
            <div>
                <label htmlFor="test">test</label>
                <input onChange={onInputChanged} id="test" type="text" value={inputs[0].value}/>
            </div>
            <div>
                <label htmlFor="test2">test</label>
                <input onChange={onInputChanged} id="test2" type="text" value={inputs[1].value}/>
            </div>
            <button onClick={submit}>Zoeken</button>
        </form>
    )


}

export default Form;