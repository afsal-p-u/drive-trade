import React from "react";

type CustomInputProps = {
    label?: string,
    name: string,
    type: string,
    placeholder?: string,
    customStyles?: string,
    required?: boolean
}

const CustomInput = ({ label, name, type, placeholder, customStyles, required }: CustomInputProps) => {
  return (
    <div className="flex gap-1 flex-col">
      <label htmlFor="" className="text-sm text-gray-500">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
        className="px-7 py-2 text-sm outline-none bg-transparent border-[1px] border-gray-100/10 rounded-sm text-white
        focus:border-white"
      />
    </div>
  );
};

export default CustomInput;
