import styles from "./Pro3.module.css";
import { Overview } from "../../components/Overview";
import { useState } from "react";

export function Counter() {
  const overviewPoints = [
    "Using React useState hook to create and update a counter for tracking user interactions",
    "Implementing event handlers to increase or reset the counter value on button clicks",
    "Re-rendering the component automatically to display the current counter value",
  ];

  const [counter, setCounter] = useState(1);

  const increaseHandler = () => {
    setCounter(counter + 1);
  };

  const decreaseHandler = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="con_wrapper">
        <div className={styles.counter_card}>
          <div className={styles.counter_buttons}>
            <button onClick={decreaseHandler}>-</button>
            <p>{counter}</p>
            <button onClick={increaseHandler}>+</button>
          </div>
        </div>

        <Overview title="Overview" points={overviewPoints} />
      </div>
    </>
  );
}
