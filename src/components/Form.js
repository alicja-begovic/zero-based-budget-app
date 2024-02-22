import { useState } from "react";
import classes from "./Form.modules.css";

export default function Form() {
  const [amount, setAmount] = useState("");
  const [groceries, setGroceries] = useState("");
  const [house, setHouse] = useState("");
  const [car, setCar] = useState("");
  const [clothes, setClothes] = useState("");
  const [eatingOut, setEatingOut] = useState("");
  const [savings, setSavings] = useState("");

  let calc = amount - groceries - house - car - clothes - eatingOut - savings;

  return (
    <form className={classes.control}>
      <p>
        <strong>How much left: {calc}</strong>
      </p>
      <div className={classes.control}>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Groceries:</label>
        <input
          type="number"
          value={groceries}
          onChange={(e) => setGroceries(e.target.value)}
        />
      </div>
      <div>
        <label>House:</label>
        <input
          type="number"
          value={house}
          onChange={(e) => setHouse(e.target.value)}
        />
      </div>
      <div>
        <label>Car:</label>
        <input
          type="number"
          value={car}
          onChange={(e) => setCar(e.target.value)}
        />
      </div>
      <div>
        <label>Clothes:</label>
        <input
          type="number"
          value={clothes}
          onChange={(e) => setClothes(e.target.value)}
        />
      </div>
      <div>
        <label>Eating out:</label>
        <input
          type="number"
          value={eatingOut}
          onChange={(e) => setEatingOut(e.target.value)}
        />
      </div>
      <div>
        <label>Savings:</label>
        <input
          type="number"
          value={savings}
          onChange={(e) => setSavings(e.target.value)}
        />
      </div>
    </form>
  );
}
