import Link from "next/link";

export default function ForgotPasswordButton() {
  return (
    <div className="mt-4 text-center">
      <Link 
        href="/auth/forgot-password" 
        className="text-sm text-blue-600 hover:text-blue-800 underline"
      >
        Forgot Password?
      </Link>
    </div>
  );
}
