"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./shad/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./shad/ui/card";

export const RedirectToLoginCard = () => {
  const router = useRouter();
  const pathname = usePathname();
  const redirectToLogin = () => {
    localStorage.setItem("loginRedirectUrl", pathname);
    router.push("/auth");
  };
  return (
    <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg w-1/4">
      <CardHeader>
        <CardTitle>Login to access the content</CardTitle>
        <CardDescription>You'll be redirected back to this page after login</CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <Button className="w-1/2 mt-4" onClick={redirectToLogin}>
          Go to Login Page
        </Button>
      </CardContent>
    </Card>
  );
};
