"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "../loading";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <div className="mb-6">
            <svg
              className="h-24 w-24 text-red-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m0 0v2m0-2h2m-2 0H9m3-3V9m0 0V7m0 2h2m-2 0H9"
              />
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path
                d="M15 9l-6 6M9 9l6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Access Denied
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            You need to be signed in to view this page
          </p>

          <div className="space-y-4">
            <button
              onClick={() => router.replace("/sign-in")}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>

            <div>
              <a
                href="/"
                className="text-indigo-600 hover:text-indigo-500 font-medium inline-flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Return to Home
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          If you believe this is an error, please contact support
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[#1D3557]">
      <Card className="w-96 p-4 bg-white">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="w-24 h-24 bg-gray-200">
            <AvatarImage
              src={session?.user?.image || ""}
              alt="Profile Picture"
            />
            <AvatarFallback>
              {session?.user?.username?.charAt(0).toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4 text-lg">
            Username: {session?.user?.username}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">
            Email: {session?.user?.email}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
