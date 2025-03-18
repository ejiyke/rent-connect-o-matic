
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Sliders, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import PropertyCard, { Property } from '@/components/PropertyCard';
import Footer from '@/components/Footer';

// Sample property data
const allProperties: Property[] = [
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
  },
  {
    id: 4,
    title: "Charming Studio Downtown",
    address: "321 Market St, San Francisco, CA",
    price: 2100,
    bedrooms: 0,
    bathrooms: 1,
    area: 550,
    type: "Studio",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    featured: false
  },
  {
    id: 5,
    title: "Renovated Townhouse",
    address: "567 Hill Ave, Berkeley, CA",
    price: 3900,
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1950,
    type: "Townhouse",
    imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Modern 2BR Near Tech Hub",
    address: "789 Park Blvd, Palo Alto, CA",
    price: 3300,
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    type: "Apartment",
    imageUrl: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    featured: false
  }
];

const Properties = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [properties, setProperties] = useState<Property[]>(allProperties);
  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    type: searchParams.get('type') || '',
    minPrice: 0,
    maxPrice: 5000,
    bedrooms: '',
    bathrooms: '',
    furnished: false,
    petsAllowed: false,
    sortBy: 'recommended'
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Apply filters from URL params when component mounts
  useEffect(() => {
    const location = searchParams.get('location');
    const propertyType = searchParams.get('type');
    const price = searchParams.get('price');
    
    if (location || propertyType || price) {
      let updatedFilters = { ...filters };
      
      if (location) updatedFilters.location = location;
      if (propertyType) updatedFilters.type = propertyType;
      if (price) {
        const [min, max] = price.split('-').map(Number);
        if (!isNaN(min)) updatedFilters.minPrice = min;
        if (!isNaN(max)) updatedFilters.maxPrice = max;
      }
      
      setFilters(updatedFilters);
    }
  }, []);
  
  // Apply filters to properties
  useEffect(() => {
    let filtered = allProperties;
    
    if (filters.location) {
      filtered = filtered.filter(property => 
        property.address.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    if (filters.type) {
      filtered = filtered.filter(property => 
        property.type.toLowerCase() === filters.type.toLowerCase()
      );
    }
    
    filtered = filtered.filter(property => 
      property.price >= filters.minPrice && property.price <= filters.maxPrice
    );
    
    if (filters.bedrooms) {
      filtered = filtered.filter(property => 
        property.bedrooms >= Number(filters.bedrooms)
      );
    }
    
    if (filters.bathrooms) {
      filtered = filtered.filter(property => 
        property.bathrooms >= Number(filters.bathrooms)
      );
    }
    
    // Sort properties
    if (filters.sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }
    
    setProperties(filtered);
  }, [filters]);
  
  const handleFilterChange = (name: string, value: any) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  const clearFilters = () => {
    setFilters({
      location: '',
      type: '',
      minPrice: 0,
      maxPrice: 5000,
      bedrooms: '',
      bathrooms: '',
      furnished: false,
      petsAllowed: false,
      sortBy: 'recommended'
    });
    setSearchParams({});
  };
  
  const toggleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold mb-4">Find Your Rental Property</h1>
            <SearchBar />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Filter Sidebar */}
            <div className="w-full lg:w-1/4 hidden lg:block">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-heading font-semibold text-lg">Filters</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Clear All
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <div className="mb-6">
                      <Slider
                        defaultValue={[filters.minPrice, filters.maxPrice]}
                        max={5000}
                        step={100}
                        onValueChange={(value) => {
                          handleFilterChange('minPrice', value[0]);
                          handleFilterChange('maxPrice', value[1]);
                        }}
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="w-[45%]">
                        <Input
                          type="number"
                          placeholder="Min"
                          value={filters.minPrice}
                          onChange={(e) => handleFilterChange('minPrice', Number(e.target.value))}
                        />
                      </div>
                      <span className="text-gray-500 flex items-center">-</span>
                      <div className="w-[45%]">
                        <Input
                          type="number"
                          placeholder="Max"
                          value={filters.maxPrice}
                          onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Property Type */}
                  <div>
                    <h3 className="font-medium mb-3">Property Type</h3>
                    <Select 
                      value={filters.type} 
                      onValueChange={(value) => handleFilterChange('type', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Types</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="studio">Studio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Bedrooms */}
                  <div>
                    <h3 className="font-medium mb-3">Bedrooms</h3>
                    <Select 
                      value={filters.bedrooms} 
                      onValueChange={(value) => handleFilterChange('bedrooms', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Bathrooms */}
                  <div>
                    <h3 className="font-medium mb-3">Bathrooms</h3>
                    <Select 
                      value={filters.bathrooms} 
                      onValueChange={(value) => handleFilterChange('bathrooms', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Amenities */}
                  <div>
                    <h3 className="font-medium mb-3">Amenities</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="furnished"
                          checked={filters.furnished}
                          onCheckedChange={(checked) => 
                            handleFilterChange('furnished', checked === true)
                          }
                        />
                        <label
                          htmlFor="furnished"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Furnished
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="pets"
                          checked={filters.petsAllowed}
                          onCheckedChange={(checked) => 
                            handleFilterChange('petsAllowed', checked === true)
                          }
                        />
                        <label
                          htmlFor="pets"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Pets Allowed
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Filter Button */}
            <div className="lg:hidden flex justify-between items-center mb-4">
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={toggleMobileFilters}
              >
                <Sliders className="h-4 w-4" />
                Filters
              </Button>
              
              <Select 
                value={filters.sortBy} 
                onValueChange={(value) => handleFilterChange('sortBy', value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Mobile Filters Sidebar (Overlay) */}
            {mobileFiltersOpen && (
              <div className="fixed inset-0 z-50 flex lg:hidden">
                <div className="fixed inset-0 bg-black/20" onClick={toggleMobileFilters} />
                <div className="relative w-full max-w-xs ml-auto bg-white h-full p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-heading font-semibold text-lg">Filters</h2>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={toggleMobileFilters}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Filter content - same as desktop but in modal */}
                    {/* Price Range */}
                    <div>
                      <h3 className="font-medium mb-3">Price Range</h3>
                      <div className="mb-6">
                        <Slider
                          defaultValue={[filters.minPrice, filters.maxPrice]}
                          max={5000}
                          step={100}
                          onValueChange={(value) => {
                            handleFilterChange('minPrice', value[0]);
                            handleFilterChange('maxPrice', value[1]);
                          }}
                        />
                      </div>
                      <div className="flex justify-between">
                        <div className="w-[45%]">
                          <Input
                            type="number"
                            placeholder="Min"
                            value={filters.minPrice}
                            onChange={(e) => handleFilterChange('minPrice', Number(e.target.value))}
                          />
                        </div>
                        <span className="text-gray-500 flex items-center">-</span>
                        <div className="w-[45%]">
                          <Input
                            type="number"
                            placeholder="Max"
                            value={filters.maxPrice}
                            onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Property Type */}
                    <div>
                      <h3 className="font-medium mb-3">Property Type</h3>
                      <Select 
                        value={filters.type} 
                        onValueChange={(value) => handleFilterChange('type', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="All Types" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Types</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="condo">Condo</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="studio">Studio</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Bedrooms */}
                    <div>
                      <h3 className="font-medium mb-3">Bedrooms</h3>
                      <Select 
                        value={filters.bedrooms} 
                        onValueChange={(value) => handleFilterChange('bedrooms', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Any</SelectItem>
                          <SelectItem value="1">1+</SelectItem>
                          <SelectItem value="2">2+</SelectItem>
                          <SelectItem value="3">3+</SelectItem>
                          <SelectItem value="4">4+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Bathrooms */}
                    <div>
                      <h3 className="font-medium mb-3">Bathrooms</h3>
                      <Select 
                        value={filters.bathrooms} 
                        onValueChange={(value) => handleFilterChange('bathrooms', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Any</SelectItem>
                          <SelectItem value="1">1+</SelectItem>
                          <SelectItem value="2">2+</SelectItem>
                          <SelectItem value="3">3+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Amenities */}
                    <div>
                      <h3 className="font-medium mb-3">Amenities</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="mobile-furnished"
                            checked={filters.furnished}
                            onCheckedChange={(checked) => 
                              handleFilterChange('furnished', checked === true)
                            }
                          />
                          <label
                            htmlFor="mobile-furnished"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Furnished
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="mobile-pets"
                            checked={filters.petsAllowed}
                            onCheckedChange={(checked) => 
                              handleFilterChange('petsAllowed', checked === true)
                            }
                          />
                          <label
                            htmlFor="mobile-pets"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Pets Allowed
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <Button 
                      className="w-full bg-brand-blue hover:bg-brand-darkBlue"
                      onClick={toggleMobileFilters}
                    >
                      Apply Filters
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        clearFilters();
                        toggleMobileFilters();
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Properties Grid */}
            <div className="w-full lg:w-3/4">
              <div className="hidden lg:flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  <span className="font-medium text-black">{properties.length}</span> properties found
                </p>
                
                <Select 
                  value={filters.sortBy} 
                  onValueChange={(value) => handleFilterChange('sortBy', value)}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Applied Filters */}
              {(filters.location || filters.type || filters.bedrooms || filters.bathrooms || filters.furnished || filters.petsAllowed) && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {filters.location && (
                    <Badge variant="secondary" className="px-3 py-1 rounded-full flex items-center gap-2">
                      Location: {filters.location}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => handleFilterChange('location', '')}
                      />
                    </Badge>
                  )}
                  
                  {filters.type && (
                    <Badge variant="secondary" className="px-3 py-1 rounded-full flex items-center gap-2">
                      Type: {filters.type}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => handleFilterChange('type', '')}
                      />
                    </Badge>
                  )}
                  
                  {filters.bedrooms && (
                    <Badge variant="secondary" className="px-3 py-1 rounded-full flex items-center gap-2">
                      Bedrooms: {filters.bedrooms}+
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => handleFilterChange('bedrooms', '')}
                      />
                    </Badge>
                  )}
                  
                  {filters.bathrooms && (
                    <Badge variant="secondary" className="px-3 py-1 rounded-full flex items-center gap-2">
                      Bathrooms: {filters.bathrooms}+
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => handleFilterChange('bathrooms', '')}
                      />
                    </Badge>
                  )}
                  
                  {filters.furnished && (
                    <Badge variant="secondary" className="px-3 py-1 rounded-full flex items-center gap-2">
                      Furnished
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => handleFilterChange('furnished', false)}
                      />
                    </Badge>
                  )}
                  
                  {filters.petsAllowed && (
                    <Badge variant="secondary" className="px-3 py-1 rounded-full flex items-center gap-2">
                      Pets Allowed
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => handleFilterChange('petsAllowed', false)}
                      />
                    </Badge>
                  )}
                </div>
              )}
              
              {properties.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 border rounded-lg p-12 text-center">
                  <Search className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-semibold mb-2">No properties found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search filters to find more properties.</p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Properties;
