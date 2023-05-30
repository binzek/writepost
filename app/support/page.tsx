"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Support() {
  const router = useRouter();
  useEffect(() => {
    router.push("/support/give");
  }, []);
}

export default Support;
