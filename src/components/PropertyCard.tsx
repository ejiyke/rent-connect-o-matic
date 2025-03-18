
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bed, Bath, Square, MapPin, Star } from 'lucide-react';

export interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  imageUrl: string;
  featured?: boolean;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { id, title, address, price, bedrooms, bathrooms, area, type, imageUrl, featured } = property;
  
  return (
    <Link to={`/properties/${id}`}>
      <Card className="overflow-hidden h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full property-card-image"
          />
          {featured && (
            <Badge className="absolute top-2 right-2 bg-brand-orange">
              Featured
            </Badge>
          )}
          <Badge className="absolute top-2 left-2 bg-white text-brand-darkBlue">
            {type}
          </Badge>
        </div>
        
        <CardContent className="pt-4">
          <h3 className="font-heading font-semibold text-lg truncate">{title}</h3>
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
            <span className="truncate">{address}</span>
          </div>
          <div className="mt-3 text-xl font-semibold text-brand-blue">
            ${price.toLocaleString()}<span className="text-sm text-gray-500 font-normal">/month</span>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="flex items-center text-gray-600">
              <Bed className="h-4 w-4 mr-1.5" /> 
              <span>{bedrooms}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Bath className="h-4 w-4 mr-1.5" /> 
              <span>{bathrooms}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Square className="h-4 w-4 mr-1.5" /> 
              <span>{area} ft²</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
