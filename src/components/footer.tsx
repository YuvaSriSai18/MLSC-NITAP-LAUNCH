import Link from "next/link";
import { MLSCLogo } from "@/components/mlsc-logo";
import { NITAPLogo } from "@/components/nitap-logo";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="w-full mt-24 md:mt-32 border-t border-primary/20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="font-headline text-lg text-primary">ORGANIZED BY</h3>
            <div className="flex items-center space-x-4">
              <Link href="https://mlsc.nitandhra.ac.in" target="_blank" rel="noopener noreferrer"
                className="p-2 border border-primary/30 rounded-lg hover:border-primary transition-colors hover:shadow-[0_0_15px_hsl(var(--primary))]">
                <MLSCLogo className="h-12 w-12 text-foreground" />
              </Link>
              <Link href="https://nitandhra.ac.in" target="_blank" rel="noopener noreferrer"
                className="p-2 border border-primary/30 rounded-lg hover:border-primary transition-colors hover:shadow-[0_0_15px_hsl(var(--primary))]">
                <NITAPLogo />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h3 className="font-headline text-lg text-primary">QUICK LINKS</h3>
            <ul className="space-y-2 text-center">
              <li>
                <Link href="https://amcny.github.io/mlsc-nitap/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  MLSC NITAP Community
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/chaitanyapullagura" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  Speaker's LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="font-headline text-lg text-primary">CONTACT US</h3>
            <Button variant="ghost" className="group animate-pulse-glow border border-accent/50 hover:border-accent">
                <a href="mailto:mlsc@nitandhra.ac.in" className="flex items-center gap-2 text-accent group-hover:text-glow">
                  <Mail className="h-5 w-5" />
                  <span>mlsc@nitandhra.ac.in</span>
                </a>
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-primary/20" />
        
        <div className="text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Microsoft Learn Student Chapter - NIT Andhra Pradesh. All rights reserved.</p>
          <p>Designed with futuristic energy for the next generation of leaders.</p>
        </div>
      </div>
    </footer>
  );
};
