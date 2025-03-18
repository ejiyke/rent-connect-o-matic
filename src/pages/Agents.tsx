
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Building } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AgentCard, { Agent } from '@/components/AgentCard';

const Agents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample agents data
  const agentsData: Agent[] = [
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
    },
    {
      id: 4,
      name: "David Wilson",
      company: "Premier Properties",
      phone: "(415) 555-3456",
      email: "david@premierproperties.com",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      propertyCount: 15
    },
    {
      id: 5,
      name: "Jennifer Martinez",
      company: "Golden Gate Realty",
      phone: "(415) 555-7890",
      email: "jennifer@goldengaterealty.com",
      image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      propertyCount: 28
    },
    {
      id: 6,
      name: "Robert Chen",
      company: "Bay Area Properties",
      phone: "(415) 555-2345",
      email: "robert@bayareaproperties.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      propertyCount: 20
    },
    {
      id: 7,
      name: "Amanda Taylor",
      company: "Elite Rentals",
      phone: "(415) 555-6789",
      email: "amanda@eliterentals.com",
      image: "https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      propertyCount: 22
    },
    {
      id: 8,
      name: "Jonathan Lee",
      company: "Urban Living",
      phone: "(415) 555-0123",
      email: "jonathan@urbanliving.com",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      propertyCount: 17
    }
  ];
  
  // Filter agents based on search term
  const filteredAgents = agentsData.filter(agent => 
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    agent.company.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Meet Our Rental Agents
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our professional agents are ready to help you find the perfect rental home that matches your needs and preferences.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search agents by name or company..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Agents Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredAgents.map(agent => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
          
          {/* No Results */}
          {filteredAgents.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No agents found</h3>
              <p className="text-gray-500 mb-6">
                We couldn't find any agents matching your search. Try different keywords.
              </p>
              <Button onClick={() => setSearchTerm('')}>Clear Search</Button>
            </div>
          )}
          
          {/* Join as Agent CTA */}
          <div className="bg-brand-blue text-white rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Are You a Housing Agent?
                </h2>
                <p className="text-white/90 mb-6">
                  Join our platform to connect with potential renters, list your properties, and grow your business with RentConnect.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Building className="h-5 w-5 mr-3 text-brand-orange flex-shrink-0" />
                    <p>List unlimited rental properties on our platform</p>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-brand-orange flex-shrink-0" />
                    <p>Get discovered by thousands of potential renters</p>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <Button className="bg-white text-brand-blue hover:bg-gray-100 text-lg px-8 py-6">
                  Apply to Join
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Agents;
