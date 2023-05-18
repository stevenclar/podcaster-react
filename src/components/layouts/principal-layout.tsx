import React from "react";
import { Header } from "../header/header.component";

interface PrincipalLayoutProps {
  children: React.ReactNode;
}

export default function PrincipalLayout({ children }: PrincipalLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
