
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const images = {
    interior: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=85&w=800",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=85&w=800",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=85&w=800"
    ],
    exterior: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=85&w=800",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=85&w=800",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=85&w=800"
    ],
    amenities: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=85&w=800",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=85&w=800",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-1.2.1&q=85&w=800"
    ]
  };

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a visual tour of our beautiful rental properties and get inspired for your next stay.
          </p>
        </div>

        <Tabs defaultValue="interior" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="interior">Interior</TabsTrigger>
            <TabsTrigger value="exterior">Exterior</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
          </TabsList>
          {Object.entries(images).map(([category, categoryImages]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categoryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl"
                  >
                    <img 
                      src={image} 
                      alt={`${category} ${index + 1}`}
                      className="w-full h-full object-cover transition-all hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
