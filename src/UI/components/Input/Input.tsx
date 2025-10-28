import React from "react";

type Props = {
  value?: string;
  placeholder?: string;
  onChange: (v: string) => void;
  type?: string;
  onChangeCapture?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Input({ value = "", placeholder = "", onChange, type = "text" }: Props) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
    />
  );
}