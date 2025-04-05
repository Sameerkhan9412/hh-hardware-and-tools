"use client";

import { useEffect } from "react"; // ✅ Required for useEffect
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react"; // ✅ useSession added
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInSchema } from "@/schemas/signInSchema";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function SignInForm() {
  const router = useRouter();
  const { data: session, status } = useSession(); // ✅ 1. Hook
  const form = useForm({                         // ✅ 2. Hook
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/profile");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-800">
        <p className="text-white">Checking authentication...</p>
      </div>
    );
  }

  const onSubmit = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      identifier: data.identifier,
      password: data.password,
    });

    if (result?.error) {
      toast.error("Invalid Credentials", {
        description: "Please check your email and password.",
        action: { label: "Retry" },
      });
      return;
    }

    if (result?.url) {
      toast.success("Login Successful", {
        description: "Redirecting to your profile...",
      });
      router.replace("/profile");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-tight lg:text-3xl mb-2 text-gray-500">
            Welcome Back to HHHardware & Tools
          </h1>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="identifier"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input
                    {...field}
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="focus-visible:ring-0 focus:ring-0"
                    autoFocus
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    {...field}
                    className="focus-visible:ring-0 focus:ring-0"
                    placeholder="Password"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full cursor-pointer bg-[#1D3557] text-white flex justify-center items-center gap-2"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting && (
                <Loader2 className="animate-spin w-5 h-5" />
              )}
              {form.formState.isSubmitting ? "Signing In..." : "Sign In"}
            </Button>
          </form>
        </Form>
        <div className="text-center font-bold line-clamp-1">OR</div>
        <Button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full border-2 border-gray-400 cursor-pointer flex items-center gap-2"
        >
          <img
            src="https://res.cloudinary.com/sameerkhan/image/upload/v1743684720/CSS/google-icon-logo-svgrepo-com_umpyh5.svg"
            width={20}
            height={20}
            alt="Google Logo"
          />
          Continue With Google
        </Button>
        <div className="text-center mt-2">
          <p>
            Not a member yet?{" "}
            <Link href="/sign-up" className="text-blue-600 hover:text-blue-800">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
