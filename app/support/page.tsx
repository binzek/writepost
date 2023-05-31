"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SupportPage: () => void = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/support/give");
  }, []);
};

export default SupportPage;
