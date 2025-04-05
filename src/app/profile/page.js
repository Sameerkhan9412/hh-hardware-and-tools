"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Loading from "../loading";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const ProfilePage = () => {
  const { data: session, status, update } = useSession(); // ✅ Added `update`
  const router = useRouter();
  const [profileImg, setProfileImg] = useState(session?.user?.image);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  if (status === "loading") return <Loading />;

  if (status === "unauthenticated") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Access Denied</h1>
          <p className="text-lg text-gray-600 mb-8">You need to be signed in to view this page</p>
          <Button onClick={() => router.replace("/sign-in")} className="bg-indigo-600 hover:bg-indigo-700">
            Sign In
          </Button>
        </div>
      </div>
    );
  }

  const handleSubmitReview = async () => {
    if (!review.trim()) {
      toast.error("Please write a review before submitting!");
      return;
    }

    const data = {
      userId: session?.user?._id,
      username: session?.user?.username,
      email: session?.user?.email,
      review,
    };

    setIsSubmitting(true);
    try {
      await axios.post("/api/reviews", data);
      toast.success("Review submitted successfully");
      setReview("");
      setIsReviewOpen(false);
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setImageFile(file);
  };

  const uploadImage = async () => {
    if (!imageFile) return;
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "profile_upload"); // ✅ your Cloudinary preset

      const cloudRes = await axios.post(
        "https://api.cloudinary.com/v1_1/sameerkhan/image/upload",
        formData
      );

      const imageUrl = cloudRes.data.secure_url;

      const res = await axios.post("/api/user/update-image", {
        userId: session?.user?._id,
        imageUrl,
      });

      if (res.data.success) {
        toast.success("Profile image updated!");
        setProfileImg(imageUrl);

        // ✅ Update session data
        await update({
          ...session,
          user: {
            ...session.user,
            image: imageUrl,
          },
        });

        // Optional: router.refresh();
      } else {
        toast.error("Image update failed");
      }
    } catch (err) {
      console.error("Upload failed", err);
      toast.error("Image upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#1D3557]">
      <Card className="w-96 p-4 bg-white shadow-lg rounded-lg">
        <CardHeader className="flex flex-col items-center">
          <Avatar key={profileImg} className="w-24 h-24 bg-gray-200">
            <AvatarImage src={profileImg} alt="Profile Picture" />
            <AvatarFallback>{session?.user?.username?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4 text-lg font-semibold">{session?.user?.username}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600">{session?.user?.email}</p>

          {/* Upload Section */}
          <div className="mt-4 space-y-2">
            <input type="file" onChange={handleImageChange} accept="image/*" />
            <Button
              onClick={uploadImage}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              disabled={!imageFile || isUploading}
            >
              {isUploading ? "Uploading..." : "Upload Image"}
            </Button>
          </div>

          <div className="mt-4">
            <Button onClick={() => setIsReviewOpen(true)} className="bg-blue-500 hover:bg-blue-600 text-white">
              Write a Review
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Review Modal */}
      <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
        <DialogContent className="bg-blue-500 p-6 rounded-lg shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-white text-lg font-semibold">Write a Review</DialogTitle>
          </DialogHeader>
          <textarea
            className="w-full p-2 border border-white rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            rows={4}
            placeholder="Write your review here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            disabled={isSubmitting}
          ></textarea>
          <div className="flex justify-end mt-4">
            <Button
              onClick={handleSubmitReview}
              className="bg-gray-700 text-white hover:bg-gray-500 transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfilePage;
