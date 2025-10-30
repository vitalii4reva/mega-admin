"use client";
import React, { useState } from "react";
import Input from "../../../UI/components/Input/Input";
import Button from "../../../UI/components/Button/Button";

export default function SignInForm() {
  const [u, setU] = useState("");
  const [p, setP] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("sign in", { u, p });
  };

  return (
    <form onSubmit={submit} className="p-3 border rounded max-w-sm">
      <h3 className="mb-2 font-medium">Sign In</h3>
      <Input value={u} placeholder="Username" onChange={setU} />
      <div className="mt-2">
        <Input value={p} type="password" placeholder="Password" onChange={setP} onChangeCapture={() => {}} />
      </div>
      <Button 
        type="submit" 
        className="mt-3 w-full px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
      >
        Sign In
      </Button>
    </form>
  );
}