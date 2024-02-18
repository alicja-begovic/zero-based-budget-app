import { useState } from "react";
export default function Header() {
  const [amount, setAmount] = useState("");
  const [groceries, setGroceries] = useState("");
  const [house, setHouse] = useState("");
  const [car, setCar] = useState("");
  const [clothes, setClothes] = useState("");
  const [eatingOut, setEatingOut] = useState("");
  const [savings, setSavings] = useState("");

  let calc = amount - groceries - house - car - clothes - eatingOut - savings;
  return (
    <header className="App-header">
      <h1>Zero Base Budget App</h1>
      <p>
        Write amount which you want to share and application will calculate the
        rest.
      </p>
    </header>
  );
}
