import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const VenueSection = () => {
  return (
    <section id="venue" className="w-full py-12">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-glow">Docking Bay: Location & Time</h2>
        <p className="text-lg text-muted-foreground mt-2">Coordinates locked. Prepare for arrival.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="hologram p-1 rounded-xl">
          <Image
            src="https://placehold.co/800x400.png"
            alt="Hologram of NIT Andhra Pradesh campus map"
            width={800}
            height={400}
            className="rounded-lg object-cover w-full h-full opacity-60"
            data-ai-hint="map futuristic"
          />
        </div>
        
        <Card className="border-primary/30 bg-card/80 backdrop-blur-sm p-8 font-code text-lg">
          <CardContent className="p-0 space-y-6">
            <div>
              <p className="text-primary font-headline text-xl">> TRANSMISSION MODE</p>
              <p className="text-foreground text-2xl ml-4">Offline Transmission</p>
            </div>
            <div>
              <p className="text-primary font-headline text-xl">> DOCKING COORDINATES</p>
              <p className="text-foreground text-2xl ml-4">NIT Andhra Pradesh Campus</p>
            </div>
            <div>
              <p className="text-primary font-headline text-xl">> LAUNCH DATE & TIME</p>
              <p className="text-accent text-2xl ml-4 animate-pulse">OCT 25, 2025 // 10:00 AM IST</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
