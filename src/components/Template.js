import React from "react";
import { styled } from "styled-components";

// import { Styled } from "styled-components/dist/constructors/constructWithOptions";

const TemplatBlock = styled.div`
// 화면크기
    width : 720px;
    height : 820px;
    position : relative; /*추후 박스 하단에 추가 버튼을 위치시키기 위한 설정*/
    background : white;
    margin : 0 auto;
`
function Templat(){
    return(
        <TemplatBlock>상속받을 값</TemplatBlock>
    )
    ;
}
export default Templat;