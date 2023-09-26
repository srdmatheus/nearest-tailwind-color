import Link from "next/link";
import Image from "next/image";

import { Github } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 flex h-16 w-full items-center justify-between border-b border-b-white/70 bg-white/40 px-6 py-2 backdrop-blur-lg">
      <Image
        src="/logo.svg"
        width={160}
        height={60}
        alt="Nearest Tailwind Color"
      />

      <Link
        href="https://github.com/srdmatheus/nearest-tailwind-color"
        target="_blank"
        title="See on Github"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/60"
      >
        <Github size={24} />
      </Link>
    </header>
  );
};
