import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Technicians', path: '/technicians' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Customers', path: '/customer' },
    { name: 'Invoices & Payments', path: '/invoices' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md px-6 md:px-12 py-4">
      <div className="flex items-center justify-between">
        {/* Nav links */}
        <ul className="hidden md:flex space-x-10 font-medium text-gray-600">
          {navItems.map((item) => (
            <li key={item.path} className="relative">
              <Link
                to={item.path}
                className={`hover:text-blue-600 transition ${
                  isActive(item.path) ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
              {isActive(item.path) && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Avatar */}
        <div className="hidden md:flex items-center justify-end w-10 h-10 rounded-full overflow-hidden border-2 border-blue-600 shadow-md">
          <img
            src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-600 text-3xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 text-gray-700 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-2 py-1 ${
                isActive(item.path) ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;