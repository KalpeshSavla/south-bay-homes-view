
export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  images: string[];
  description: string;
  lat: number;
  lng: number;
  yearBuilt?: number;
  lotSize?: string;
  propertyType: 'house' | 'condo' | 'townhouse';
  status: 'for-sale' | 'pending' | 'sold';
}
