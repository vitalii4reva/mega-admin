"use client";
import React, { useState } from "react";
import Input from "../../../UI/components/Input/Input";
import Button from "../../../UI/components/Button/Button";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("sign up", { username, password });
  };

  return (
    <form onSubmit={submit} className="p-3 border rounded max-w-sm">
      <h3 className="mb-2 font-medium">Sign Up</h3>
      <Input value={username} placeholder="Username" onChange={setUsername} />
      <div className="mt-2">
        <Input value={password} placeholder="Password" onChange={setPassword} />
      </div>
      <Button 
        type="submit" 
        className="mt-3 w-full px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
      >
        Sign Up
      </Button>
    </form>
  );
}