import React from 'react';
import useDarkMode from 'use-dark-mode';
import { Box, Text } from '@modulz/design-system';
import { ArrowLeftIcon } from '@modulz/radix-icons';

export const Hero = () => {
  const darkMode = useDarkMode();

  // We haven't added these colors to dark mode theme yet
  const crimson = darkMode.value ? 'hsla(336, 79%, 48%, 0.5)' : '$crimson300';
  const teal = darkMode.value ? 'hsla(174, 100%, 28%, 0.5)' : '$teal400';

  return (
    <Box
      css={{
        position: 'fixed',
        top: '10vh',
        left: 0,
        right: 0,
        bottom: 0,
        userSelect: 'none',
        WebkitUserSelect: 'none',
        default: {
          fontSize: '80px',
        },
        bp2: {
          fontSize: '100px',
        },
        bp3: {
          fontSize: '130px',
        },
      }}
    >
      <Box
        css={{
          position: 'absolute',
          zIndex: '$2',
          top: '-0.1em',
          left: '50%',
          bp1: {
            transform: 'translate(-80%, 0.5px)',
          },
          bp2: {
            transform: 'translate(-110%, 0.5px)',
          },
          bp3: {
            transform: 'translate(-110%, -0.5px)',
          },
        }}
      >
        <Text
          as="h1"
          css={{
            fontSize: '1.4em',
            fontWeight: 500,
            lineHeight: '0.835',
            letterSpacing: '-0.08em',
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
          pointerEvents: 'none',
          top: '0',
          width: '1em',
          height: '1em',
          left: '50%',
          bp1: {
            transform: 'translateX(1.25em)',
          },
          bp2: {
            transform: 'none',
          },
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

        <ArrowLeftIcon style={{ position: 'relative', width: '1em', height: '1em' }} />

        <Text
          size="7"
          as="p"
          css={{
            position: 'absolute',
            lineHeight: '1.25',
            width: '9em',
            pointerEvents: 'auto',
            WebkitUserSelect: 'text',
            userSelect: 'text',
            fontVariantNumeric: 'proportional-nums',
            default: {
              top: '0',
              opacity: 0.05,
            },
            bp1: {
              top: 220,
              left: -340,
              opacity: 1,
            },
            bp2: {
              top: 124,
              left: 0,
            },
            bp3: {
              top: 190,
            },
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
        width: 'calc(200vw + 200vh)',
        height: '1px',
        transform: `translate3d(${offset}, 0) rotate(${angle}) translate3d(-50%, -50%, 0)`,
        transformOrigin: 'top left',
        backgroundColor: color,
      }}
    />
  );
};
