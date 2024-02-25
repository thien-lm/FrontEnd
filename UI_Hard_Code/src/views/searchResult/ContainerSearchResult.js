import React, { useState } from 'react';
import SearchResultComponent from './SearchResultComponent';
import Navigation from '../../components/Navigation/Navigation';
import SearchBar from '../../components/Navigation/SearchBar/SearchBar';

const ParentComponent = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (input) => {
    setSearchInput(input);
  };

  return (
    <div>
      <Navigation onSearch={handleSearch} />
      <SearchResultComponent input={searchInput} />
    </div>
  );
};

export default ParentComponent;