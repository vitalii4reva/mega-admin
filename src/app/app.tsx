import React from "react";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import LogoutButton from "./components/LogoutButton/LogoutButton";

const App: React.FC = () => {
  return (
    <div>
      <SignUpForm />
      <SignInForm />
      <LogoutButton />
    </div>
  );
};

export default App;