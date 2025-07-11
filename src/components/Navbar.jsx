import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-secondary shadow px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">

        <div className="text-primary font-bold text-xl">Dashboard</div>

        <ul className="hidden md:flex flex-1 justify-center space-x-6 text-neutral font-medium">
          <Link to="/">Dashboard</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/technicians">Technicians</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/customer">Customer</Link>
          <Link to="/invoices">Invoices & Payments</Link>
        </ul>

        <div className="hidden md:flex items-center justify-end w-10 h-10 rounded-full overflow-hidden border-2 border-primary shadow-md">
          <img
            src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-primary text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 text-neutral font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block">Dashboard</Link>
          <Link to="/jobs" onClick={() => setMenuOpen(false)} className="block">Jobs</Link>
          <Link to="/technicians" onClick={() => setMenuOpen(false)} className="block">Technicians</Link>
          <Link to="/calendar" onClick={() => setMenuOpen(false)} className="block">Calendar</Link>
          <Link to="/customer" onClick={() => setMenuOpen(false)} className="block">Customer</Link>
          <Link to="/invoices" onClick={() => setMenuOpen(false)} className="block">Invoices & Payments</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
