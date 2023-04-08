import { useState } from "react";

function ChangeFontSize() {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
  };

  return (
    <div className="font-size-container">
      <button className="font-size-btn" onClick={increaseFontSize}>
        +
      </button>
      <button className="font-size-btn" onClick={decreaseFontSize}>
        -
      </button>
      <style>
        {`
        .mainContainer,
        .sidebar,
        .header,
        .content,
        .flex-container,
        .mycl
        .com-1-flex-item, 
        .com-2-flex-item, 
        .com-3-flex-item, 
        .com-4-flex-item, 
        .com-5-flex-item, 
        .header, 
        .sidebar ul a{
            font-size: ${fontSize}px;
          }
      `}
      </style>
    </div>
  );
}

export default ChangeFontSize;
