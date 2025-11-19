export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8" style={{ background: 'var(--cupido-bg-gradient)', position: 'relative' }}>
      <section className="cupido-card w-full max-w-3xl text-center mb-10" style={{ boxShadow: '0 0 32px 8px #e0aaff99, 0 0 64px 0px #a259c6cc' }}>
        <h1 className="text-5xl font-extrabold mb-4 animate-pulse" style={{ color: 'var(--cupido-purple)', textShadow: '0 0 16px #e0aaff, 0 0 32px #fff' }}>CupidoApp</h1>
        <p className="mb-6 text-xl" style={{ color: '#2d1e4a', textShadow: '0 0 8px #fff' }}>Encontre sua conexão perfeita! O app de relacionamentos moderno, seguro e divertido.</p>
        <a
          href="CupidoApp.apk"
          className="cupido-btn animate-shine"
          style={{ fontSize: '1.2rem', boxShadow: '0 0 16px #e0aaff' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instalar APK
        </a>
      </section>
      <section className="w-full max-w-2xl flex flex-col items-center justify-center">
        <div className="w-full cupido-card" style={{ background: 'linear-gradient(135deg, #e7b2ff 0%, #b993d6 100%)', boxShadow: '0 0 32px 8px #e0aaff99' }}>
          <video
            width="60%"
            height="120"
            loop
            autoPlay
            muted
            playsInline
            style={{ background: '#000', borderRadius: '24px', filter: 'contrast(1.2) brightness(1.1) drop-shadow(0 0 32px #e0aaff)', boxShadow: '0 0 32px #e0aaff' }}
            poster="/images/video-poster.png"
          >
            <source src="/comercial do app.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
        </div>
      </section>
      <footer className="w-full flex justify-center items-center gap-8 mt-12" style={{ background: 'transparent' }}>
        <a href="https://github.com/andre806/findMatch" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-3xl text-[#2d1e4a] hover:text-[var(--cupido-purple)]">
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
        </a>
        <a href="https://www.youtube.com/@Andr%C3%A9code-w5z" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-3xl text-[#2d1e4a] hover:text-red-500">
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.112C19.633 3.5 12 3.5 12 3.5s-7.633 0-9.386.574a2.994 2.994 0 00-2.112 2.112C0 7.939 0 12 0 12s0 4.061.502 5.814a2.994 2.994 0 002.112 2.112C4.367 20.5 12 20.5 12 20.5s7.633 0 9.386-.574a2.994 2.994 0 002.112-2.112C24 16.061 24 12 24 12s0-4.061-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
        </a>
        <a href="https://andrepaulo.vercel.app/public/home" target="_blank" rel="noopener noreferrer" aria-label="Site" className="text-3xl text-[#2d1e4a] hover:text-[var(--cupido-purple)]">
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8 0-4.411 3.589-8 8-8 4.411 0 8 3.589 8 8 0 4.411-3.589 8-8 8zm0-14c-3.309 0-6 2.691-6 6 0 3.309 2.691 6 6 6s6-2.691 6-6c0-3.309-2.691-6-6-6z" /></svg>
        </a>
      </footer>
    </main>
  );
}
