import "./Search.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterGames } from "../../helpers/filterGames";

const Search = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const onInputChanged = (event) => {
        setInput(event.target.value);
    }

    const onKeyDown = (event) => {
        if (event.keyCode === 13) {
            console.log("enter")
            console.log(filterGames(input));
        }
    }
    return (
        <>
            <div>
                <label htmlFor="test">test</label>
                <input onKeyDown={onKeyDown} onChange={onInputChanged} id="test" type="text" value={input} />
            </div>
        </>
    )
}

export default Search;