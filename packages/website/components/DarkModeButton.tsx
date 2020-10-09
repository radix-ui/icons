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
        zIndex: '$4',
        color: '$hiContrast',
        '&:hover': {
          backgroundColor: '$gray300',
        },
        '&:active, &:focus': {
          boxShadow: '0 0 0 2px $gray700',
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
