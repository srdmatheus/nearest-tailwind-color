import Link from "next/link";
import Image from "next/image";

import { Github } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 flex h-16 w-full items-center justify-between border-b border-b-white/30 bg-white/20 px-6 py-1 backdrop-blur-lg">
      <Image
        src="/logo.svg"
        width={200}
        height={100}
        alt="Nearest Tailwind Color"
      />

      <Link
        href="https://github.com/srdmatheus/nearest-tailwind-color"
        target="_blank"
        title="See on Github"
        className="flex h-12 w-12 items-center justify-center rounded-full transition bg-white/60  hover:bg-white"
      >
        <Github size={24} />
      </Link>
    </header>
  );
};
