import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addItem = () => {
    if (!name || !price) return;
    setItems([...items, { name, price: Number(price) }]);
    setName("");
    setPrice("");
  };

  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h1>iCOOL POS 🔥</h1>

      <input
        placeholder="Item"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="number"
      />

      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((i, idx) => (
          <li key={idx}>
            {i.name} - ${i.price}
          </li>
        ))}
      </ul>

      <h2>Total: ${total}</h2>
    </div>
  );
}
