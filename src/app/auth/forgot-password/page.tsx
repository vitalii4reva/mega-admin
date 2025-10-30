import Link from "next/link";
import ForgotPasswordForm from "../../components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="max-w-sm mx-auto pt-12">
      <div className="mb-4">
        <Link 
          href="/auth" 
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          Back to Login
        </Link>
      </div>
      
      <ForgotPasswordForm />
    </div>
  );
}
