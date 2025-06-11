import { useState } from "react";

function InputBar({ setInput, placeholder, clear }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(query);
    clear && setQuery("");
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
      </form>
    </>
  );
}

export default InputBar;
