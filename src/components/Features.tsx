
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bed, MapPin, Calendar, Key } from "lucide-react";

const features = [
  {
    title: "Prime Locations",
    description: "Our properties are located in the most desirable areas, close to attractions, restaurants, and entertainment.",
    icon: MapPin,
  },
  {
    title: "Luxury Accommodations", 
    description: "Every property is equipped with premium amenities and furnishings for your comfort and enjoyment.",
    icon: Bed,
  },
  {
    title: "Flexible Booking",
    description: "Easy booking process with flexible dates and customizable options to fit your travel plans.",
    icon: Calendar,
  },
  {
    title: "Hassle-Free Check-In",
    description: "Simple self check-in process with secure keyless entry systems for convenience.",
    icon: Key,
  }
];

const Features = () => {
  return (
    <section id="amenities" className="section bg-accent/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Why Choose Our Rentals</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've designed our properties and services to provide you with an exceptional experience from booking to checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:shadow-md">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
