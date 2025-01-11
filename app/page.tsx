"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 py-6 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My App</h1>
          <div className="flex gap-4">
            <SignedOut>
              <Link
                href="/sign-in"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition"
              >
                Sign Up
              </Link>
            </SignedOut>
            <SignedIn>
              <Link
                href="/dashboard"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
              >
                Dashboard
              </Link>
            </SignedIn>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl sm:text-6xl font-bold mb-6">
          Welcome to My App
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Build modern and secure web applications with ease.
        </p>
        <SignedOut>
          <div className="flex gap-4">
            <Link
              href="/sign-up"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
            >
              Get Started
            </Link>
            <Link
              href="/sign-in"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition"
            >
              Learn More
            </Link>
          </div>
        </SignedOut>
        <SignedIn>
          <p className="text-lg text-gray-400 mt-4">
            You&apos;re signed in. Go to your{" "}
            <Link
              href="/dashboard"
              className="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              Dashboard
            </Link>
            .
          </p>
        </SignedIn>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} My App. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              Twitter
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
