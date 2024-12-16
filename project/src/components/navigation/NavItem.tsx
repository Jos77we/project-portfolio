import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  path: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

export default function NavItem({ path, label, isActive, onClick }: NavItemProps) {
  return (
    <Link
      to={path}
      className={`text-sm font-medium transition-colors hover:text-blue-600 ${
        isActive ? 'text-blue-600' : 'text-gray-600'
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}