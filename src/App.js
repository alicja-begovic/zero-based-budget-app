import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [groceries, setGroceries] = useState("");
  const [house, setHouse] = useState("");
  const [car, setCar] = useState("");
  const [clothes, setClothes] = useState("");
  const [eatingOut, setEatingOut] = useState("");
  const [savings, setSavings] = useState("");
  const [odds, setOdds] = useState("");

  return (
    <main className="App">
      <header className="App-header">
        <h1>Zero Base Budget App</h1>
        <p>
          Just write amount of money which you whant to manage and enjoy stress
          free calculations.
        </p>
      </header>
      <section>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label>Groceries:</label>
        <input
          type="number"
          value={groceries}
          onChange={(e) => setGroceries(e.target.value)}
        />
        <label>House:</label>
        <input
          type="number"
          value={house}
          onChange={(e) => setHouse(e.target.value)}
        />
        <label>Car:</label>
        <input
          type="number"
          value={car}
          onChange={(e) => setCar(e.target.value)}
        />
        <label>Clothes:</label>
        <input
          type="number"
          value={clothes}
          onChange={(e) => setClothes(e.target.value)}
        />
        <label>Eating out:</label>
        <input
          type="number"
          value={eatingOut}
          onChange={(e) => setEatingOut(e.target.value)}
        />
        <label>Savings:</label>
        <input
          type="number"
          value={savings}
          onChange={(e) => setSavings(e.target.value)}
        />
        <label>How much left</label>
        <input
          type="number"
          value={odds}
          onMouseMove={(odds) =>
            setOdds(
              amount - groceries - house - car - clothes - eatingOut - savings
            )
          }
        />
      </section>
    </main>
  );
}

export default App;

/*



*/
