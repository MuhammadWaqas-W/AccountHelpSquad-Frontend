"use client";

import Loading from "@root/app/loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthGuard = ({ children }: any) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authToken");

    if (!isAuthenticated) {
      router.push("/");
      return;
    }

    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return <>{children}</>;
};

export default AuthGuard;
