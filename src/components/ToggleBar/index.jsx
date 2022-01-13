import React from "react";
import { useState } from "react";
import styles from "./toggleBar.module.css";
import "mapbox-gl/dist/mapbox-gl.css";

function ToggleBar() {
  let [currentStyle, setCurrentStyle] = useState(true);
  const changeColor = () => setCurrentStyle(!currentStyle);
  return (
    <div>
      <input type="checkbox" onChange={changeColor} />
      <p className={currentStyle ? styles.green : styles.purple}>
        Далеко-далеко за словесными горами в стране, гласных и согласных живут
        рыбные тексты.
      </p>
    </div>
  );
}
//мемоизация компонента

export default React.memo(ToggleBar);
