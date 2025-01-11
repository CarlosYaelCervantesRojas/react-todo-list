import PropTypes from 'prop-types';
import { useState } from "react";


export function FormItems({ onSubmit }) {

  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>

        <label htmlFor="item">
          New Item
        </label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>

      <button>Add</button>
    </form>
  );
}

FormItems.propTypes = {
  onSubmit: PropTypes.func.isRequired
}