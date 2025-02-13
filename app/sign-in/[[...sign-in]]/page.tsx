"use client";

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-6">
      <SignIn
        
      />
    </div>
  );
}
