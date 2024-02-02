import { Button } from "./shad/ui/button";
import { Card, CardHeader, CardTitle } from "./shad/ui/card";
import { cn } from "@repo/ui/utils";

import { Track } from "@repo/store";
import { ArrowRightIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export function TrackCard({ track, featured }: { track: Track; featured?: boolean }) {
  return (
    <Card className="max-w-screen-md w-full cursor-pointer transition-all hover:border-primary/20 shadow-lg shadow-black/60">
      <CardHeader className={cn({ "bg-red-500 row-span-3": featured })}>
        <div className={cn("flex flex-col sm:gap-4", { "sm:flex-row": !featured })}>
          <img
            src={track.image}
            className={cn("min-h-[130px] min-w-[130px] rounded-xl sm:h-[130px] sm:w-[130px]", {
              "sm:h-[350px] sm:w-full": featured,
            })}
          ></img>
          <div className="pt-4 sm:pt-0">
            <CardTitle>{track.title}</CardTitle>
            <div>{track.description}</div>
          </div>
        </div>
        <div className="flex justify-between">
          <h3 className="flex flex-col justify-center">{track.problems.length} Lessons</h3>
          <Button size={"lg"} className="flex items-center justify-center group">
            Explore
            <ChevronRightIcon className="pl-1 h-4 w-4 group-hover:translate-x-1 group-hover:hidden mt-[0.15rem] transition-all duration-150" />
            <ArrowRightIcon className="pl-1 h-4 w-4 hidden group-hover:block mt-[0.15rem] transition-all duration-150" />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}
