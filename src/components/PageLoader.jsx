"use client";
import { useState, useEffect } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    // Listen to Next.js Router events
    window.addEventListener("routeChangeStart", start);
    window.addEventListener("routeChangeComplete", end);
    window.addEventListener("routeChangeError", end);

    return () => {
      window.removeEventListener("routeChangeStart", start);
      window.removeEventListener("routeChangeComplete", end);
      window.removeEventListener("routeChangeError", end);
    };
  }, []);

  return (
    loading && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="animate-spin w-10 h-10 border-t-4 border-white rounded-full"></div>
      </div>
    )
  );
}
