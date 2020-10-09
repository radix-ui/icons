import React from 'react';
import useDarkMode from 'use-dark-mode';
import { SunIcon } from '@modulz/radix-icons';
import { darkThemeClass } from '@modulz/design-system';
import { ChromelessButton } from './ChromelessButton';

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
        zIndex: '1000',
        color: '$hiContrast',
        mixBlendMode: darkMode.value ? 'screen' : 'multiply',
        '&:hover': {
          backgroundColor: darkMode.value ? 'hsl(174, 65%, 14%)' : '$teal300',
        },
        '&:active, &:focus': {
          boxShadow: darkMode.value ? '0 0 0 2px hsl(174, 100%, 28%)' : '0 0 0 2px $teal700',
        },
        bp2: {
          left: 0,
          right: 'auto',
        },
      }}
    >
      <SunIcon />
    </ChromelessButton>
  );
};
