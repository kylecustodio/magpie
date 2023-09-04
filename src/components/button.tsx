import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = (props: ButtonProps, children: React.ReactNode) => {
  return (
    <button
      className="text-black h-12 border-black border-2 p-2.5 bg-white hover:bg-black hover:text-white active:bg-yellow-300 active:text-black"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
