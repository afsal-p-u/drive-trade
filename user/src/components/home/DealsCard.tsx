import React from "react";

const DealsCard = ({ image }: any) => {
  return (
    <div className="rounded-3xl overflow-hidden relative">
      <img src={image} alt="" className="w-full h-full rounded-3xl object-cover" />

      <div className="bg-[#00000056] w-full h-full absolute z-[1] top-0 lef-0"></div>

      <div className="absolute w-full bottom-0 flex items-center justify-center flex-col z-[2] px-5">
        <h3 className="text-primary text-xl font-medium">Mercedes-benz-2023</h3>

        <p className="text-primary mt-2 text-md font-normal">$37,309.00</p>

        <div className="mt-2 mb-2 border-t-[1px] border-light_gray w-full" />

        <div className="flex gap-5 mb-4">
          <div className="flex items-center flex-col gap-1">
            <p className="text-primary text-xs">Transition</p>

            <p className="text-primary text-sm font-medium">Automatic</p>
          </div>

          <div className="flex items-center flex-col gap-1">
            <p className="text-primary text-xs">Fuel</p>

            <p className="text-primary text-sm font-medium">Electric</p>
          </div>

          <div className="flex items-center flex-col gap-1">
            <p className="text-primary text-xs">Passenger</p>

            <p className="text-primary text-sm font-medium">04 Person</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsCard;
