import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "Email",
      href: "mailto:lfednail@gmail.com",
      text: "lfednail@gmail.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/lfednail",
      text: "Github",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/sukig.dev/",
      text: "Instagram",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fednail-leclercq-734333250/",
      text: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-background text-foreground mt-20 flex flex-col items-center sm:justify-between sm:p-12">
      {/* Section principale : titre + photo + liens */}
      <div className="w-full flex flex-col sm:flex-row justify-between sm:gap-12">
        <div className="w-full">
          <p className="font-sans capitalize text-[9vw] sm:text-[3.5vw] leading-none">
            stay in touch.
          </p>
        </div>

        <div className="flex flex-col items-center my-6 sm:my-0">
          <Image
            src="/images/moi.png"
            alt="Portrait de Fednail Leclercq - Développeur Sukig.Dew"
            width={300}
            height={300}
            className="rounded-full object-cover border-2 border-border"
            priority={false}
          />
        </div>

        <div className="w-full my-4 sm:my-6">
          <nav aria-label="Liens sociaux">
            <ul className="w-full flex flex-wrap justify-between uppercase gap-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className="font-thin hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.href}
                    aria-label={link.label}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Séparateur visuel + Toggle thème */}
      <div className="w-full my-6 border-t border-border pt-4 flex justify-center"></div>

      {/* Copyright - CENTRÉ */}
      <div className="flex flex-col gap-1 items-center w-full">
        <p className="text-foreground/80 text-center">
          <span className="font-mono mr-1 text-[0.7rem]">© {currentYear}</span>
          <span className="font-sans text-[0.85rem]">Fednail L.</span>
        </p>
      </div>

      {/* Crédits - CENTRÉS */}
      <div className="flex flex-col gap-1 uppercase text-center text-[0.45rem] sm:text-[0.6rem] text-foreground/60">
        <p>designed and developed by Fednail L.</p>
        <p>For the love of lovelace, embrace poetical science.</p>
      </div>
    </footer>
  );
}
