
import { Link } from 'react-router-dom';
import { Building, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Building className="h-6 w-6 text-brand-blue" />
              <span className="text-xl font-heading font-bold text-brand-darkBlue">RentConnect</span>
            </div>
            <p className="text-gray-600 mb-6">
              Connecting housing agents with renters - making the rental process simpler and more efficient.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-brand-blue">Home</Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-600 hover:text-brand-blue">Properties</Link>
              </li>
              <li>
                <Link to="/agents" className="text-gray-600 hover:text-brand-blue">Agents</Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-blue">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-blue">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Property Types</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-blue">Apartments</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-blue">Houses</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-blue">Condos</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-blue">Townhouses</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-blue">Studio Apartments</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Rental Street, Suite 101<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0" />
                <a href="tel:+14155552671" className="text-gray-600 hover:text-brand-blue">
                  (415) 555-2671
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0" />
                <a href="mailto:info@rentconnect.com" className="text-gray-600 hover:text-brand-blue">
                  info@rentconnect.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} RentConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
