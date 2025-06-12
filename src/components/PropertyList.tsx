
import React from 'react';
import { Property } from '@/types/Property';
import PropertyCard from './PropertyCard';

interface PropertyListProps {
  properties: Property[];
  onPropertySelect: (property: Property) => void;
}

const PropertyList = ({ properties, onPropertySelect }: PropertyListProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Featured Properties</h2>
        <p className="text-muted-foreground">Discover your dream home in California's South Bay</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard 
            key={property.id} 
            property={property} 
            onClick={() => onPropertySelect(property)}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
