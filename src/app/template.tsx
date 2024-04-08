import Navbar from "@/ui/shared/Navbar";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
