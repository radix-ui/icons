import React from 'react';
import useDarkMode from 'use-dark-mode';
import { SunIcon } from '@radix-ui/react-icons';
import { darkThemeClass } from '@modulz/design-system';
import { ChromelessButton } from './ChromelessButton';
import { MoonIcon } from '@radix-ui/react-icons';

export const DarkModeButton = () => {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default',
  });

  return (
    <ChromelessButton
      onClick={() => darkMode.toggle()}
      css={{
        position: 'fixed',
        top: 0,
        right: 0,
        display: 'block',
        cursor: 'pointer',
        padding: '$2',
        margin: '$2',
        borderRadius: '$1',
        zIndex: '$4',
        color: '$hiContrast',
        backgroundColor: '$loContrast',
        boxShadow: '0 0 0 1px $gray400',
        '&:hover': {
          boxShadow: '0 0 0 1px $gray600',
        },
        '&:active': {
          boxShadow: '0 0 0 2px $gray700',
        },
        '&:focus': {
          boxShadow: '0 0 0 2px $gray700',
        },
        bp2: {
          left: 0,
          right: 'auto',
        },
      }}
    >
      {darkMode.value ? <MoonIcon /> : <SunIcon />}
    </ChromelessButton>
  );
};
