import React from "react";

function RadioInput({
  label,
  value,
  register,
  name,
  id,
  validationSchema,
  errors,
  watch,
}) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-700">
      <label htmlFor={id}>{label}</label>
      <input
        {...register(name, validationSchema)}
        className="h-4 w-4 cursor-pointer accent-red-500"
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={watch(name) === value}
      />
     
    </div>
  );
}

export default RadioInput;
