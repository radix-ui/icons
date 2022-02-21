import React from 'react';
import useDarkMode from 'use-dark-mode';
import { SunIcon } from '@radix-ui/react-icons';
import { IconButton, darkTheme } from '@modulz/design-system';
import { MoonIcon } from '@radix-ui/react-icons';

export const DarkModeButton = () => {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkTheme.className,
    classNameLight: 'theme-default',
  });

  return (
    <IconButton
      size="2"
      onClick={() => darkMode.toggle()}
      css={{
        position: 'fixed',
        top: 0,
        right: 0,
        margin: '$2',
        zIndex: '$4',
        '@bp2': {
          left: 0,
          right: 'auto',
        },
      }}
    >
      {darkMode.value ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
};
