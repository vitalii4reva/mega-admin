"use client";
import React, { useState } from "react";
import Input from "../../../UI/components/Input/Input";
import Button from "../../../UI/components/Button/Button";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("forgot password", { email });
  };

  return (
    <form onSubmit={submit} className="p-3 border rounded max-w-sm">
      <h3 className="mb-2 font-medium">Forgot Password</h3>
      <Input value={email} placeholder="Email" onChange={setEmail} type="email" />
      <Button 
        type="submit" 
        className="mt-3 w-full px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-medium"
      >
        Send Reset Link
      </Button>
    </form>
  );
}
