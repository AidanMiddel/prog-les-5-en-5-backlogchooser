import { useState } from "react";
import "./Search.css"
import { useDispatch } from "react-redux";

const Search = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const onInputChanged = (event) => {
        setInput(event.target.value);
    }

    const onKeyDown = (event) => {
        if(event.keyCode === 13){
            console.log("enter")
            dispatch({type:"FILTERDGAMES", payload:input})
        }
    }
    return (
        <>
            <div>
                <label htmlFor="test">test</label>
                <input onKeyDown={onKeyDown} onChange={onInputChanged} id="test" type="text" value={input}/>
            </div>
        </>
    )
}

export default Search;