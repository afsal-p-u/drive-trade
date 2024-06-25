const CustomInput = ({ icon: Icon, placeholder }: any) => {
  return (
    <div className="flex px-4 py-2 items-center gap-2 border-[1px] w-full rounded-md">
      <Icon className="text-xl" />

      <input
        type="text"
        placeholder={placeholder}
        className="outline-none bg-transparent text-sm"
      />
    </div>
  );
};

export default CustomInput;
