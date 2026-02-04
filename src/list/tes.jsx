import { useState } from "react";

export default function Task() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();

    // update array TANPA mutate
    setItems([...items, item]);
    setItem("");
  }

  return (
    <div>
      <h1>Create Task</h1>
      <form>
        <input value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </form>

      <h1>List Tasks</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
