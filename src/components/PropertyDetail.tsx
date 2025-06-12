
import React, { useState } from 'react';
import { Property } from '@/types/Property';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Bed, Bath, Maximize, MapPin, Calendar, Ruler, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyDetailProps {
  property: Property;
  onBack: () => void;
}

const PropertyDetail = ({ property, onBack }: PropertyDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'for-sale': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'sold': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Image Gallery */}
      <div className="relative">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <img 
            src={property.images[currentImageIndex]} 
            alt={`${property.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {property.images.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-80 hover:opacity-100"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-80 hover:opacity-100"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
          
          <Badge className={`absolute top-4 right-4 ${getStatusColor(property.status)}`}>
            {property.status.replace('-', ' ').toUpperCase()}
          </Badge>
        </div>
        
        {/* Image thumbnails */}
        {property.images.length > 1 && (
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-16 rounded overflow-hidden border-2 transition-all ${
                  index === currentImageIndex ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Property Info */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{property.title}</h1>
          <div className="flex items-center text-muted-foreground mb-4">
            <MapPin className="h-4 w-4 mr-2" />
            {property.address}, {property.city}
          </div>
          <div className="text-3xl font-bold text-primary">
            {formatPrice(property.price)}
          </div>
        </div>

        {/* Property Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Bed className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{property.bedrooms}</div>
              <div className="text-sm text-muted-foreground">Bedrooms</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Bath className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{property.bathrooms}</div>
              <div className="text-sm text-muted-foreground">Bathrooms</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Maximize className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{property.sqft.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Sq Ft</div>
            </CardContent>
          </Card>
          
          {property.yearBuilt && (
            <Card>
              <CardContent className="p-4 text-center">
                <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{property.yearBuilt}</div>
                <div className="text-sm text-muted-foreground">Year Built</div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Description */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">About This Property</h3>
            <p className="text-muted-foreground leading-relaxed">{property.description}</p>
            
            {property.lotSize && (
              <div className="mt-4 flex items-center gap-2">
                <Ruler className="h-4 w-4 text-primary" />
                <span className="text-sm">Lot Size: {property.lotSize}</span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PropertyDetail;
