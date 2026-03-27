import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  lightMode?: boolean;
}

export function Logo({ lightMode = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative w-18 h-18">
        <Image
          src="/logo.png"
          alt="APRATIONAL"
          fill
          className={cn(
            "object-contain transform group-hover:rotate-3 transition-transform duration-300",
            lightMode ? "brightness-0 invert" : ""
          )}
        />
      </div>
    </Link>
  );
}

