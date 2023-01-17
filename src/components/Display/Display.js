import { useSelector } from "react-redux";
import "./Display.css";

const Display = () => {
    const filterdGame = useSelector(state => {return state})
    return (
        <h1>Game: {filterdGame}</h1>
    )
}

export default Display;