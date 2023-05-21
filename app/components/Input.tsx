import { FC } from "react";

interface InputProps {
  id: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  label: string;
  inputType?: string;
}

const Input = (props: InputProps) => {
  const {
    id,
    handleInputChange,
    inputValue,
    label,
    inputType = "text",
  } = props;

  return (
    <div className="relative">
      <input
        onChange={handleInputChange}
        value={inputValue}
        id={id}
        type={inputType}
        className="block
         rounded-md 
         px-6
          pt-6 
          pb-1 
          w-full 
          text-base
           text-white 
           bg-indigo-700 
           appearance-none 
           focus:outline-none  
           focus:ring-0 
           peer"
        placeholder=" "
      />
      <label
        className="
        absolute 
        text-zinc-300
        duration-150 
        transform
        -translate-y-3
        scale-75
        top-4
        z-10
        origin-[0]
        left-6
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-3 
        "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
