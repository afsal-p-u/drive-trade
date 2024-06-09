import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const FilterSearch = ({ item, value }: any) => {
  const [view, setView] = useState(false);

  return (
    <div>
      <div
        className="flex border-b-[1px] py-2 justify-between cursor-pointer items-center"
        onClick={() => setView((prev) => !prev)}
      >
        <h4 className="text-sm font-medium">{item}</h4>

        {view ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>

      {view && (
        <div className="py-2 flex flex-col gap-2">
          <div className="flex flex-col gap-2 justify-center">
            {value?.map((item: any, i: any) => (
              <div key={i} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                />

                <label
                  htmlFor=""
                  className="text-xs text-light_gray cursor-pointer"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSearch;
