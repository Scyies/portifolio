import React, { InputHTMLAttributes } from "react";

export default function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className="px-3 py-2 my-2 bg-gray outline-none border border-white w-full" {...props} />
  );
}
