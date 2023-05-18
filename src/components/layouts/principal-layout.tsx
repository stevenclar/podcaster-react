import React from "react";
import { Header } from "../header/header.component";

interface PrincipalLayoutProps {
  children: React.ReactNode;
}

export default function PrincipalLayout({ children }: PrincipalLayoutProps) {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="container mx-auto pb-10">{children}</main>
    </div>
  );
}
