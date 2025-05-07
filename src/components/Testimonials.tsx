
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Elizabeth",
    location: "Guest",
    avatar: "E",
    text: "This is a very well maintained house and thoughtfully decorated. Kids loved the games at the house and enjoyed using the sifter to look for sharks teeth at Manasota beach. Would definitely recommend!",
    rating: 5
  },
  {
    name: "Alex",
    location: "Guest",
    avatar: "A",
    text: "Our family enjoyed our stay! We loved the location and how close it was to everything we enjoy in Venice! The house was clean and cozy and has everything you need!",
    rating: 5
  },
  {
    name: "Chastity",
    location: "Guest",
    avatar: "C",
    text: "We have rented several times through AirBnb and this home takes the cake. If we are ever back in Venice we will look here before all else for our accommodations!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Guest Experiences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our guests have to say about their stays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/7.x/personas/svg?seed=${testimonial.name}`} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill={i < testimonial.rating ? "currentColor" : "none"} 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="italic">&ldquo;{testimonial.text}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
