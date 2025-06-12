
import { Property } from '@/types/Property';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Family Home',
    address: '123 Elm Street',
    city: 'Palo Alto',
    price: 2850000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop'
    ],
    description: 'Beautiful 4-bedroom family home in the heart of Palo Alto. Recently renovated with modern amenities and stunning design.',
    lat: 37.4419,
    lng: -122.1430,
    yearBuilt: 2015,
    lotSize: '7,200 sqft',
    propertyType: 'house',
    status: 'for-sale'
  },
  {
    id: '2',
    title: 'Luxury Condo with Bay Views',
    address: '456 Ocean Drive',
    city: 'Mountain View',
    price: 1650000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop'
    ],
    description: 'Stunning luxury condo with panoramic bay views. Premium finishes throughout and world-class amenities.',
    lat: 37.3861,
    lng: -122.0839,
    yearBuilt: 2020,
    lotSize: 'N/A',
    propertyType: 'condo',
    status: 'for-sale'
  },
  {
    id: '3',
    title: 'Charming Townhouse',
    address: '789 Maple Lane',
    city: 'Sunnyvale',
    price: 1980000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2100,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'
    ],
    description: 'Charming 3-bedroom townhouse in a quiet neighborhood. Perfect for families with excellent schools nearby.',
    lat: 37.3688,
    lng: -122.0363,
    yearBuilt: 2010,
    lotSize: '3,500 sqft',
    propertyType: 'townhouse',
    status: 'for-sale'
  },
  {
    id: '4',
    title: 'Contemporary Home',
    address: '321 Pine Street',
    city: 'San Jose',
    price: 2200000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3200,
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop'
    ],
    description: 'Spacious contemporary home with open floor plan and premium finishes. Large backyard perfect for entertaining.',
    lat: 37.3382,
    lng: -121.8863,
    yearBuilt: 2018,
    lotSize: '8,000 sqft',
    propertyType: 'house',
    status: 'for-sale'
  },
  {
    id: '5',
    title: 'Cozy Starter Home',
    address: '654 Oak Avenue',
    city: 'Cupertino',
    price: 1750000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1650,
    images: [
      'https://images.unsplash.com/photo-1505843795480-5cfb3c03f6ff?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop'
    ],
    description: 'Cozy 3-bedroom home perfect for first-time buyers. Recently updated kitchen and bathrooms.',
    lat: 37.3230,
    lng: -122.0322,
    yearBuilt: 2005,
    lotSize: '5,500 sqft',
    propertyType: 'house',
    status: 'pending'
  },
  {
    id: '6',
    title: 'Executive Estate',
    address: '987 Hillside Drive',
    city: 'Los Altos',
    price: 4500000,
    bedrooms: 6,
    bathrooms: 5,
    sqft: 4800,
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop'
    ],
    description: 'Magnificent executive estate with luxury amenities throughout. Premium location with stunning views.',
    lat: 37.3852,
    lng: -122.1141,
    yearBuilt: 2012,
    lotSize: '12,000 sqft',
    propertyType: 'house',
    status: 'for-sale'
  }
];
