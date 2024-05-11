type InputProps = {
  type: string;
  placeholder: string;
  name: string;
  onchange?: any 
};

const Input = ({ type, placeholder, name, onchange }: InputProps) => {
  return (
    <div className="mt-3">
      <input
        className="px-5 py-2 text-sm w-full border-[1px] outline-[1px] outline-red-500 min-w-[300px]"
        type={type}
        placeholder={placeholder}
        name={name}
        required
        onChange={onchange}
      />
    </div>
  );
};

export default Input;
