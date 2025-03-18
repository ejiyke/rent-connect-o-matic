
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  Calendar as CalendarIcon, 
  Phone, 
  Mail, 
  Heart, 
  Share2, 
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard, { Property } from '@/components/PropertyCard';

// Import property data from Properties page
import { useEffect } from 'react';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [message, setMessage] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Sample data for this property
  const property = {
    id: Number(id),
    title: "Modern Apartment with City View",
    description: "This beautiful apartment offers stunning city views and modern amenities. Located in a prime location, this 2-bedroom, 2-bathroom apartment features hardwood floors, stainless steel appliances, and a spacious living area. The building includes a fitness center, rooftop deck, and 24/7 security.",
    address: "123 Downtown Ave, San Francisco, CA",
    price: 2800,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: "Apartment",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    ],
    features: [
      "Central Air Conditioning",
      "In-unit Washer/Dryer",
      "Stainless Steel Appliances",
      "Hardwood Floors",
      "Balcony",
      "Walk-in Closets",
      "Fitness Center",
      "Pet Friendly",
      "24/7 Security"
    ],
    agent: {
      id: 1,
      name: "Sarah Johnson",
      company: "City Real Estate",
      phone: "(415) 555-1234",
      email: "sarah@cityrealestate.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    featured: true,
    yearBuilt: 2018,
    availableFrom: "Immediately",
    petPolicy: "Cats and small dogs allowed with deposit",
    parkingInfo: "1 assigned parking spot included"
  };
  
  // Sample similar properties
  const similarProperties: Property[] = [
    {
      id: 101,
      title: "Downtown Loft with High Ceilings",
      address: "456 Main St, San Francisco, CA",
      price: 2600,
      bedrooms: 1,
      bathrooms: 1,
      area: 950,
      type: "Loft",
      imageUrl: "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 102,
      title: "Luxury Condo with Bay Views",
      address: "789 Marina Blvd, San Francisco, CA",
      price: 3200,
      bedrooms: 2,
      bathrooms: 2,
      area: 1350,
      type: "Condo",
      imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    }
  ];
  
  const [mainImage, setMainImage] = useState(property.images[0]);
  
  const handleScheduleTour = () => {
    if (!selectedDate) {
      toast.error("Please select a date for your tour");
      return;
    }
    
    toast.success(`Tour scheduled for ${selectedDate.toLocaleDateString()}. The agent will contact you to confirm.`);
  };
  
  const handleContactAgent = () => {
    if (!message.trim()) {
      toast.error("Please enter a message for the agent");
      return;
    }
    
    toast.success("Your message has been sent to the agent. They will contact you shortly.");
    setMessage('');
  };
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    
    if (!isFavorite) {
      toast.success("Property added to favorites");
    } else {
      toast.info("Property removed from favorites");
    }
  };
  
  const handleShare = () => {
    // In a real app, this would use the Web Share API or copy to clipboard
    toast.success("Link copied to clipboard!");
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-brand-blue">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/properties" className="hover:text-brand-blue">Properties</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{property.title}</span>
          </div>
          
          {/* Property Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-heading font-bold mb-2">{property.title}</h1>
              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0" />
                <span>{property.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary">{property.type}</Badge>
                <p className="text-2xl font-semibold text-brand-blue">
                  ${property.price.toLocaleString()}<span className="text-sm text-gray-500 font-normal">/month</span>
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button 
                variant={isFavorite ? "default" : "outline"}
                className={isFavorite ? "bg-brand-orange hover:bg-brand-darkOrange gap-2" : "gap-2"}
                onClick={toggleFavorite}
              >
                <Heart className={`h-4 w-4 ${isFavorite ? 'fill-white' : ''}`} />
                {isFavorite ? "Saved" : "Save"}
              </Button>
              <Button variant="outline" className="gap-2" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
          
          {/* Property Images */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
            <div className="md:col-span-3 rounded-lg overflow-hidden">
              <img 
                src={mainImage} 
                alt={property.title} 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {property.images.map((image, index) => (
                <div 
                  key={index}
                  className={`rounded-lg overflow-hidden cursor-pointer border-2 ${mainImage === image ? 'border-brand-blue' : 'border-transparent'}`}
                  onClick={() => setMainImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${property.title} ${index + 1}`} 
                    className="w-full h-32 md:h-[116px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Property Overview / Details / Contact Tabs */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="w-full lg:w-2/3">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-heading font-semibold mb-4">Property Overview</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {property.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start">
                      <Bed className="h-5 w-5 mr-3 text-brand-blue flex-shrink-0" />
                      <div>
                        <p className="font-medium">Bedrooms</p>
                        <p className="text-gray-600">{property.bedrooms}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Bath className="h-5 w-5 mr-3 text-brand-blue flex-shrink-0" />
                      <div>
                        <p className="font-medium">Bathrooms</p>
                        <p className="text-gray-600">{property.bathrooms}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Square className="h-5 w-5 mr-3 text-brand-blue flex-shrink-0" />
                      <div>
                        <p className="font-medium">Area</p>
                        <p className="text-gray-600">{property.area} sq ft</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-4">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {property.features.slice(0, 6).map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-brand-blue" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="details">
                  <h2 className="text-2xl font-heading font-semibold mb-6">Property Details</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Property Type</span>
                        <span className="font-medium">{property.type}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Year Built</span>
                        <span className="font-medium">{property.yearBuilt}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Bedrooms</span>
                        <span className="font-medium">{property.bedrooms}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Bathrooms</span>
                        <span className="font-medium">{property.bathrooms}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Total Area</span>
                        <span className="font-medium">{property.area} sq ft</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Available From</span>
                        <span className="font-medium">{property.availableFrom}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Pet Policy</span>
                        <span className="font-medium">{property.petPolicy}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Parking</span>
                        <span className="font-medium">{property.parkingInfo}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Price</span>
                        <span className="font-medium">${property.price.toLocaleString()}/month</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Address</span>
                        <span className="font-medium">{property.address}</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="features">
                  <h2 className="text-2xl font-heading font-semibold mb-6">Property Features</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-md">
                        <CheckCircle2 className="h-5 w-5 mr-3 text-brand-blue" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="w-full lg:w-1/3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src={property.agent.image} 
                        alt={property.agent.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">{property.agent.name}</h3>
                      <p className="text-gray-500 text-sm">{property.agent.company}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <Button variant="outline" className="w-full justify-start gap-2" asChild>
                      <a href={`tel:${property.agent.phone}`}>
                        <Phone className="h-4 w-4 text-brand-blue" />
                        {property.agent.phone}
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2" asChild>
                      <a href={`mailto:${property.agent.email}`}>
                        <Mail className="h-4 w-4 text-brand-blue" />
                        {property.agent.email}
                      </a>
                    </Button>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-brand-blue" />
                      Schedule a Tour
                    </h4>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="mb-4"
                      disabled={(date) => date < new Date()}
                    />
                    <Button 
                      className="w-full bg-brand-orange hover:bg-brand-darkOrange"
                      onClick={handleScheduleTour}
                    >
                      Schedule Tour
                    </Button>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-brand-blue" />
                      Contact Agent
                    </h4>
                    <Textarea 
                      placeholder="I'm interested in this property..."
                      className="mb-4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button 
                      className="w-full"
                      onClick={handleContactAgent}
                    >
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Similar Properties */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-semibold mb-6">Similar Properties</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
