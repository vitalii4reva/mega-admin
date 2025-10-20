"use client";
import React, { useState } from "react";
import InputField from "../Input/InputField";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("sign up", { username, password });
  };

  return (
    <form onSubmit={submit} className="p-3 border rounded max-w-sm">
      <h3 className="mb-2 font-medium">Sign Up</h3>
      <InputField value={username} placeholder="Username" onChange={setUsername} />
      <div className="mt-2">
        <InputField value={password} placeholder="Password" onChange={setPassword} />
      </div>
      <button type="submit" className="mt-3 w-full px-3 py-1 bg-green-600 text-white rounded">
        Sign Up
      </button>
    </form>
  );
}