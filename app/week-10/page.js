"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex min-h-full flex-col justify-center items-center gap-10 px-6 py-12 lg:px-8">
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
        {user ? `Welcome, ${user.email}` : "Please Sign In"}
        {console.log(user)}
      </h2>
      {user && <Link href="/week-10/shopping-list">Go to Shopping List</Link>}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={user ? firebaseSignOut : gitHubSignIn}
      >
        {user ? "Sign out" : "Sign in with GitHub"}
      </button>
    </div>
  );
}
