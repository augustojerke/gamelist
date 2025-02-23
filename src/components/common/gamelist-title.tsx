"use client";
import { Audiowide } from "next/font/google";
import { cn } from "@/lib/utils";
import { Gamepad2 } from "lucide-react";

const audiowide = Audiowide({ weight: "400" });

interface GamelistTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  showIcon?: boolean;
}

export default function GamelistTitle({
  className,
  showIcon = true,
  ...props
}: GamelistTitleProps) {
  return (
    <h1
      className={cn(
        audiowide.className,
        className,
        "flex justify-center items-center gap-3"
      )}
      {...props}
    >
      {showIcon && <Gamepad2 className="w-[1em] h-[1em]" />} Gamelist
    </h1>
  );
}
