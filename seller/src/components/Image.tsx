import React from "react";

const Image = ({ label, name, onchange }: { label: string, name: string, onchange?: any }) => {
  return (
    <div>
      <div className="flex flex-col border-[1px] w-[300px] text-sm gap-2 px-2 py-2 rounded-md hover:border-red-500">
        <label htmlFor="">{label}</label>
        <input type="file" name={name}  required={false} onChange={onchange}/>
      </div>
    </div>
  );
};

export default Image;
