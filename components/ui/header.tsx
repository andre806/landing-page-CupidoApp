"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5" style={{ background: 'var(--cupido-bg-gradient)' }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between gap-3 rounded-2xl px-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
            <span className="ml-3 text-2xl font-bold" style={{ color: 'var(--cupido-purple)' }}>CupidoApp</span>
          </div>

          {/* Desktop links */}
          <nav className="flex flex-1 items-center justify-end gap-6">
            <Link href="#" className="text-[var(--cupido-purple)] font-medium hover:text-[var(--cupido-accent)]">Início</Link>
            <Link href="#sobre" className="text-[var(--cupido-purple)] font-medium hover:text-[var(--cupido-accent)]">Sobre</Link>
            <Link href="#recursos" className="text-[var(--cupido-purple)] font-medium hover:text-[var(--cupido-accent)]">Recursos</Link>
            <Link href="#download" className="text-[var(--cupido-purple)] font-medium hover:text-[var(--cupido-accent)]">Download</Link>
           
          </nav>
         
        </div>
      </div>
    </header>
  );
}
