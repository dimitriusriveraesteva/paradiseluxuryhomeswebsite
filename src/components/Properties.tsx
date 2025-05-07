
import React from 'react';
import PropertyCard from './PropertyCard';

const properties = [
  {
    id: 1,
    title: "Paradise on Queen",
    location: "Queen Street, Downtown",
    price: 350,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=85",
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
      </div>
    </section>
  );
};

export default Properties;
