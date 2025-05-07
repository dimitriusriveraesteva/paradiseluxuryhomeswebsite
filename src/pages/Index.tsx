
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Properties from '@/components/Properties';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Properties />
        <Gallery />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
