import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      className="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-yellow-200 text-black active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
      {...props}
    />
  );
};

export default Input;
