import React, { useReducer, useContext, useRef, createContext } from "react";

const StateContext = createContext(null);
const DispatchContext = createContext(null);
const NextIdContext = createContext(null);
function reducer(state, action){
    switch(action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo);
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default :
            return state;
    }
}

const intodolist = [
    {
        id : 1,
        text : "리액트 공부",
        done : true
    },
    {
        id : 2,
        text : "자바",
        done : true
    },
    {
        id : 3,
        text : "파이선",
        done : true
    },
    {
        id : 4,
        text : "R",
        done : false
    }
];

export function Provider({children}){
    const [state, dispatch] = useReducer(reducer, intodolist);
    const nexId = useRef(5);

    return(
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <NextIdContext.Provider value={nexId}>
                    {children}
                </NextIdContext.Provider>

            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

export function useState(){
    return useContext(StateContext);
}
export function useDispatch(){
    return useContext(DispatchContext);
}
export function useNextId(){
    return useContext(NextIdContext);
}


    // createContext 생성한 context 객체를 원하는 클래스의 contextType 프로퍼티로 지정
    // 프로퍼티 이름
