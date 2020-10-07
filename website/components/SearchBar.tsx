import React from 'react';
import useDarkMode from 'use-dark-mode';
import { Box, Container, Grid, Flex, Text, darkThemeClass, styled } from '@modulz/design-system';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import AutosizeInput from 'react-input-autosize';

export const SearchBar = () => {
  const inputRef = React.useRef<AutosizeInput | null>(null);
  const [value, setValue] = React.useState('');

  return (
    <Flex css={{ alignItems: 'center', justifyContent: 'center', padding: '$1' }}>
      <Flex as="span" css={{ marginRight: '$1', color: '$gray600' }}>
        <MagnifyingGlassIcon />
      </Flex>
      <Box
        css={{
          input: {
            background: 'transparent',
            border: 0,
            outline: 0,
            padding: '0 $5',
            margin: '0 -$5',
            boxShadow: 'none',
            appearance: 'none',
            fontFamily: 'inherit',
            minWidth: 45,
            height: '$5',
            fontSize: '$2',
            '&::placeholder': {
              color: '$gray600'
            }
          }
        }}
      >
        <AutosizeInput
          ref={inputRef as any}
          placeholder="Search"
          name="form-field-name"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </Box>
    </Flex>
  );
};
