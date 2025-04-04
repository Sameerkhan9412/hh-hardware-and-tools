"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react"; // ✅ Import Loader
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpSchema } from "@/schemas/signUpSchema";

export default function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await axios.post("/api/sign-up", data);

      toast.success("Account created! Redirecting to verification...");
      
      // ✅ Redirect to verification page
      router.replace(`/verify/${data.email}`);

      // ✅ Reset form fields after successful signup
      form.reset();
    } catch (error) {
      console.error("Sign-up error:", error);

      let errorMessage =
        error.response?.data.message || "Sign-up failed. Try again.";
      toast.error("Error", { description: errorMessage });

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-tight lg:text-3xl mb-2 text-gray-500">
            Join HHHardware & Tools
          </h1>
        </div>

        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            onKeyDown={(e) => e.key === "Enter" && onSubmit()}
            className="space-y-6"
          >
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <Input 
                    {...field} 
                    className="focus-visible:ring-0 focus:ring-0" 
                    placeholder="Username"
                    autoFocus // ✅ Auto-focus on username
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input
                    {...field}
                    className="focus-visible:ring-0 focus:ring-0"
                    placeholder="Email"
                  />
                  <p className="text-muted text-gray-400 text-sm">
                    We will send you a verification code
                  </p>
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
              type="submit" 
              className="w-full cursor-pointer bg-[#1D3557] text-white flex justify-center items-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting && <Loader2 className="animate-spin w-5 h-5" />} 
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>
        </Form>

        <div className="text-center mt-4">
          <p>
            Already a member?{" "}
            <Link href="/sign-in" className="text-blue-600 hover:text-blue-800">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
