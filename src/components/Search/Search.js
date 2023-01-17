import { useState } from "react";
import "./Search.css"

const Search = () => {
    const [input, setInput] = useState("");

    const onInputChanged = (event) => {
        setInput(event.target.value);
    }
    return (
        <>
            <div>
                <label htmlFor="test">test</label>
                <input onChange={onInputChanged} id="test" type="text" value={input}/>
            </div>
        </>
    )
}

export default Search;