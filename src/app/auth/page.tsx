import { useState } from "react";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="max-w-sm mx-auto pt-12">
      <div className="flex gap-2 justify-center mb-5">
        <button 
          onClick={() => setIsSignIn(true)} 
          className={`px-4 py-2 rounded-md transition-colors ${
            isSignIn 
              ? "bg-blue-600 text-white font-semibold" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Sign In
        </button>
        <button 
          onClick={() => setIsSignIn(false)} 
          className={`px-4 py-2 rounded-md transition-colors ${
            !isSignIn 
              ? "bg-green-600 text-white font-semibold" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Sign Up
        </button>
      </div>

      {isSignIn ? <SignInForm /> : <SignUpForm />}
    </div>
  );
}