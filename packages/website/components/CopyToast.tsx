import React from 'react';
import { Portal } from '@interop-ui/react-portal';
import { Box, Text } from '@modulz/design-system';

type CopyToastVisibilityValue = {
  icon: string;
  setIcon: (newIcon: string) => void;
  isVisible: boolean;
  setIsVisible: () => void;
};

export const CopyToastVisibility = React.createContext<CopyToastVisibilityValue>({
  icon: '',
  setIcon: () => undefined,
  isVisible: false,
  setIsVisible: () => undefined,
});

export const CopyToast = () => {
  return (
    <CopyToastVisibility.Consumer>
      {({ icon, isVisible }) => (
        <Portal>
          <Box
            css={{
              display: 'flex',
              justifyContent: 'center',
              position: 'fixed',
              bottom: 0,
              width: '100%',
              margin: '$5',
              maxWidth: `calc(100vw - 50px)`,
              pointerEvents: 'none',
            }}
          >
            <Box
              css={{
                pointerEvents: 'auto',
                WebkitUserSelect: 'none',
                userSelect: 'none',
                textAlign: 'center',
                backgroundColor: '$hiContrast',
                padding: '$2 $3',
                borderRadius: '$2',
                boxShadow: '0 3px 20px -5px rgba(0, 0, 0, 0.4)',
                opacity: Number(isVisible),
                transitionProperty: 'opacity',
                transitionDuration: isVisible ? '50ms' : '300ms',
              }}
            >
              <Text as="p" size="3" css={{ color: '$loContrast', lineHeight: '20px', letterSpacing: '-0.015em' }}>
                Copied to clipboard
                <Box
                  as="span"
                  dangerouslySetInnerHTML={{ __html: icon }}
                  css={{
                    display: 'inline-flex',
                    marginLeft: '0.75em',
                    marginTop: 2,
                    verticalAlign: 'top',
                    justifyContent: 'center',
                  }}
                />
              </Text>
            </Box>
          </Box>
        </Portal>
      )}
    </CopyToastVisibility.Consumer>
  );
};
