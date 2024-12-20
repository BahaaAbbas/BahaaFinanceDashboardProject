import React, { useState } from "react";


const StockJournal = () => {
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({ symbol: "", price: "", shares: "", type: "buy" });



  const addTransaction = () => {
    if (!form.symbol || !form.price || !form.shares) {
      alert("Please fill out all fields.");
      return;
    }

    const newTransaction = {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, //Combines timestamp and random string
    date: new Date().toLocaleString(),
      ...form,
      price: parseFloat(form.price),
      shares: parseInt(form.shares, 10),
    };

    setTransactions((prev) => [...prev, newTransaction]);
    setForm({ symbol: "", price: "", shares: "", type: "buy" });
  };


  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((transaction) => transaction.id !== id));
  };


  const calculateNetProfit = () => {
    if (transactions.length === 0) return "0.00"; // Handle empty transactions
    return transactions.reduce((total, transaction) => {
      const impact = transaction.type === "buy" ? -1 : 1;
      return total + impact * transaction.price * transaction.shares;
    }, 0).toFixed(2);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Stock Journal</h2>

      
      <div className="mb-6 bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-bold mb-4">Log Transaction</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Stock Symbol (e.g., AAPL)"
            className="p-2 border rounded"
            value={form.symbol}
            onChange={(e) => setForm({ ...form, symbol: e.target.value.toUpperCase() })}
          />
          <input
            type="number"
            placeholder="Price"
            className="p-2 border rounded"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Shares"
            className="p-2 border rounded"
            value={form.shares}
            onChange={(e) => setForm({ ...form, shares: e.target.value })}
          />
          <select
            className="p-2 border rounded"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={addTransaction}
        >
          Add Transaction
        </button>
      </div>

      
      <div className="mb-6 bg-gray-100 p-4 rounded shadow-md">
        <h3 className="text-lg font-bold mb-4">Summary</h3>
        <p>Total Transactions: {transactions.length}</p>
        <p>Net Profit/Loss: ${calculateNetProfit()}</p>
      </div>

     
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-bold mb-4">Transaction History</h3>
        {transactions.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Date</th>
                <th className="border p-2">Symbol</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Shares</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="border p-2">{transaction.date}</td>
                  <td className="border p-2">{transaction.symbol}</td>
                  <td className="border p-2">${transaction.price.toFixed(2)}</td>
                  <td className="border p-2">{transaction.shares}</td>
                  <td className="border p-2 capitalize">{transaction.type}</td>
                  <td className="border p-2 text-center">
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => deleteTransaction(transaction.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">No transactions logged.</p>
        )}
      </div>
    </div>
  );
};

export default StockJournal;