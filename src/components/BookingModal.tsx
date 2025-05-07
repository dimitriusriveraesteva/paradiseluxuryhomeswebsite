
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw] p-6 border-rental-300 bg-white/95 backdrop-blur-sm">
        <DialogHeader className="pb-4 border-b border-rental-100">
          <DialogTitle className="text-2xl font-display text-rental-800">Book Your Stay at Paradise on Queen</DialogTitle>
          <DialogDescription className="text-rental-600">
            Select your dates and complete your reservation
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-center">
          <iframe 
            id="booking-iframe" 
            sandbox="allow-top-navigation allow-scripts allow-same-origin" 
            className="w-full h-[700px] rounded-md shadow-sm"
            style={{ display: 'block', maxWidth: '100%' }}
            frameBorder="0" 
            src="https://booking.hospitable.com/widget/fd7f5f40-7ea7-460f-869c-9f830039b194/1261776"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
