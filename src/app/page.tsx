import { HeroSection } from "@/components/sections/hero-section";
import { OverviewSection } from "@/components/sections/overview-section";
import { AgendaSection } from "@/components/sections/agenda-section";
import { SpeakerSection } from "@/components/sections/speaker-section";
import { WorkshopsSection } from "@/components/sections/workshops-section";
import { RegistrationSection } from "@/components/sections/registration-section";
import { VenueSection } from "@/components/sections/venue-section";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <HeroSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <OverviewSection />
        <CustomSeparator />
        <AgendaSection />
        <CustomSeparator />
        <SpeakerSection />
        <CustomSeparator />
        <WorkshopsSection />
        <CustomSeparator />
        <RegistrationSection />
        <CustomSeparator />
        <VenueSection />
      </div>
      <Footer />
    </main>
  );
}

const CustomSeparator = () => (
  <div className="my-20 md:my-32">
    <Separator className="bg-primary/20" />
  </div>
)
