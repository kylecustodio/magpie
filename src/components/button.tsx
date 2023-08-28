import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = (props: ButtonProps, children: React.ReactNode) => {
  return (
    <button
      className="text-black h-12 border-black border-2 p-2.5 bg-cyan-300 hover:bg-cyan-400 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-cyan-300"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
