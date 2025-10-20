import React from "react";
import SignIn from "../UI/components/SignIn";
import SignUp from "../UI/components/SignUp";
import LogoutButton from "../UI/components/Button/LogoutButton";

const App: React.FC = () => {
  return (
    <div>
      <SignUp />
      <SignIn />
      <LogoutButton />
    </div>
  );
};

export default App;