import Link from "next/link";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import ForgotPasswordButton from "../components/ForgotPasswordButton";

export default function AuthPage({ searchParams }: { searchParams: { tab?: string } }) {
  const isSignIn = searchParams.tab !== 'signup';

  return (
    <div className="max-w-sm mx-auto pt-12">
      <div className="flex gap-2 justify-center mb-5">
        <Link 
          href="/auth?tab=signin"
          className={`px-4 py-2 rounded-md transition-colors ${
            isSignIn 
              ? "bg-blue-600 text-white font-semibold" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Sign In
        </Link>
        <Link 
          href="/auth?tab=signup"
          className={`px-4 py-2 rounded-md transition-colors ${
            !isSignIn 
              ? "bg-green-600 text-white font-semibold" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Sign Up
        </Link>
      </div>

      {isSignIn ? <SignInForm /> : <SignUpForm />}
      
      <ForgotPasswordButton />
    </div>
  );
}