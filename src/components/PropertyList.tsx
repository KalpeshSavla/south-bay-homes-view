
import React from 'react';
import { Property } from '@/types/Property';
import PropertyCard from './PropertyCard';
import SearchInput from './SearchInput';

interface PropertyListProps {
  properties: Property[];
  onPropertySelect: (property: Property) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const PropertyList = ({ properties, onPropertySelect, searchQuery, onSearchChange }: PropertyListProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Featured Properties</h2>
        <p className="text-muted-foreground">Discover your dream home in California's South Bay</p>
      </div>
      
      <div className="max-w-md mx-auto">
        <SearchInput 
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Search by city or address..."
        />
      </div>
      
      {properties.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No properties found matching your search.</p>
          <p className="text-muted-foreground text-sm mt-2">Try searching for a different city or address.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              onClick={() => onPropertySelect(property)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyList;
