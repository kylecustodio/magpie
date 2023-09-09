import { PropsWithChildren } from "react";

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="border-black border-2 p-2 bg-white text-black">
      {children}
    </div>
  );
};

export default Card;
