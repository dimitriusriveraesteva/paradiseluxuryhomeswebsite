
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
      <DialogContent className="max-w-4xl w-[90vw]">
        <DialogHeader>
          <DialogTitle>Book Your Stay at Paradise on Queen</DialogTitle>
          <DialogDescription>
            Select your dates and complete your reservation
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <iframe 
            id="booking-iframe" 
            sandbox="allow-top-navigation allow-scripts allow-same-origin" 
            style={{ width: '100%', height: '700px' }} 
            frameBorder="0" 
            src="https://booking.hospitable.com/widget/fd7f5f40-7ea7-460f-869c-9f830039b194/1261776"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
