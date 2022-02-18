import React from 'react';
import { Box } from '@modulz/design-system';
import { AllIcons } from '../components/AllIcons';
import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';

export const MainContent = () => {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <>
      <SearchBar value={searchValue} onValueChange={setSearchValue} />
      <SearchResults value={searchValue} />
      <Box css={{ display: searchValue ? 'none' : 'block' }}>
        <AllIcons />
      </Box>
    </>
  );
};
