"use client";
import React from "react";

type Props = {
  value?: string;
  placeholder?: string;
  onChange: (v: string) => void;
  type?: string;
  onChangeCapture?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function InputField({ value = "", placeholder = "", onChange }: Props) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-2 py-1 border rounded"
    />
  );
}