
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    const handelClick = () =>{
        setCount(count + 1);
    };

  return (
    <div>
        <button onClick={handelClick}>Add Animal</button>
        <div>Number of animals: {count}</div>
    </div>
  );
}
export default App;
