import React from "react";
import styled from "styled-components";

import { useState } from "../Reducer";
const HeaderBlock = styled.div`
h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #afb4ba;
    font-size: 21px;
  }
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
`;
function Header(){
    const today = new Date(); // 오늘 날짜
    
    const dateString = today.toLocaleString('ko-KR',{ // 날짜 값을 받을 때는 int를 사용하지 않고 numeric, long, numeric을 사용
        year: 'numeric',
        month: 'long',
        day: 'numeric'

    });
    const dayName = today.toLocaleString('ko-KR',{weekday: 'long'});
    const todos = useState();
    const undoneTasks = todos.filter(todo => !todo.done);

    return(
        <HeaderBlock>
        <h1>{dateString}</h1>
        <div className="day">{dayName}</div>
        <div>할 일{undoneTasks.length}개 남았음.</div>
        </HeaderBlock>
    )
}
export default Header;