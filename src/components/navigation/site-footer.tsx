import Link from "next/link"
import React from "react";
import Image from "next/image";
import {SwitchToggle} from "@/components/switch-toggle";




export default function SiteFooter() {
  return (
      <>
        <footer className="bg-background text-foreground mt-20 flex flex-col items-center sm:justify-between sm:p-12">
          <div className="w-full flex justify-between sm:gap-12">
            <div className="w-full">
              <p className="font-sans capitalize text-[9vw] sm:text-[3.5vw] leading-none">stay in touch.</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                  src="/images/moi.png" // Chemin relatif dans le dossier public
                  alt=" Logo nom dev"
                  width={300} // Spécifiez la largeur
                  height={300} // Spécifiez la hauteur
                  className="rounded-full" // Ajoutez des styles, par exemple pour des bordures rondes
              />
            </div>

            <div className="w-full my-4 sm:my-6">
              <div className="w-full flex justify-between uppercase gap-2">
                <Link className="font-thin" target="_blank" href="mailto:sukig.dew@gmail.com">Sukig.dew@gmail.com</Link>
                <Link className="font-thin" target="_blank" href="https://github.com/lfednail">Github</Link>
                <Link className="font-thin" target="_blank" href="https://www.instagram.com/sukig.dev/">Instagram</Link>
                <Link className="font-thin" target="_blank" href="https://www.linkedin.com/in/fednail-leclercq-734333250/">linkedin</Link>
              </div>
            </div>
          </div>
          <SwitchToggle/>
          <div className="flex flex-col gap-1 items-end">
            <p>
              <span className="font-mono mr-1 text-[0.7rem]">© 2025</span>
              <span className="font-sans text-[0.85rem]">Sukig.Dew</span>
            </p>
          </div>

          <div className="flex flex-col gap-1 uppercase text-right text-[0.45rem] sm:text-[0.6rem]">
            <p>designed and developed by Sukig.Dew.</p>
            <p>For the love of lovelace, embrace poetical science.</p>
          </div>
        </footer>
      </>
  );
}