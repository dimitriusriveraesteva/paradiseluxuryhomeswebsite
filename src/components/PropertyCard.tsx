
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bed, Bath, CalendarDays, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BookingModal from './BookingModal';

interface PropertyCardProps {
  title: string;
  location: string;
  price: {
    low: number;
    high: number;
  } | number;
  image: string;
  bedrooms: number;
  bathrooms: number;
  beds?: number;
  bedDetails?: string;
  guests: number;
  isAvailable?: boolean;
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  location,
  price,
  image,
  bedrooms,
  bathrooms,
  beds,
  bedDetails,
  guests,
  isAvailable = true,
  featured = false,
}) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Format price display
  const priceDisplay = typeof price === 'object' 
    ? `$${price.low} - $${price.high}` 
    : `$${price}`;

  return (
    <>
      <Card className={`overflow-hidden transition-all hover:shadow-lg ${featured ? 'border-primary/30 shadow-md' : ''}`}>
        <div className="relative aspect-[4/3]">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          {featured && (
            <Badge className="absolute top-3 left-3" variant="secondary">
              Featured
            </Badge>
          )}
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription>{location}</CardDescription>
            </div>
            <div className="text-right">
              <span className="font-bold text-lg">{priceDisplay}</span>
              <CardDescription>/night</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{bedrooms} Bedroom{bedrooms > 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{bathrooms} Bath{bathrooms > 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{guests} Guest{guests > 1 ? 's' : ''}</span>
            </div>
          </div>
          
          {bedDetails && (
            <div className="text-sm text-muted-foreground mt-2 bg-secondary/20 p-2 rounded">
              <span className="font-medium">Sleeping arrangements:</span> {bedDetails}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4 text-primary" />
            <span className="text-sm">{isAvailable ? 'Available now' : 'Booked'}</span>
          </div>
          <Button 
            variant={isAvailable ? "default" : "outline"} 
            disabled={!isAvailable}
            onClick={() => isAvailable && setIsBookingModalOpen(true)}
          >
            {isAvailable ? 'Book Now' : 'Not Available'}
          </Button>
        </CardFooter>
      </Card>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default PropertyCard;
