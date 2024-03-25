type InputProps = {
    type: string,
    placeholder: string,
    name: string,
    onchange: () => void
}

const Input = ({ type, placeholder, onchange, name }: InputProps) => {
    return (
        <div className="mt-2">
            <input className="px-5 py-2 text-sm w-full border-none" type={type} placeholder={placeholder} onChange={onchange} name={name} />
        </div>
    )
}

export default Input