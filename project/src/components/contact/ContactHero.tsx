import { MessageSquare } from 'lucide-react';

export default function ContactHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]" />
      <div className="relative container mx-auto px-6 py-24 text-center">
        <MessageSquare className="w-16 h-16 mx-auto mb-8 text-blue-200" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Have a question, opportunity, or just want to say hello? Send me a message, 
          and I'll respond promptly!
        </p>
      </div>
    </div>
  );
}