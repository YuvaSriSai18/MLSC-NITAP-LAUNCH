"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const agendaItems = [
  { time: "10:00 AM", title: "Ignition Sequence Start", description: "Registration & Welcome Kit Distribution.", type: "SYSTEM CHECK" },
  { time: "10:30 AM", title: "Opening Ceremony", description: "Inauguration by esteemed faculty and a brief about the mission.", type: "BROADCAST" },
  { time: "11:00 AM", title: "Keynote: Into the Microsoft Universe", description: "An inspiring talk by our Mission Commander on leveraging Microsoft technologies.", type: "KEYNOTE" },
  { time: "12:00 PM", title: "Tech Workshop Alpha", description: "Hands-on session: Introduction to Azure Cloud Services.", type: "WORKSHOP" },
  { time: "01:00 PM", title: "Lunch & Networking", description: "Re-energize and connect with fellow tech enthusiasts.", type: "RECESS" },
  { time: "02:00 PM", title: "Panel: CGPA vs Skills", description: "A dynamic discussion on what truly matters in the tech industry.", type: "PANEL" },
  { time: "03:00 PM", title: "Workshop: Non-Tech Growth", description: "Unlock your potential with sessions on communication and leadership.", type: "SESSION" },
  { time: "04:00 PM", title: "Closing Remarks & Future Roadmap", description: "Vote of thanks and a glimpse into future MLSC events.", type: "DEBRIEF" },
];

export const AgendaSection = () => {
  return (
    <section id="agenda" className="w-full py-12">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl text-glow">Initiating Launch Sequence</h2>
        <p className="text-lg text-muted-foreground mt-2"> sincronizando con la red de Microsoft Cloud...</p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2"></div>

        {agendaItems.map((item, index) => (
          <div key={index} className="relative mb-8 flex items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}
            >
              <Card className="border-primary/30 bg-card/80 backdrop-blur-sm hover:border-accent transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="font-headline text-xl text-accent group-hover:text-glow">{item.title}</CardTitle>
                    <Badge variant="outline" className="border-accent/50 text-accent font-code">{item.type}</Badge>
                  </div>
                  <p className="text-sm text-primary font-bold">{item.time}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
            <div className="absolute left-1/2 top-1/2 z-10 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-4 ring-background animate-pulse-glow" />
          </div>
        ))}
      </div>
    </section>
  );
};
