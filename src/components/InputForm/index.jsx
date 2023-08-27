const InputForm = ({type,label,name,placeholder,onChange}) => {
    return (
        <div className="flex flex-col w-full">
            {label &&
                (
                    <label htmlFor={name}
                           className="text-zinc-500 font-semibold">
                        {label}
                    </label>
                )
            }
            <input type={type}
                   id={name}
                   className="focus:outline-0 border rounded-md w-full text-md px-2 py-1.5"
                   name={name}
                   placeholder={placeholder}
                   onChange={onChange}/>
        </div>
    )
}

export default InputForm;