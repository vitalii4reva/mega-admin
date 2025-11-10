"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import Input from "../../../UI/components/Input/Input";
import Button from "../../../UI/components/Button/Button";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError("Please enter a valid email");
      return;
    }

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        setError(error.message);
        return;
      }

      if (data.user) {
        setMessage("Sign in successful! Redirecting...");
        setTimeout(() => {
          router.push('/dashboard');
        }, 1000);
      }
    } catch (error) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="p-3 border rounded max-w-sm">
      <h3 className="mb-2 font-medium">Sign In</h3>
      
      {error && (
        <div className="mb-3 p-2 border border-red-300 rounded bg-red-50">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}
      
      {message && (
        <div className="mb-3 p-2 border border-green-300 rounded bg-green-50">
          <p className="text-green-700 text-sm">{message}</p>
        </div>
      )}
      
      <Input value={email} placeholder="Email" onChange={setEmail} type="email" />
      <div className="mt-2">
        <Input value={password} type="password" placeholder="Password" onChange={setPassword} />
      </div>
      <Button 
        type="submit" 
        disabled={loading}
        className="mt-3 w-full px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
}