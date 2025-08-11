import React from "react";
import { Outlet } from "react-router";

const RootLayout: React.FC = () => {
  return (
    <main className="container w-full h-dvh">
      <Outlet />
    </main>
  );
};

export default RootLayout;
