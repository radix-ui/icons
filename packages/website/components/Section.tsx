import React from 'react';
import { Box } from '@modulz/design-system';

type SectionProps = {
  children?: React.ReactNode;
};

export const Section: React.FunctionComponent = ({ children }: SectionProps) => {
  return (
    <Box
      css={{
        borderTop: '1px solid $gray500',
        default: {
          padding: '$4 $3 $6',
        },
        bp1: {
          padding: '$5 $6 $6',
        },
      }}
    >
      <Box css={{ bp2: { width: '65%' } }}>{children}</Box>
    </Box>
  );
};
