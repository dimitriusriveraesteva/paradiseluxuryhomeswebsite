
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-16 pb-20 md:pb-32 md:pt-24 lg:pb-40 lg:pt-36">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=85")',
          filter: 'brightness(0.7)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 z-0" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="animate-fade-in heading-1 mb-6">
            Your Perfect Getaway Awaits
          </h1>
          <p className="animate-fade-up text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Experience luxury, comfort, and stunning views in our beautifully curated properties designed for unforgettable stays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Book Your Stay
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              View Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
