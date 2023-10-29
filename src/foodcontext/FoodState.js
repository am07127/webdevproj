import foodContext from "./foodContext";
import { useState } from "react";

const FoodState = (props) => {

    const [food, setFood] = useState(1);
    return (
        <foodContext.Provider value={{food,setFood}}>
          {props.children}
        </foodContext.Provider>
      )
    
}



export default FoodState;