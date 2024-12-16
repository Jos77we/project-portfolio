import React from 'react';
import NavItem from './NavItem';
import { NavItemType } from '../../types/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  items: NavItemType[];
  currentPath: string;
  onItemClick: () => void;
}

export default function MobileMenu({ isOpen, items, currentPath, onItemClick }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="flex flex-col space-y-4 pt-4 pb-3">
        {items.map((item) => (
          <NavItem
            key={item.path}
            {...item}
            isActive={currentPath === item.path}
            onClick={onItemClick}
          />
        ))}
      </div>
    </div>
  );
}