"use client";
import React, { useState } from "react";
import Input from "../../../UI/components/Input/Input";
import Button from "../../../UI/components/Button/Button";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError("Введіть коректний email");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setEmail(""); // Очищуємо поле
      } else {
        setError(data.error || 'Помилка при відправці');
      }
    } catch (error) {
      setError('Помилка мережі');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="p-3 border rounded max-w-sm">
      <h3 className="mb-2 font-medium">Forgot Password</h3>
      
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
      <Button 
        type="submit" 
        disabled={loading}
        className="mt-3 w-full px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-medium disabled:opacity-50"
      >
        {loading ? "Відправка..." : "Send Reset Link"}
      </Button>
    </form>
  );
}
