import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const SpeakerSection = () => {
  return (
    <section id="speakers" className="w-full py-12">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-glow">Mission Commander</h2>
        <p className="text-lg text-muted-foreground mt-2">Meet the leader of this expedition.</p>
      </div>
      
      <div className="flex justify-center">
        <Card className="group max-w-sm w-full bg-card/80 backdrop-blur-sm border-primary/30 overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)]">
          <CardHeader className="p-0 relative">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Chaitanya Pullagura"
              width={400}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="portrait professional"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
            <div className="absolute bottom-0 p-6 w-full">
              <CardTitle className="font-headline text-3xl text-glow">Chaitanya Pullagura</CardTitle>
              <p className="text-primary font-semibold text-lg">Beta Microsoft Learn Student Ambassador</p>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="relative overflow-hidden h-32">
              <div className="transition-transform duration-500 group-hover:-translate-y-full">
                <p className="text-muted-foreground">
                  Leading the charge for the MLSC at NIT Andhra Pradesh, Chaitanya is passionate about building communities and empowering students with cutting-edge technology and skills for the future.
                </p>
              </div>
              <div className="absolute top-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                <h4 className="font-headline text-accent mb-2">FIELD EXPERIENCE:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>App Developer</li>
                  <li>FlutterFlow Ambassador</li>
                  <li>Community Builder</li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-6 bg-card/50">
            <Button asChild variant="outline" className="w-full border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground hover:border-accent">
                <Link href="https://www.linkedin.com/in/chaitanyapullagura" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
                </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
