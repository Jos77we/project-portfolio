import React from 'react';

export default function ProfileImage() {
  return (
    <div className="lg:w-1/2">
      <img
        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=600&h=600"
        alt="Joseph Muigai"
        className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl"
      />
    </div>
  );
}