
import React, { useState } from 'react';
import Header from '@/components/Header';
import PropertyList from '@/components/PropertyList';
import PropertyDetail from '@/components/PropertyDetail';
import MapView from '@/components/MapView';
import { Property } from '@/types/Property';
import { mockProperties } from '@/data/mockProperties';

const Index = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [view, setView] = useState<'list' | 'map'>('list');

  return (
    <div className="min-h-screen bg-background">
      <Header 
        view={view} 
        onViewChange={setView}
        onBack={selectedProperty ? () => setSelectedProperty(null) : undefined}
      />
      
      <main className="container mx-auto px-4 pt-20 pb-8">
        {selectedProperty ? (
          <PropertyDetail 
            property={selectedProperty} 
            onBack={() => setSelectedProperty(null)} 
          />
        ) : view === 'list' ? (
          <PropertyList 
            properties={mockProperties}
            onPropertySelect={setSelectedProperty}
          />
        ) : (
          <MapView 
            properties={mockProperties}
            onPropertySelect={setSelectedProperty}
          />
        )}
      </main>
    </div>
  );
};

export default Index;
