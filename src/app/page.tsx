"use client"; 

import { useEffect } from "react";
import { useRouter } from "next/navigation"; 

import { useLogout } from "@/features/auth/api/use-logout";
import { useCurrent } from "@/features/auth/api/use-current";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter(); 
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();
 
  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in"); 
    }
  }, [data]); 

  return (
    <div>
      Доступно только для авторизованных пользователей.
      <Button onClick={() => mutate()}>
        Loqout
      </Button> 
    </div>
  );
}
