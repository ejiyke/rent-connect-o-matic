
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SearchBarProps {
  variant?: 'hero' | 'compact';
}

const SearchBar = ({ variant = 'compact' }: SearchBarProps) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build query params
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (propertyType) params.append('type', propertyType);
    if (priceRange) params.append('price', priceRange);
    
    // Navigate to properties page with search params
    navigate({
      pathname: '/properties',
      search: params.toString()
    });
  };

  const isHero = variant === 'hero';

  return (
    <form 
      onSubmit={handleSearch}
      className={`${isHero ? 'bg-white/95 p-6 rounded-lg shadow-lg' : 'bg-white shadow rounded-md'} w-full`}
    >
      <div className={`grid ${isHero ? 'gap-4 md:grid-cols-4' : 'gap-2 md:grid-cols-5'}`}>
        <div className={isHero ? 'md:col-span-4 lg:col-span-1' : 'md:col-span-2'}>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Location" 
              className="pl-10"
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
            />
          </div>
        </div>
        
        <div className="relative">
          <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="pl-10">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="pl-10">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1000">$0 - $1,000</SelectItem>
              <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
              <SelectItem value="2000-3000">$2,000 - $3,000</SelectItem>
              <SelectItem value="3000+">$3,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          type="submit" 
          className={`${isHero ? 'bg-brand-orange hover:bg-brand-darkOrange' : 'bg-brand-blue hover:bg-brand-darkBlue'} gap-2`}
        >
          <Search className="h-4 w-4" />
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
