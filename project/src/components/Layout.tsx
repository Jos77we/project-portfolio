import React from 'react';
import Navigation from './navigation/Navigation';
import Footer from './footer/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
}