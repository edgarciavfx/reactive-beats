import { useState } from "react";
import SearchButton from "../SearchButton/SearchButton";

function InputBar({ setInput, btnName, placeholder }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(query);
    setQuery("");
  };

  const handleChange = ({ target }) => setQuery(target.value);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder={placeholder}
          type="text"
          name="input"
          id="input"
          value={query}
          onChange={handleChange}
        />
        <SearchButton name={btnName} />
      </form>
    </>
  );
}

export default InputBar;
