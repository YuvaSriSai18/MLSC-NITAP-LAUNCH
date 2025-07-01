export const OverviewSection = () => {
  return (
    <section id="overview" className="w-full py-12">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-3xl md:text-5xl text-glow">Mission Briefing</h2>
        <p className="text-lg text-muted-foreground mt-2">Transmitting knowledge to the next-gen...</p>
        
        <div className="mt-8 text-left text-lg space-y-6 text-muted-foreground border border-primary/20 bg-card/50 p-8 rounded-xl backdrop-blur-sm">
          <p>
            Prepare for launch! The <strong className="text-primary font-bold">Microsoft Learn Student Chapter (MLSC)</strong> at <strong className="text-primary font-bold">NIT Andhra Pradesh</strong> is officially initiating its journey to empower the innovators of tomorrow. This flagship event marks the beginning of a new era of technology, collaboration, and leadership on our campus.
          </p>
          <p>
            As part of the globally recognized <strong className="text-accent font-semibold">Microsoft Learn Student Ambassadors (MLSA)</strong> program, we are here to bridge the gap between academic learning and industry-level skills. Attendees will sync with the Microsoft ecosystem, gaining exclusive insights into cutting-edge technologies, career pathways, and the power of community. 
          </p>
          <p>
            Join us to connect with peers, learn from experienced ambassadors, and build the future, one line of code at a time. Your mission, should you choose to accept it, is to become a part of this thriving tech community.
          </p>
        </div>
      </div>
    </section>
  );
}
