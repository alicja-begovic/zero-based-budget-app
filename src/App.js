import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState('');
  const [dailyExpenses, setDailyExpenses] = useState('');
  const [odds, setOdds] = useState('');

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
        <label>Daily expenses:</label>
        <input
          type="number"
          value={dailyExpenses}
          onChange={(e) => setDailyExpenses(e.target.value)}
        />
        <label>How much left</label>
        <input
          type="number"
          value={odds}
          onChange={(odds) => setOdds(amount - dailyExpenses)}
        />
      </section>
    </main>
  );
}

export default App;

/*

<input type="number" placeholder="Enter Value Here" value={val1} onChange={e => setVal1(e.target.value)} />

<input type="number" placeholder="Enter Value Here" value={val2} onChange={e => setVal2(e.target.value)} />

<input type="number" placeholder="Enter Value Here" value={sum} onChange={val => setSum(val1 * val2)} />

*/
