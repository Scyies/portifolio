import React, { ButtonHTMLAttributes } from "react";

interface IButton {
  children: React.ReactNode;
}

export default function Button({ children, ...rest }: IButton & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="border-2 border-orange py-2 px-3 text-white mt-4 flex"
      {...rest}
    >
      {children}
    </button>
  );
}
