import React, { useState } from "react";
// import { Page as OriginalPage } from "@swarmakit/react/src/stories/Page";
import { Header } from "@swarmakit/react/src/stories/Header"; 

type User = {
  name: string;
};

const CustomPage: React.FC = () => {
  const [user, setUser] = useState<User | undefined>();

  const handleLogin = () => {
    setUser({ name: "Gaurav kumar" });
    console.log("User logged in!");
  };

  const handleLogout = () => {
    setUser(undefined);
    console.log("User logged out!");
  };

  const handleCreateAccount = () => {
    setUser({ name: "Gaurav kumar" });
    console.log("Account created!");
  };

  return (
    <article>
      {/* Replace the Header in the Page with your customized Header */}
      <Header
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onCreateAccount={handleCreateAccount}
      />
      {/* <OriginalPage /> */}

    </article>
  );
};

export default CustomPage;
