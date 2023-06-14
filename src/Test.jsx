import styled from "styled-components";
import React from "react";

const Test = ()=>{
  return(
    <div>
      <Test1>
      test
      <h2>현재시간: {new Date().toLocaleTimeString()}</h2>
      </Test1>
    </div>
  )
}
const Test1 = styled.div`
 border: 1px black solid;
  
`


export default Test;