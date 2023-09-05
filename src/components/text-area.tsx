import {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      className="w-96 border-black border-2 p-2.5 focus:outline-none text-black focus:bg-black focus:text-white"
      {...props}
    />
  );
};

export default TextArea;
