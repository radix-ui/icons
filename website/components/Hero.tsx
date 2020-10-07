import React from 'react';
import useDarkMode from 'use-dark-mode';
import { darkThemeClass, styled, Box, Container, Grid, Text } from '@modulz/design-system';
import { ArrowLeftIcon } from '@modulz/radix-icons';

export const Hero = () => {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default'
  });

  const crimson = darkMode.value ? 'hsla(336, 79%, 48%, 0.5)' : 'hsla(336, 90%, 91%, 1.0)';
  const teal = darkMode.value ? 'hsla(174, 100%, 28%, 0.5)' : 'hsla(174, 75%, 84%, 1.0)';

  return (
    <Box
      css={{
        color: '$hiContrast',
        position: 'fixed',
        top: '10vh',
        left: 0,
        right: 0,
        bottom: 0,
        default: {
          fontSize: '80px'
        },
        bp2: {
          fontSize: '100px'
        },
        bp3: {
          fontSize: '130px'
        }
      }}
    >
      <Box
        css={{
          position: 'absolute',
          zIndex: '$2',
          top: '-0.1em',
          left: '50%',
          bp1: {
            transform: 'translateX(-80%)'
          },
          bp2: {
            transform: 'translateX(-110%)'
          }
        }}
      >
        <Text
          as="h1"
          css={{
            fontSize: '1.4em',
            fontWeight: 500,
            lineHeight: '0.835',
            letterSpacing: '-0.08em'
          }}
        >
          <Box as="span" css={{ display: 'block' }}>
            Radix
          </Box>
          <Box as="span" css={{ display: 'block', marginLeft: '0.47em' }}>
            Icons
          </Box>
        </Text>
      </Box>

      <Box
        css={{
          position: 'absolute',
          zIndex: '$1',
          userSelect: 'none',
          '-webkit-user-select': 'none' as any,
          pointerEvents: 'none',
          top: '0',
          width: '1em',
          height: '1em',
          left: '50%',
          bp1: {
            transform: 'translateX(1.25em)'
          },
          bp2: {
            transform: 'none'
          }
        }}
      >
        <Line color={crimson} angle="0deg" offset="0, 0.467em" />
        <Line color={crimson} angle="0deg" offset="0, 0.533em" />

        <Line color={crimson} angle="45deg" offset="-0.288em, 0" />
        <Line color={crimson} angle="45deg" offset="-0.288em, 0.090em" />

        <Line color={crimson} angle="-45deg" offset="0.622em, 0" />
        <Line color={crimson} angle="-45deg" offset="0.622em, 0.090em" />

        <Line color={crimson} angle="45deg" offset="0.242em, 0" />
        <Line color={crimson} angle="-45deg" offset="0.242em, 1em" />

        <Line color={teal} angle="0deg" offset="0, 0" />
        <Line color={teal} angle="0deg" offset="0, 1em" />

        <Line color={teal} angle="90deg" offset="0, 0" />
        <Line color={teal} angle="90deg" offset="1em, 0" />

        <ArrowLeftIcon style={{ display: 'block', position: 'relative', width: '1em', height: '1em' }} />

        <Text
          size="7"
          as="p"
          css={{
            position: 'absolute',
            lineHeight: '1.25',
            width: '9em',
            pointerEvents: 'auto',
            userSelect: 'text',
            default: {
              top: '0',
              opacity: 0.05
            },
            bp1: {
              top: 220,
              left: -340,
              opacity: 1
            },
            bp2: {
              top: 124,
              left: 0
            },
            bp3: {
              top: 190
            }
          }}
        >
          A crisp set of 15×15 icons designed by the Modulz team.
        </Text>
      </Box>
    </Box>
  );
};

type LineProps = {
  angle?: string;
  offset?: string;
  color?: string;
};

const Line = ({ angle = '0deg', offset = '0px, 0px', color }: LineProps) => {
  return (
    <Box
      css={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 'calc(100vw + 100vh)',
        height: '1px',
        transform: `translate3d(${offset}, 0) rotate(${angle}) translate3d(-50%, -50%, 0)`,
        transformOrigin: 'top left',
        backgroundColor: color
      }}
    />
  );
};
