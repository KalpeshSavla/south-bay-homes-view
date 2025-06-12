
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput = ({ value, onChange, placeholder = "Search by city or address..." }: SearchInputProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10"
      />
    </div>
  );
};

export default SearchInput;
