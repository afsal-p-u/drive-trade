import React from "react";

const UsedCarCardHome = ({ image }: any) => {
  return (
    <div className="px-3 pt-3 pb-7 bg-primary shadow-md rounded-3xl overflow-hidden">
      <div className="rounded-t-3xl overflow-hidden">
        <img src={image} alt="" className="" />
      </div>

      <div className="px-3 py-3 bg-third rounded-b-3xl overflow-hidden">
        <p className="font-medium text-lg">Mercedes-benz</p>

        <div className="mt-1 flex gap-2 items-baseline">
          <p className="font-medium text-sm">$27,555.00</p>

          <p className="line-through text-xs">$30,000.00</p>
        </div>

        <div className="border-t-[2px] w-full my-1"></div>

        <div className="flex gap-3 mt-2 mb-2">
          <p className="px-2 py-1 bg-primary rounded-md font-medium text-sm">
            2023
          </p>

          <p className="px-2 py-1 rounded-md font-medium text-sm">Automatic</p>

          <p className="px-2 py-1 rounded-md font-medium text-sm">Petrol</p>
        </div>
      </div>
    </div>
  );
};

export default UsedCarCardHome;
