import { useState } from "react";

function SplitBill({ friend, sendBill }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [payBill, setPayBill] = useState("you");

  const friendExpense = bill - expense;

  function handleSubmit(e) {
    e.preventDefault();
    const amount = payBill === "you" ? friendExpense : -expense;
    const newSplitBill = {
      id: friend.id,
      amount,
      payer: payBill,
    };
    sendBill(newSplitBill);
    setBill("");
    setExpense("");
    setPayBill("you");
  }

  return (
    <div>
      <form className='form-split-bill' onSubmit={handleSubmit}>
        <h2>split a bill with {friend.name}</h2>

        <label>Bill value</label>
        <input
          type='number'
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <label>Your expense</label>
        <input
          type='number'
          value={expense}
          onChange={(e) => setExpense(Number(e.target.value))}
        />

        <label>{friend.name} expense:</label>
        <input disabled value={friendExpense} />

        <label>Who is paying the bill?</label>
        <select value={payBill} onChange={(e) => setPayBill(e.target.value)}>
          <option value='you'>You</option>
          <option value='friend'>{friend.name}</option>
        </select>

        <button className='button'>Split bill</button>
      </form>
    </div>
  );
}

export default SplitBill;
