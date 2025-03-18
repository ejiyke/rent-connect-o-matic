
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home as HomeIcon, Building2, Users, Shield, MapPin, Building } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import PropertyCard, { Property } from '@/components/PropertyCard';
import AgentCard, { Agent } from '@/components/AgentCard';
import Footer from '@/components/Footer';

const Home = () => {
  // Sample data
  const featuredProperties: Property[] = [
    {
      id: 1,
      title: "Modern Apartment with City View",
      address: "123 Downtown Ave, San Francisco, CA",
      price: 2800,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      type: "Apartment",
      imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Spacious Family Home",
      address: "456 Suburban St, Oakland, CA",
      price: 3500,
      bedrooms: 4,
      bathrooms: 3,
      area: 2200,
      type: "House",
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      featured: true
    },
    {
      id: 3,
      title: "Luxury Condo in Marina District",
      address: "789 Marina Blvd, San Francisco, CA",
      price: 4200,
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      type: "Condo",
      imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      featured: false
    }
  ];

  const topAgents: Agent[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "City Real Estate",
      phone: "(415) 555-1234",
      email: "sarah@cityrealestate.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      propertyCount: 24
    },
    {
      id: 2,
      name: "Michael Thompson",
      company: "Urban Properties",
      phone: "(415) 555-5678",
      email: "michael@urbanproperties.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      propertyCount: 18
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Bay Rentals",
      phone: "(415) 555-9012",
      email: "emily@bayrentals.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      propertyCount: 31
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-section flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Find Your Perfect Rental Home
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Connect with trusted agents and discover properties that match your lifestyle and budget.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <SearchBar variant="hero" />
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">How RentConnect Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We simplify the rental process by connecting renters with professional agents who can help them find the perfect home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto mb-4">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Browse Properties</h3>
              <p className="text-gray-600">
                Search thousands of rental properties that match your criteria and preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="feature-icon mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Connect with Agents</h3>
              <p className="text-gray-600">
                Directly contact experienced rental agents who can guide you through the process.
              </p>
            </div>
            
            <div className="text-center">
              <div className="feature-icon mx-auto mb-4">
                <HomeIcon className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Schedule Viewings</h3>
              <p className="text-gray-600">
                Book property tours at times that work for your schedule.
              </p>
            </div>
            
            <div className="text-center">
              <div className="feature-icon mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Secure Your Rental</h3>
              <p className="text-gray-600">
                Complete the rental process with confidence and professional support.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">Featured Properties</h2>
              <p className="text-gray-600">
                Handpicked properties that you might love
              </p>
            </div>
            <Link to="/properties">
              <Button variant="outline" className="gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Are You a Housing Agent?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our platform to connect with potential renters and list your properties to thousands of interested individuals.
          </p>
          <Button className="bg-white text-brand-blue hover:bg-gray-100 text-lg px-8 py-6">
            Join as an Agent
          </Button>
        </div>
      </section>
      
      {/* Top Agents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">Top Agents</h2>
              <p className="text-gray-600">
                Professional agents ready to help you find your perfect rental
              </p>
            </div>
            <Link to="/agents">
              <Button variant="outline" className="gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topAgents.map(agent => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Popular Rental Locations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore top rental neighborhoods in the San Francisco Bay Area
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "San Francisco", count: 243, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" },
              { name: "Oakland", count: 157, image: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
              { name: "Berkeley", count: 86, image: "https://images.unsplash.com/photo-1588072915771-dce287ecb7d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" },
              { name: "San Jose", count: 195, image: "https://images.unsplash.com/photo-1568396885172-2d8f0f9b2d8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" }
            ].map(location => (
              <div key={location.name} className="relative rounded-lg overflow-hidden h-64 group">
                <img 
                  src={location.image} 
                  alt={location.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-heading font-semibold text-xl text-white mb-1">{location.name}</h3>
                  <div className="flex items-center text-white/80">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{location.count} properties</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
