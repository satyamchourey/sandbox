import { useContext } from "react";
import { MyContext } from "../App";

function FirstChild() {
    const {name , age} = useContext(MyContext);
    return ( <>
      <h2>
        This is a Child Component!!!!
      </h2>
      <p>Context Value : name - {name} , age - {age}</p>
    </> );
}

export default FirstChild;