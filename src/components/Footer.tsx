
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get('email') as string;
    
    toast({
      title: "Subscription successful!",
      description: `Thank you for subscribing with ${email}. You'll receive our latest updates.`
    });
    
    form.reset();
  };

  return (
    <footer className="bg-rental-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-display font-bold mb-4">Paradise Luxury Homes, LLC</h3>
            <p className="mb-4 text-gray-300 max-w-md">
              Luxury short-term rentals designed for comfort and relaxation. Experience the perfect getaway with our exclusive property, "Paradise on Queen".
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                name="email"
                className="bg-rental-800/50 border-rental-700 text-white placeholder:text-gray-400"
                required
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#properties" className="text-gray-300 hover:text-white transition-colors">Property</a></li>
              <li><a href="#amenities" className="text-gray-300 hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Paradise Luxury Homes, LLC</p>
              <p><a href="mailto:info@paradiseluxuryhomes.com" className="hover:text-white transition-colors">info@paradiseluxuryhomes.com</a></p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-rental-700/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Paradise Luxury Homes, LLC. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
