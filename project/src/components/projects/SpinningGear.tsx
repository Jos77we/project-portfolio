import React from 'react';
import { Settings } from 'lucide-react';

export default function SpinningGear() {
  return (
    <div className="relative w-16 h-16 mx-auto mb-8">
      <div className="absolute inset-0 animate-spin-slow">
        <Settings className="w-16 h-16 text-blue-500" />
      </div>
      <div className="absolute inset-0 animate-spin-reverse-slower">
        <Settings className="w-12 h-12 text-cyan-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}