import { useEffect, useMemo, useState } from "react";
import ToggleBar from "../../components/ToggleBar";

function FirstPage() {
  const [counter, setCounter] = useState(0);
  const [green, setGreen] = useState(true);
  function duble(params: number) {
    setTimeout(() => console.log("useDouble"), 3000);

    return params * 2;
  }

  //мемоизация результата работы функции
  let dubleCounter = useMemo(() => duble(counter), [counter]);
  const increment = () => {
    console.log("считаем инкремент");
    setCounter(counter + 1);
  };

  return (
    <div className="wrapper">
      <h1 style={{ color: green ? "green" : "black" }}>{counter}</h1>
      <h1 style={{ color: green ? "green" : "black" }}>{dubleCounter}</h1>
      <button onClick={increment}>Увеличить</button>
      <button onClick={() => setGreen(!green)}> Менять цвет</button>
      <br />
      <ToggleBar />
    </div>
  );
}
export default FirstPage;
