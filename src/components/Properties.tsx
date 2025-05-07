
import React from 'react';
import PropertyCard from './PropertyCard';

const properties = [
  {
    id: 1,
    title: "Paradise on Queen",
    location: "Queen Street, Downtown",
    price: 350,
    image: "/lovable-uploads/5fc3aaba-9046-4c4e-aec3-995d6097c6da.png",
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    isAvailable: true,
    featured: true
  }
];

const Properties = () => {
  return (
    <section id="properties" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Our Featured Property</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience luxury and comfort in our exclusive "Paradise on Queen" property.
          </p>
        </div>

        <div className="grid place-items-center">
          <div className="max-w-xl w-full">
            <PropertyCard {...properties[0]} />
          </div>
        </div>
        
        <div className="mt-10 max-w-3xl mx-auto bg-accent/20 p-6 rounded-lg border border-accent/30">
          <h3 className="text-xl font-semibold mb-3">Discover the Perfect Location</h3>
          <p className="text-muted-foreground leading-relaxed">
            Escape to this beautifully renovated coastal retreat—just 10 minutes from Caspersen and Venice Beach, and only 30 minutes from world-famous Siesta Key Beach! Explore Shamrock Park's trails, golf, bike, or fish with gear and bikes provided. Unwind at home with a fully stocked kitchen and grill, or discover Venice's boutiques, galleries, and theaters. State parks and Sarasota gems like the Ringling Museum and Mote Aquarium are a short drive away. Beach gear and towels included!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Properties;
