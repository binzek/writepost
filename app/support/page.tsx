"use client";

// Library imports
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SupportPage: () => void = () => {
  const router = useRouter();

  // Redirect to /support/give when page loads
  useEffect(() => {
    router.push("/support/give");
  }, []);
};

export default SupportPage;
