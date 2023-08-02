import React, {useState} from "react";
import styled, {css} from "styled-components";
import {IconMd} from 'react-icons/md';

import { useDispatch, useNextId } from "../Reducer";


function Create(){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const nextId = useNextId();

    const onToggle = function(){
        setOpen(!open);
    }
    
    const handleChange = function(e){
        setValue(e.target.value);
    }
    
    const handleSubmit = function(e){
        e.preventDefault();
        dispatch({
            type : "CREATE",
            todo : {
                id : nextId.current,
                text : value,
                done : false
            }
        });
        nextId.current += 1;
        setOpen(false);
        setValue('');
    }

    return(
        <>
            {open && (
            <div>
                <form onSubmit={handleSubmit}>
                    <input value={value} onChange={handleChange} placeholder="앞으로 할일을 작성해주세요"/>
                </form>
            </div>
            )}
            <button onClick={onToggle} open={open}>
                <IconMd />
            </button>
        </>
    );
}

export default Create;