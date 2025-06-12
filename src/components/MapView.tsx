
import React from 'react';
import { Property } from '@/types/Property';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface MapViewProps {
  properties: Property[];
  onPropertySelect: (property: Property) => void;
}

const MapView = ({ properties, onPropertySelect }: MapViewProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Property Locations</h2>
        <p className="text-muted-foreground">Interactive map view coming soon! For now, explore properties by location:</p>
      </div>
      
      {/* Temporary map placeholder with property locations */}
      <div className="bg-muted/30 rounded-lg p-8 text-center space-y-4">
        <MapPin className="h-16 w-16 mx-auto text-primary" />
        <h3 className="text-xl font-semibold">Interactive Map</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Google Maps integration will be available soon. Meanwhile, browse properties grouped by city below.
        </p>
      </div>

      {/* Group properties by city */}
      <div className="space-y-6">
        {Object.entries(
          properties.reduce((acc, property) => {
            if (!acc[property.city]) {
              acc[property.city] = [];
            }
            acc[property.city].push(property);
            return acc;
          }, {} as Record<string, Property[]>)
        ).map(([city, cityProperties]) => (
          <div key={city} className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              {city} ({cityProperties.length} properties)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cityProperties.map((property) => (
                <Card 
                  key={property.id}
                  className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  onClick={() => onPropertySelect(property)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <img 
                        src={property.images[0]} 
                        alt={property.title}
                        className="w-16 h-16 rounded object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm line-clamp-1">{property.title}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-1">{property.address}</p>
                        <p className="text-sm font-bold text-primary mt-1">{formatPrice(property.price)}</p>
                        <p className="text-xs text-muted-foreground">
                          {property.bedrooms}bd • {property.bathrooms}ba • {property.sqft.toLocaleString()}sqft
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapView;
