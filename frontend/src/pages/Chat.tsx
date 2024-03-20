import React from "react";
import { GoPlusCircle } from "react-icons/go";
import { IoSendSharp } from "react-icons/io5";

const Chat = () => {
  return (
    <div className="px-[100px] pt-5 min-h-[100vh]">
      <div className="w-full flex gap-10">
        <div className="basis-1/3 flex flex-col">
          <div className="px-5 py-2 flex gap-3 items-center border-[1px] shadow-sm  cursor-pointer rounded-md">
            <div className="w-[35px] h-[35px] bg-blue-500 rounded-full">
              <img src="" alt="" />
            </div>
            <div className="">
              <h3 className="text-sm font-medium">Arawind T</h3>
              <p className="text-xs">I'm not intrested</p>
            </div>

            <div
              className="w-[20px] h-[20px] text-xs flex items-center justify-center text-white rounded-full bg-green-500
              ms-5"
            >
              1
            </div>
          </div>
        </div>

        <div className="basis-2/3 border-[1px] rounded-md">
          <div className="border-b-[1px] py-3 px-4">
            <h3 className="text-sm font-medium">Arawind T</h3>
          </div>

          <div className="px-4 flex flex-col min-h-[60vh]">
            <div className="flex flex-start">
              <div className="flex gap-3 items-start mt-3 basis-1/2 ">
                <div className="min-w-[30px] w-[30px] h-[30px] bg-gray-200 rounded-full"></div>
                <div className="bg-[#eee] px-3 py-2 rounded-md">
                  <p className="text-sm">
                    this car is available now,, please reply as soon as
                    possible, urgent
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex gap-3 items-start mt-3 basis-1/2 ">
                <div className="bg-slate-300 px-3 py-2 rounded-md">
                  <p className="text-sm">
                    No it is not available, it already sold
                  </p>
                </div>
                <div className="min-w-[30px] w-[30px] h-[30px] bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* message control */}
          <div className="px-4 flex items-center pb-2 gap-3">
            <GoPlusCircle className="cursor-pointer text-xl" />
            <div className="border-[1px] w-full py-1 rounded-md px-2">
              <input type="search" className="border-none text-sm outline-none w-full" name="" id="" />
            </div>
            <IoSendSharp className="cursor-pointer text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
