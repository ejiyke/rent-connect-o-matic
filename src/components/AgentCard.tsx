
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Home } from 'lucide-react';

export interface Agent {
  id: number;
  name: string;
  company: string;
  phone: string;
  email: string;
  image: string;
  propertyCount: number;
}

interface AgentCardProps {
  agent: Agent;
}

const AgentCard = ({ agent }: AgentCardProps) => {
  const { id, name, company, phone, email, image, propertyCount } = agent;
  
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md h-full">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="text-center pt-6 pb-4 px-4 flex-grow">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <h3 className="font-heading font-semibold text-lg mb-1">{name}</h3>
          <p className="text-gray-500 text-sm mb-2">{company}</p>
          <div className="flex items-center justify-center text-sm text-gray-600 mb-4">
            <Home className="h-4 w-4 mr-1.5 text-brand-blue" />
            <span>{propertyCount} Properties</span>
          </div>
          
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to={`tel:${phone}`}>
                <Phone className="h-4 w-4 mr-2 text-brand-blue" />
                {phone}
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to={`mailto:${email}`}>
                <Mail className="h-4 w-4 mr-2 text-brand-blue" />
                {email}
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-auto">
          <Link to={`/agents/${id}`} className="block">
            <Button className="w-full rounded-t-none bg-brand-blue hover:bg-brand-darkBlue">
              View Profile
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentCard;
