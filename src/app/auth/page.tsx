import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import ForgotPasswordButton from "../components/ForgotPasswordButton";
import TabButton from "../components/TabButton";

export default function AuthPage({ searchParams }: { searchParams: { tab?: string } }) {
  const isSignIn = searchParams.tab !== 'signup';

  return (
    <div className="max-w-sm mx-auto pt-12">
      <div className="flex gap-2 justify-center mb-5">
        <TabButton 
          href="/auth?tab=signin"
          isActive={isSignIn}
          activeColor="blue"
        >
          Sign In
        </TabButton>
        <TabButton 
          href="/auth?tab=signup"
          isActive={!isSignIn}
          activeColor="green"
        >
          Sign Up
        </TabButton>
      </div>

      {isSignIn ? <SignInForm /> : <SignUpForm />}
      
      <ForgotPasswordButton />
    </div>
  );
}