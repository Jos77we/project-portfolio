import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'montif-banking',
    title: 'Montif Banking System',
    description: 'A full-stack financial interface for a banking system that enables users to create accounts, log in, view transactions, pay bills, and manage money transfers.',
    features: [
      'User Authentication (Secure Login/Sign-Up)',
      'Transaction History',
      'Interactive Dashboard',
      'Real-time transaction updates',
      'Bill Payment System',
    ],
    technologies: [
      { name: 'MongoDB' },
      { name: 'Express.js' },
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'TypeScript' },
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1920',
        alt: 'Dashboard Screenshot',
        caption: 'Main Dashboard Interface',
      },
      {
        url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1920',
        alt: 'Transaction Details',
        caption: 'Transaction History View',
      },
    ],
    links: [
      { type: 'demo', url: 'https://montif.netlify.app' },
      { type: 'frontend', url: 'https://github.com/username/montif-frontend' },
      { type: 'backend', url: 'https://github.com/username/montif-backend' },
    ],
    category: 'fullstack',
  },
  {
    id: 'microb-app',
    title: 'Microb App',
    description: 'A mobile application that integrates IoT and AI to analyze microscope-captured images, providing detailed scientific insights about observed objects.',
    features: [
      'Image Capture and AI Analysis',
      'Real-Time Object Recognition',
      'Cross-Platform Compatibility',
      'Data Export and Sharing',
    ],
    technologies: [
      { name: 'React Native' },
      { name: 'Node.js' },
      { name: 'TensorFlow' },
      { name: 'Python' },
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1920',
        alt: 'Microscope Interface',
        caption: 'Microscope Connectivity Interface',
      },
      {
        url: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=1920',
        alt: 'Analysis Results',
        caption: 'AI Analysis Results Screen',
      },
    ],
    links: [
      { type: 'frontend', url: 'https://github.com/username/microb-app' },
      { type: 'backend', url: 'https://github.com/username/microb-backend' },
    ],
    category: 'mobile',
  },
  {
    id: 'kejapap',
    title: 'KejaPap',
    description: 'A React Native app connecting real estate agents and clients with chat functionality, payment automation, and comprehensive property listings.',
    features: [
      'Figma-based UI/UX Design',
      'Real-time Messaging',
      'Integrated Payment Gateway',
      'Advanced Property Search Filters',
    ],
    technologies: [
      { name: 'React Native' },
      { name: 'Firebase' },
      { name: 'Stripe' },
      { name: 'TypeScript' },
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920',
        alt: 'Property Listing',
        caption: 'Property Listing Interface',
      },
      {
        url: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=1920',
        alt: 'Chat Interface',
        caption: 'Real-time Chat System',
      },
    ],
    links: [
      { type: 'frontend', url: 'https://github.com/username/kejapap' },
    ],
    category: 'mobile',
  },
];