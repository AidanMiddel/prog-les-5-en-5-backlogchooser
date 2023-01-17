import { useState } from "react";
import "./Search.css"

const Search = () => {
    const [input, setInput] = useState("");

    const onInputChanged = (event) => {
        setInput(event.target.value);
    }

    const onKeyDown = (event) => {
        if(event.keyCode === 13){
            console.log("enter")
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