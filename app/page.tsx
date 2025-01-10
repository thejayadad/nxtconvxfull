import HeroSection from "@/components/landing/hero";
import LandingNav from "@/components/landing/landing-nav";

export default function Home() {
  return (
    <div className="landing-layout">
      <LandingNav />
      <main className="landing-main">
        <div className="landing">
        <HeroSection />
        </div>
      </main>
      <footer className="bg-gray-100 py-4 text-center text-gray-500">
        © 2025 PoemPique. All rights reserved.
      </footer>
    </div>
  );
}
