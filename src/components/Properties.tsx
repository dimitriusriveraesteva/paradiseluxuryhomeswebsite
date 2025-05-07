
import React from 'react';
import PropertyCard from './PropertyCard';

const properties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Malibu, CA",
    price: 350,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=85",
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    isAvailable: true,
    featured: true
  },
  {
    id: 2,
    title: "Mountain Cabin Retreat",
    location: "Aspen, CO",
    price: 275,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=85",
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    isAvailable: true,
    featured: false
  },
  {
    id: 3,
    title: "Downtown Modern Loft",
    location: "New York, NY",
    price: 320,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=85",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    isAvailable: false,
    featured: false
  }
];

const Properties = () => {
  return (
    <section id="properties" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Our Featured Properties</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our handpicked selection of exceptional properties designed for your perfect getaway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
