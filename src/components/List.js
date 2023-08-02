import React from "react";
import Item from "./Item";
import { useState } from "../Reducer";
function List(){
    const todos = useState();

    return(
        <>
        {todos.map(function(todo){
            return(
            <Item
                id={todo.id}
                text={todo.text}
                done={todo.done}
                key={todo.id}
            />
            );
        })}
        </>
    );

}
export default List;