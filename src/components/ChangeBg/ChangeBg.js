import { useState } from "react";

function ChangeBg() {
  const [isBlackBg, setIsBlackBg] = useState(false);

  const handleClick = () => {
    setIsBlackBg(!isBlackBg);
  };

  const backgroundColor = isBlackBg ? "#000000" : "#e0e0eb";
  const fontColor = isBlackBg ? "#e0e0eb" : "#000000";
  const backgroundColor2 = isBlackBg ? "#404040" : "#ffffff";
  const fontColor2 = isBlackBg ? "#ffffff" : "#000000";

  const styles = `
    .mainContainer{
      background-color: ${backgroundColor} !important;
      color: ${fontColor} !important;
    }
    .com-1-flex-item, .com-2-flex-item, .com-3-flex-item, .com-4-flex-item, .com-5-flex-item, .header, .sidebar, .sidebar header, .sidebar ul a{background-color: ${backgroundColor2} !important;
    color: ${fontColor2} !important;}
  `;

  return (
    <div className="change-bg-container">
      <button onClick={handleClick}>Change Background and Font Color</button>
      <style>{styles}</style>
    </div>
  );
}

export default ChangeBg;
