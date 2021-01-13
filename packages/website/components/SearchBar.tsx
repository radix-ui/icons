import React from 'react';
import { Box, Flex, darkThemeClass } from '@modulz/design-system';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import AutosizeInput from 'react-input-autosize';

type SearchBarProps = {
  value: string;
  onValueChange: (value: string) => void;
};

export const SearchBar = ({ value, onValueChange }: SearchBarProps) => {
  const inputRef = React.useRef<AutosizeInput | null>(null);

  return (
    <Flex css={{ alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid $gray500' }}>
      <Flex as="span" css={{ marginRight: '$1', color: '$gray800' }}>
        <MagnifyingGlassIcon />
      </Flex>
      <Box
        css={{
          input: {
            color: 'inherit',
            boxSizing: 'content-box',
            background: 'transparent',
            border: 0,
            outline: 0,
            padding: '0 150px',
            margin: '0 -150px',
            boxShadow: 'none',
            appearance: 'none',
            fontFamily: 'inherit',
            minWidth: 45,
            maxWidth: '600px',
            height: '$6',
            fontSize: '$2',
            '&::placeholder': {
              color: '$gray800',
            },
          },
        }}
      >
        <AutosizeInput
          autoComplete="off"
          ref={inputRef as any}
          placeholder="Search"
          name="form-field-name"
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
          autoFocus
        />
      </Box>
    </Flex>
  );
};
