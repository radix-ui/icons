import React from 'react';
import useDarkMode from 'use-dark-mode';
import { Box, Flex, darkThemeClass } from '@modulz/design-system';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import AutosizeInput from 'react-input-autosize';

type SearchBarProps = {
  value: string;
  onValueChange: (value: string) => void;
};

export const SearchBar = ({ value, onValueChange }: SearchBarProps) => {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default',
  });

  // We use a lighter backplate for dark mode, so we want a lighter border color there
  const border = darkMode.value ? '1px solid $gray400' : '1px solid $gray300';
  const inputRef = React.useRef<AutosizeInput | null>(null);

  return (
    <Flex css={{ alignItems: 'center', justifyContent: 'center', borderBottom: border }}>
      <Flex as="span" css={{ marginRight: '$1', color: '$gray600' }}>
        <MagnifyingGlassIcon />
      </Flex>
      <Box
        css={{
          input: {
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
              color: '$gray600',
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
          onChange={event => onValueChange(event.target.value)}
        />
      </Box>
    </Flex>
  );
};
