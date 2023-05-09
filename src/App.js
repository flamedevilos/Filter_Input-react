//import logo from "./logo.svg";
import { useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const inputRef = useRef();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filterSearch = useMemo(() => {
    return items.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = inputRef.current.value;
    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });

    inputRef.current.value = "";
  };
  return (
    <>
      <div className="App">
        <h1>Search filter!</h1>
        <br />
        <div>
          <label>Search: </label>
          <input type="text" value={query} onChange={handleChange} />
        </div>
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <label>Insert Item: </label>
            <input type="text" ref={inputRef} />
            <button type="submit">Add</button>
          </div>
        </form>

        <h4>Items:</h4>
        {filterSearch.map((input) => (
          <div>{input}</div>
        ))}
      </div>
    </>
  );
}

export default App;
