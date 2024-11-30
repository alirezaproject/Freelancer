import React from "react";

function RadioInput({ label, value, onChange, name, id, checked }) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-700">
      <label htmlFor={id}>{label}</label>
      <input
        className="h-4 w-4 cursor-pointer accent-red-500"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
    </div>
  );
}

export default RadioInput;
