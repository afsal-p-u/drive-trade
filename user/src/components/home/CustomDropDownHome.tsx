
const CustomDropDownHome = ({ name }: any) => {
  return (
    <select
      name=""
      id=""
      className="px-7 py-3 border-[1px] rounded-md text-sm cursor-pointer font-medium outline-secondary min-w-[180px]"
    >
      <option value="" className="cursor-pointer">
        {name}
      </option>
    </select>
  );
};

export default CustomDropDownHome;
