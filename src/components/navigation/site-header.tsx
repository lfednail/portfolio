import {Timer} from "@/components/navigation/timer";
import Link from "next/link";
import {ModeToggle} from "@/components/theme-toggle";

export default function SiteHeader() {
  return (
    <>
      <header className="h-14 flex items-center border-b">
        <div className="container max-w-screen-4xl flex items-center justify-between">
          <div>
            <Link href="/" className="font-bold">Europe / France</Link>
          </div>
          <nav className="max-md:hidden flex items-center text-bold gap-6">
            <Link href="/" className={"hover:"}>Home</Link>
            <Link href={"/about"}>About Me</Link>
            <Link href={'/education'}>Education</Link>
            <Link href={"/work"}>Work</Link>
            <Link href={"/fun-projects"} className={""}>Fun Projects</Link>
            <ModeToggle/>
          </nav>
          <Timer/>
        </div>
      </header>
    </>
  );
}
