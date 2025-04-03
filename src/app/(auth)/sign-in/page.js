"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { signIn } from "next-auth/react";
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

export default function SignInForm() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      identifier: data.identifier,
      password: data.password,
    });
    console.log(result);
    if (result?.error) {
      if (result.error === "CredentialsSignin") {
        toast("Login Failed", {
          description: "Incorrect username or password",
          variant: "destructive",
          action: {
            label: "Close",
          },
        });
      } else {
        toast("Error", {
          description: result.error,
          variant: "destructive",
          action: {
            label: "Close",
          },
        });
      }
    }

    if (result?.url) {
      router.replace("/profile");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
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
                  {/* <Input {...field} className={"outline-none active:outline-none"} /> */}
                  <Input type="email" id="email" placeholder="Email" className={" focus-visible:ring-0 focus:ring-0"}/>
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
                  <Input type="password" {...field} className={"focus-visible:ring-0 focus:ring-0"} placeholder="Password" />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full cursor-pointer bg-[#1D3557] text-white" type="submit" >
              Sign In
            </Button>
          </form>
        </Form>
        <Button onClick={() => signIn("google", { callbackUrl: "/" })} className={"w-full border-2 border-gray-400 cursor-pointer"}>
          <img src="https://res.cloudinary.com/sameerkhan/image/upload/v1743684720/CSS/google-icon-logo-svgrepo-com_umpyh5.svg" width={20} height={20} />
Continue With Google
        </Button>
        <div className="text-center mt-4">
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
