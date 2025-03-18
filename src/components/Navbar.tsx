
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Home, Building, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Building className="h-6 w-6 text-brand-blue" />
            <span className="text-xl font-heading font-bold text-brand-darkBlue">RentConnect</span>
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-brand-blue font-medium">Home</Link>
            <Link to="/properties" className="text-gray-600 hover:text-brand-blue font-medium">Properties</Link>
            <Link to="/agents" className="text-gray-600 hover:text-brand-blue font-medium">Agents</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
              <User className="mr-2 h-4 w-4" /> Sign In
            </Button>
            <Button className="bg-brand-orange hover:bg-brand-darkOrange text-white">
              <Home className="mr-2 h-4 w-4" /> List Property
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-brand-blue focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            <Link 
              to="/" 
              className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link 
              to="/agents" 
              className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Agents
            </Link>
            <div className="pt-2 space-y-2">
              <Button variant="outline" className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                <User className="mr-2 h-4 w-4" /> Sign In
              </Button>
              <Button className="w-full bg-brand-orange hover:bg-brand-darkOrange text-white">
                <Home className="mr-2 h-4 w-4" /> List Property
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
