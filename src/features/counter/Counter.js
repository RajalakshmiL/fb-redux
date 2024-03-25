import { useState } from "react";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const handleClick = () => {
    if (incrementAmount === 0) {
      alert("Please provide a number");
      return;
    }
    dispatch(incrementByAmount(incrementAmount));
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        ></input>
        <button onClick={handleClick}>Increment by {incrementAmount}</button>
      </div>
    </section>
  );
};

export default Counter;
