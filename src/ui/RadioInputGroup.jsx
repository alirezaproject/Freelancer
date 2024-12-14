import React from "react";
import RadioInput from "./RadioInput";

const RadioInputGroup = ({ errors, register, watch, configs }) => {
  const { name, validationSchema = {}, options } = configs;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            label={label}
            value={value}
            id={value}
            name={name}
            watch={watch}
            register={register}
            validationSchema={validationSchema}
            errors={errors}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="mt-2 block flex-1 text-sm text-error">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default RadioInputGroup;
