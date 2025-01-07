import Link from 'next/link'

export default function Sidebar() {
  return (
    <nav className="fixed h-full w-64 bg-black p-8">
      <ul className="space-y-6">
        <li>
          <Link href="/about" className="text-muted-foreground hover:text-white transition-colors">
            Introduction
          </Link>
        </li>
        <li>
          <span className="text-muted-foreground">Work Experience</span>
          <ul className="mt-2 ml-4 space-y-2">
            <li>
              <Link href="/about/work-experiences" className="text-gray-400 hover:text-white transition-colors">
                ― TOPIVO
              </Link>
            </li>
            <li>
              <Link href="/about/work-experiences" className="text-gray-400 hover:text-white transition-colors">
                ― NORMAL
              </Link>
            </li>
            <li>
              <Link href="/about/work-experiences" className="text-gray-400 hover:text-white transition-colors">
                ― CDN
              </Link>
            </li>
            <li>
              <Link href="/about/work-experiences" className="text-gray-400 hover:text-white transition-colors">
                ― CNAM
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <span className="text-muted-foreground">Studies</span>
          <ul className="mt-2 ml-4 space-y-2">
            <li>
              <Link href="/about/studies" className="text-gray-400 hover:text-white transition-colors">
                ― BTS SIO
              </Link>
            </li>
            <li>
              <Link href="/about/studies" className="text-gray-400 hover:text-white transition-colors">
                ― Baccalauréat STI2D
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <span className="text-muted-foreground">Technical skills</span>
          <ul className="mt-2 ml-4 space-y-2">
            <li>
              <Link href="/about/skills" className="text-gray-400 hover:text-white transition-colors">
                ― Development
              </Link>
            </li>
            <li>
              <Link href="/about/skills" className="text-gray-400 hover:text-white transition-colors">
                ― Languages
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

