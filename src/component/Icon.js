import { useState } from "react";
import { AiFillApple, AiOutlineGoogle,AiFillAndroid,AiOutlineAlibaba} from "react-icons/ai";
function Icon(props) {
    const [icon, setIcon] = useState("");
    const[index,setIndex] = useState(0);

    const changeIcon = (state) => {
        if(state[index]!== null){
        setIcon(state[index]);
        setIndex(index +1);
        if(index === state.length-1)
        setIndex(0);
        }
    };

    return (
        <div>
            <span className="icon"> I work at:</span> 
            {icon=== "apple"?(<><AiFillApple className="icon"/><h1>hello you work @ {icon}</h1></>) :
            icon=== "google" ? (<><AiOutlineGoogle className="icon" /><h1>hi everyone he works @ {icon} </h1></>): 
            icon ==="android" ?(<><AiFillAndroid className="icon"/><h1>hello everybody cheer for him he works @ Android</h1></>):
            icon=== "alibaba"?(<><AiOutlineAlibaba className="icon" /><h1>hello you work @ Alibaba {icon}</h1></>):
            <h1>No where, I am looking for a job</h1> }
            <button className = "button" onClick={() =>changeIcon(props.icon)}>Change</button>
        </div>
    );
}
export default Icon;