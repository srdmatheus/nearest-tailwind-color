import { Github } from "lucide-react";

export const Header = () => {
  return (
    <header className="">
      <p>Logo</p>

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500">
        <Github size={32} />
      </div>
    </header>
  );
};
