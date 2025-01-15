import Header from "@/components/landing/header";
import HeroSection from "@/components/landing/hero";

export default function Home() {
  return (
    <div className="w-full h-full">
        <div className="mx-auto max-w-screen-lg h-full">
          <div className="flex flex-col h-full">
              <Header />
              <HeroSection
                title="Think"
                titleHighlight="Canvas"
                subtitle="Ideas, beautifully organized."
                description="ThinkCanvas brings your notes and diagrams together in one beautiful, easy-to-use platform."
                buttonText="Create Notes"
                buttonTextColor='#FDBA74'
                buttonLink="/dashboard"
              />
          </div>
        </div>
    </div>
  );
}
