import React from "react";
import { useState } from "react";

function App() {
    // input창에 활용할 useState작성
    const [color, setColor] = useState('purple');
    // input창에 글을 작성시 event.target.value로 값을 받고 divElemt에 있는 스타일 값을 setColor로 변경, 변경된 값으로 div의 배경화면을 바꿔줌
    const handleInputChange = (event) => {
      const inputColor = event.target.value;
      setColor(inputColor);
      const divElement = document.getElementById('colorDiv');
      divElement.style.backgroundColor = inputColor;
    };

  return (
    <div>
      <div id="colorDiv" style={{display:"flex", justifyContent:"center",alignItems: "center",backgroundColor:"purple"}}>
      <p>Background Color :  {color}</p>
      <input
        type="text"
        value={color}
        onChange={handleInputChange}
        style={{height:"20px",}}
      />
      </div>
    </div>
  );
}



export default App;
