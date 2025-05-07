
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = {
    interior: [
      "/lovable-uploads/55c02f35-fd9d-4d14-b61e-4fc7c3f2f0d3.png", // Living room with blue accent wall
      "/lovable-uploads/5419e1d0-3bd2-45d2-8bbe-77d7a0a7156b.png", // Dining area with blue chairs
      "/lovable-uploads/7a211a23-b54b-4a43-9795-f2af9a12542c.png", // Bedroom with white furniture
      "/lovable-uploads/f41cfc61-492d-4111-94f9-aa9b4c4a5338.png", // Kitchen with bar stools
      "/lovable-uploads/f4ab173a-4852-48f8-b9a6-426e71eed8ad.png", // Kitchen detailed view
      "/lovable-uploads/2dff53f3-1dfe-4b8c-873d-d113821a0b7f.png", // Sunroom/dining with blue furniture
      "/lovable-uploads/5fc3aaba-9046-4c4e-aec3-995d6097c6da.png", // Existing interior image
    ],
    exterior: [
      "/lovable-uploads/77470247-5762-4f84-9151-44ab64ae0ca0.png", // Aerial view of neighborhood with ocean
      "/lovable-uploads/1485efdd-908a-4514-8568-4203981d5506.png", // Existing exterior image
      "/lovable-uploads/dc1d6872-601f-4955-be6b-46f03d4f4b9f.png", // New front porch with rocking chairs
      "/lovable-uploads/3edda6e3-ebbb-4a18-b96e-6d763aefb588.png", // New house exterior with palm trees
      "/lovable-uploads/c114a681-cc7d-42ca-8a9d-0060f7d356a5.png", // New aerial neighborhood view
    ],
    amenities: [
      "/lovable-uploads/bb32a8a3-37f1-4a7c-b9e6-a5a814099210.png", // Living room from another angle
      "/lovable-uploads/1485efdd-908a-4514-8568-4203981d5506.png", // Existing amenities image
      "/lovable-uploads/62d94465-1530-4055-94bc-b679a840bf1c.png", // New outdoor patio with gazebo image
    ]
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a visual tour of our beautiful Paradise on Queen property and get inspired for your next stay.
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
              <Carousel className="w-full">
                <CarouselContent>
                  {categoryImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div 
                        className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer transition-all hover:shadow-xl"
                        onClick={() => handleImageClick(image)}
                      >
                        <img 
                          src={image} 
                          alt={`${category} ${index + 1}`}
                          className="w-full h-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4">
                  <CarouselPrevious className="relative static mx-2" />
                  <CarouselNext className="relative static mx-2" />
                </div>
              </Carousel>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Lightbox modal for clicked images */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button 
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-all"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-h-[85vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
