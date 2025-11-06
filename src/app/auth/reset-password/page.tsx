"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Input from "../../../UI/components/Input/Input";
import Button from "../../../UI/components/Button/Button";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [hashTokens, setHashTokens] = useState<{
    accessToken: string | null;
    refreshToken: string | null;
    type: string | null;
  }>({ accessToken: null, refreshToken: null, type: null });

  useEffect(() => {
    const hash = window.location.hash;
    const hashParams = new URLSearchParams(hash.substring(1));
    
    const accessToken = hashParams.get('access_token');
    const refreshToken = hashParams.get('refresh_token');
    const type = hashParams.get('type');
    const error = hashParams.get('error');
    const errorDescription = hashParams.get('error_description');
    
    console.log('URL params:', {
      hash,
      hashParams: Object.fromEntries(hashParams.entries()),
      accessToken,
      refreshToken,
      type,
      error,
      errorDescription
    });
    
    setHashTokens({
      accessToken,
      refreshToken,
      type
    });
    
    if (error) {
      if (error === 'access_denied' && errorDescription?.includes('expired')) {
        setError("Email link has expired. Please request a new one.");
      } else {
        setError(`Error: ${errorDescription || error}`);
      }
    } else if (!accessToken || !refreshToken || type !== 'recovery') {
      setError("Invalid password reset link");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password,
          accessToken: hashTokens.accessToken,
          refreshToken: hashTokens.refreshToken
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Password changed successfully! Redirecting to login page...");
        setTimeout(() => {
          router.push('/auth');
        }, 2000);
      } else {
        setError(data.error || 'Error changing password');
      }
    } catch (error) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  if (!hashTokens.accessToken || !hashTokens.refreshToken || hashTokens.type !== 'recovery') {
    return (
      <div className="max-w-sm mx-auto pt-12">
        <div className="p-4 border border-red-300 rounded-md bg-red-50">
          <p className="text-red-700">Invalid password reset link</p>
          <Link href="/auth/forgot-password" className="text-blue-600 hover:text-blue-800 underline mt-2 block">
            Request new email
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto pt-12">
      <div className="mb-4">
        <Link 
          href="/auth" 
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          ← Back to Login
        </Link>
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border rounded-md">
        <h2 className="text-xl font-semibold mb-4">New Password</h2>
        
        {error && (
          <div className="mb-4 p-3 border border-red-300 rounded-md bg-red-50">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}
        
        {message && (
          <div className="mb-4 p-3 border border-green-300 rounded-md bg-green-50">
            <p className="text-green-700 text-sm">{message}</p>
          </div>
        )}

        <div className="mb-3">
          <Input 
            type="password"
            value={password}
            placeholder="New Password"
            onChange={setPassword}
          />
        </div>
        
        <div className="mb-4">
          <Input 
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={setConfirmPassword}
          />
        </div>

        <Button 
          type="submit" 
          disabled={loading}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
        >
          {loading ? "Saving..." : "Change Password"}
        </Button>
      </form>
    </div>
  );
}
