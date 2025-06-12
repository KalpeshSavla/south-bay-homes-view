
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, List, Map } from 'lucide-react';

interface HeaderProps {
  view: 'list' | 'map';
  onViewChange: (view: 'list' | 'map') => void;
  onBack?: () => void;
}

const Header = ({ view, onViewChange, onBack }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {onBack && (
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <h1 className="text-xl font-bold text-primary">South Bay Homes</h1>
        </div>
        
        {!onBack && (
          <div className="flex gap-2">
            <Button 
              variant={view === 'list' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => onViewChange('list')}
              className="flex items-center gap-2"
            >
              <List className="h-4 w-4" />
              List
            </Button>
            <Button 
              variant={view === 'map' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => onViewChange('map')}
              className="flex items-center gap-2"
            >
              <Map className="h-4 w-4" />
              Map
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
