"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { verifySchema } from "@/schemas/verifySchema";
import { OTPInput } from "input-otp";
import { InputOTPSlot, InputOTPGroup, InputOTPSeparator } from "@/components/ui/input-otp";
import { toast } from "sonner";
import { Loader2 } from "lucide-react"; // ✅ Import Loader Icon
import { useState } from "react";

export default function VerifyAccount() {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false); // ✅ Redirect ke time loader
  const router = useRouter();
  const params = useParams();

  const form = useForm({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (data) => {
    setIsVerifying(true);
    try {
      const response = await axios.post("/api/verify-otp", {
        email: params.email,
        code: data.code,
      });

      if (response.data.success) {
        toast.success("Verification successful! Redirecting...");

        setIsRedirecting(true); // ✅ Redirect hone se pehle loader enable karega
        setTimeout(() => router.replace("/sign-in"), 2000); // ✅ Thoda delay for better UX
      }
    } catch (error) {
      toast.error("Verification Failed", {
        description:
          error.response?.data.message ?? "Invalid OTP. Please try again.",
      });

      form.reset(); // ✅ Reset OTP field on incorrect attempt
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-tight lg:text-3xl mb-2 text-gray-500">
            Verify Your Account
          </h1>
          <p className="mb-4 text-gray-600">
            Enter the verification code sent to <strong>{params.email}</strong>
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="code"
              control={form.control}
              render={({ field }) => (
                <FormItem className="text-center">
                  <OTPInput
                    maxLength={6}
                    value={field.value}
                    onChange={field.onChange}
                    autoFocus
                    containerClassName="flex justify-center gap-2"
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} className="focus:ring-0" />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </OTPInput>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-[#1D3557] text-white flex justify-center items-center gap-2"
              disabled={isVerifying || isRedirecting} // ✅ Redirect hone tak disable
            >
              {(isVerifying || isRedirecting) && (
                <Loader2 className="animate-spin w-5 h-5" />
              )}
              {isRedirecting ? "Redirecting..." : isVerifying ? "Verifying..." : "Verify"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
