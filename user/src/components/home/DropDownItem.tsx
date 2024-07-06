const DropDownItem = ({ name }: any) => {
  return (
    <select
      className="text-sm font-medium px-5 py-2 outline-none min-w-[180px] max-lg:rounded-full"
    >
      <option value="">{name}</option>
    </select>
  );
};

export default DropDownItem;
