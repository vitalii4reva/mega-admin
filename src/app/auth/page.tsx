"use client";

import { useState } from "react";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div style={{ maxWidth: "400px", margin: "auto", paddingTop: "50px" }}>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "20px" }}>
        <button onClick={() => setIsSignIn(true)} style={{ fontWeight: isSignIn ? "bold" : "normal" }}>
          Sign In
        </button>
        <button onClick={() => setIsSignIn(false)} style={{ fontWeight: !isSignIn ? "bold" : "normal" }}>
          Sign Up
        </button>
      </div>

      {isSignIn ? <SignInForm /> : <SignUpForm />}
    </div>
  );
}