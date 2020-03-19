import React from "react";

export default function SearchBox({ onChange }) {
  return (
    <div className="pa2">
      <input
        onChange={onChange}
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
      />
    </div>
  );
}
