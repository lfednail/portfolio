import Link from "next/link"
import React from "react";
import Image from "next/image";
import {ModeToggle} from "@/components/theme-toggle";


const Socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fednail-leclercq-734333250/",
  },
  {
    name: "GitHub",
    href: "https://github.com/lfednail?tab=repositories",
  },
    {
      name: "Twitter",
      href: "https://twitter.com/fedna",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/fedna/",
    },
];

export default function SiteFooter() {
  return (
      <>
        <footer className="border-t py-6 flex items-center">
          <div className={"container flex max-md:flex-col max-md:gap-2 items-center justify-between text-sm"}>
            <section>

              <div className={"ml-4 flex flex-col items-center gap-4"}>
                {Socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={"text-muted-foreground"}
                  >
                    <p>{social.name}</p>
                  </Link>
                ))}
              </div><br/>

            </section>
            <section>
              <p className={"text-muted-foreground"}>
                © {new Date().getFullYear()} Fednail / Sukig.dew Inc. All rights reserved
              </p>
            </section>

            <section>
              <ModeToggle/>
              <Image
                src="/images/icon-fed-removebg.png" // Chemin relatif dans le dossier public
                alt=" Logo nom dev"
                width={50} // Spécifiez la largeur
                height={50} // Spécifiez la hauteur
                className="rounded-full" // Ajoutez des styles, par exemple pour des bordures rondes
              />

            </section>
          </div>

        </footer>
      </>
  );
}