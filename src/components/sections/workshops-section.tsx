import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Presentation, Users } from "lucide-react";

const workshopData = [
  {
    icon: <Code className="h-10 w-10 text-accent" />,
    title: "App Dev Bootcamp",
    description: "Go from zero to hero in mobile app development. A high-intensity training module for aspiring developers.",
  },
  {
    icon: <Presentation className="h-10 w-10 text-accent" />,
    title: "CGPA vs Skills Talk",
    description: "A crucial talk decrypting the industry's perspective on academic scores versus real-world skills.",
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "Non-Tech Growth Sessions",
    description: "Upgrade your core programming. Sessions on leadership, communication, and personal branding.",
  },
];

export const WorkshopsSection = () => {
  return (
    <section id="workshops" className="w-full py-12">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-glow">Future-Proof Your Skills</h2>
        <p className="text-lg text-muted-foreground mt-2">A preview of upcoming transmissions...</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {workshopData.map((workshop, index) => (
          <Card key={index} className="group border-primary/30 bg-card/80 backdrop-blur-sm text-center p-6 flex flex-col items-center
                                     hover:border-accent hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--accent)/0.4)]">
            <CardHeader>
              <div className="w-24 h-24 rounded-full border-2 border-primary/50 flex items-center justify-center bg-background/50 group-hover:border-accent transition-colors duration-300 group-hover:animate-pulse-glow">
                {workshop.icon}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="font-headline text-2xl text-primary group-hover:text-accent transition-colors duration-300">{workshop.title}</CardTitle>
              <p className="text-muted-foreground mt-4">{workshop.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
