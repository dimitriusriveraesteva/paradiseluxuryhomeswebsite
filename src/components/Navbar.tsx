
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import BookingModal from './BookingModal';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/78c40790-d058-4b0f-9727-290d96d64840.png" 
              alt="Paradise Luxe Homes Logo" 
              className="h-10 w-auto"
            />
            <span className="font-display text-xl md:text-2xl font-bold">
              Paradise Luxe Homes
            </span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#properties" className="text-sm font-medium hover:text-primary transition-colors">
            Properties
          </a>
          <a href="#amenities" className="text-sm font-medium hover:text-primary transition-colors">
            Amenities
          </a>
          <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">
            Gallery
          </a>
          <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">
            Reviews
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
          <ThemeToggle />
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button onClick={openBookingModal}>Book Now</Button>
        </div>

        {/* Mobile navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              <a href="/" className="flex items-center gap-2 mb-4">
                <img 
                  src="/lovable-uploads/78c40790-d058-4b0f-9727-290d96d64840.png" 
                  alt="Paradise Luxe Homes Logo" 
                  className="h-8 w-auto"
                />
                <span className="font-display text-lg font-bold">
                  Paradise Luxe Homes
                </span>
              </a>
              <a href="#properties" className="text-lg font-medium hover:text-primary transition-colors">
                Properties
              </a>
              <a href="#amenities" className="text-lg font-medium hover:text-primary transition-colors">
                Amenities
              </a>
              <a href="#gallery" className="text-lg font-medium hover:text-primary transition-colors">
                Gallery
              </a>
              <a href="#reviews" className="text-lg font-medium hover:text-primary transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-lg font-medium hover:text-primary transition-colors">
                Contact
              </a>
              <div className="flex items-center gap-2 mt-4">
                <ThemeToggle />
                <span className="text-sm">Toggle theme</span>
              </div>
              <Button className="mt-4 w-full" onClick={openBookingModal}>Book Now</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </header>
  );
};

export default Navbar;
