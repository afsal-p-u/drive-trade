const CustomInput = ({ icon: Icon, placeholder, required, onchange, name, type }: any) => {
  return (
    <div className="flex px-4 py-2 items-center gap-2 border-[1px] w-full rounded-md">
      <Icon className="text-xl max-sm:text-lg" />

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        onChange={onchange}
        className="outline-none bg-transparent text-sm max-sm:text-xs w-full"
      />
    </div>
  );
};

export default CustomInput;
