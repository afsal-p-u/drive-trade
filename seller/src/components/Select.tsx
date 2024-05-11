import React from "react";

type SelectProps = {
  name: string;
  localName: string,
  items: any;
  onchange?: any
};

const Select = ({ name, items, localName, onchange }: SelectProps) => {
  return (
    <select
      required
      name={name}
      className="min-w-[300px] border-[1px] focus:border-red-500 outline-none text-sm rounded-md px-2 py-2"
      onChange={onchange}
    >
      <option value={""}>{localName}</option>
      {items.map((item: any, i: number) => (
        <option value={item} key={i}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
