import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      className="w-96 border-black border-2 p-2.5 focus:outline-none text-black focus:bg-black focus:text-white"
      {...props}
    />
  );
};

export default Input;
