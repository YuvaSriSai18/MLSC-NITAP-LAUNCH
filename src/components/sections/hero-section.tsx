import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center text-center relative p-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-glow">
          MLSC Launch 2025
        </h1>
        <p className="font-headline text-lg sm:text-2xl md:text-3xl text-primary mt-2">
          NIT Andhra Pradesh
        </p>
        <p className="mt-6 text-md sm:text-xl text-muted-foreground max-w-2xl">
          Step into the future. Learn. Build. Lead.
        </p>
        <Link href="#register" passHref>
          <Button
            size="lg"
            className="mt-8 font-headline text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 transition-all duration-300 ease-in-out
                       shadow-[0_0_15px_hsl(var(--primary)),0_0_25px_hsl(var(--primary))] 
                       hover:shadow-[0_0_25px_hsl(var(--primary)),0_0_40px_hsl(var(--primary))]
                       hover:scale-105"
          >
            Register Now
          </Button>
        </Link>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary/50"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </section>
  );
};
