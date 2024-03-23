import { ChangeEvent } from "react"

type InputProps = {
    type: string,
    placeholder: string,
    name: string,
    onchange: (e: ChangeEvent<HTMLInputElement>) => void 
}

const Input = ({ type, placeholder, name, onchange } : InputProps) => {
  return (
    <div className="mt-3">
        <input
            type={type}
            placeholder={placeholder}
            className="w-full border-[1px] px-5 py-2 outline-red-500 bg-transparent"
            name={name}
            onChange={onchange}
        />
    </div>
  )
}

export default Input
