import Link from "next/link";
import { Button } from ".";
import { User } from "@repo/store";
import { auth } from "@repo/common";
import { useRouter } from "next/navigation";
import { AdminButton } from "./AdminButton";
import { ModeToggle } from "./ModeToggle";
import { cn } from "@repo/ui/utils";
import { Roboto_Mono as LogoFont } from "next/font/google";

const fontLogo = LogoFont({
  subsets: ["latin"],
});

export const Appbar = ({ user }: { user: User | null }) => {
  const router = useRouter();
  const admin = false;

  return (
    <header className="bg-zinc-950 p-3 flex justify-center">
      <div className="container flex justify-between">
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="h-10" />
            <div className={cn("text-white text-2xl font-", fontLogo.className)}>DailyCode</div>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          {admin && <AdminButton />}
          <ModeToggle />
          {!user ? (
            <Button
              variant={"outline"}
              onClick={() => {
                router.push("/auth");
              }}
            >
              Login
            </Button>
          ) : (
            ""
          )}
          {user ? (
            <Button
              variant={"outline"}
              onClick={() => {
                auth.signOut().then(
                  function () {
                    // Sign-out successful.
                  },
                  function (_error) {
                    // An error happened.
                  }
                );
              }}
            >
              Logout
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};
