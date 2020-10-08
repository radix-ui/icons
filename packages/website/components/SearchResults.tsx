import React from 'react';
import { Box, Flex, Grid, Text, styled } from '@modulz/design-system';
import * as Icons from '@modulz/radix-icons';
import { CopyToastVisibility } from './CopyToast';

type SearchResultsProps = {
  value: string;
};

const GhostButton = styled('button', {
  margin: 0,
  border: 0,
  outline: 0,
  fontFamily: 'inherit',
  color: 'inherit',
  display: 'block',
  width: '100%',
  appearance: 'none',
  background: 'transparent',
  cursor: 'pointer',
  padding: '$2',
  borderRadius: '$2',
  '&:active, &:focus': {
    boxShadow: '0 0 0 2px $teal700',
  },
  '&:hover': {
    backgroundColor: '$teal300',
  },
  svg: {
    display: 'block',
  },
});

const iconNames = Object.keys(Icons).map((key) => {
  switch (key) {
    // Logos using original PascalCase naming can't be automated
    case 'GitHubLogoIcon':
      return 'GitHub Logo';

    // Naïve UpperCamelCaseIcon to Title Case conversion otherwise
    default:
      return key.replace(/Icon$/, '').replace(/(.)([0-9A-Z])/g, '$1 $2');
  }
});

export const SearchResults = ({ value }: SearchResultsProps) => {
  const cleanValue = value.trim().replace(/\s/g, ' ');
  const matchingNames = iconNames.filter((name) => new RegExp(`\\b${cleanValue}`, 'gi').test(name));

  return (
    <CopyToastVisibility.Consumer>
      {({ setIcon, setIsVisible }) => (
        <Box>
          {value && matchingNames.length > 0 && (
            <Grid
              css={{
                rowGap: '$2',
                alignContent: 'start',
                default: {
                  padding: '$2 $3',
                },
                bp1: {
                  columnGap: '$6',
                  padding: '$5 $6',
                  gridAutoFlow: 'column',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gridTemplateRows: `repeat(${Math.max(Math.ceil(matchingNames.length / 2), 3)}, auto)`,
                },
                bp2: {
                  // Place icons on rows first, then add more columns as needed, up to 4 total.
                  // And make sure there's at least 3 rows, so it looks nice.
                  // If only there was something like a multi-column layout feature in CSS... 🙃
                  gridAutoFlow: 'column',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gridTemplateRows: `repeat(${Math.max(Math.ceil(matchingNames.length / 4), 3)}, auto)`,
                  columnGap: '$2',
                },
              }}
            >
              {matchingNames.map((name) => (
                <Box css={{ minWidth: 0 }}>
                  <GhostButton
                    onClick={(event: React.MouseEvent) => {
                      const svg = event.currentTarget.querySelector('svg');
                      const code = svg && svg.parentElement ? svg.parentElement.innerHTML : null;

                      // Copy code to clipboard via a hidden textarea element
                      if (code) {
                        // Temporary shim until a proper focus-visible handler is added
                        if (document.activeElement instanceof HTMLButtonElement) {
                          document.activeElement.blur();
                        }

                        const textarea = document.createElement('textarea');
                        textarea.value = code.toString();
                        textarea.setAttribute('readonly', '');
                        textarea.style.position = 'absolute';
                        textarea.style.left = '-9999px';
                        textarea.style.visibility = 'hidden';
                        document.body.appendChild(textarea);
                        textarea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textarea);

                        // Show CopyToast and set latest icon
                        setIsVisible();
                        setIcon(code);
                      }
                    }}
                  >
                    <Flex
                      as="span"
                      css={{
                        alignItems: 'center',
                        justifyContent: 'start',
                        whiteSpace: 'nowrap',
                        minWidth: 0,
                      }}
                    >
                      <Flex as="span" css={{ mr: '$1', p: '$1', flex: '0' }}>
                        {React.createElement(Object.values(Icons)[iconNames.indexOf(name)])}
                      </Flex>
                      <Text
                        size="2"
                        css={{
                          flexGrow: 0,
                          flexShrink: 1,
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          minWidth: 0,
                          lineHeight: '25px',
                        }}
                      >
                        {name}
                      </Text>
                    </Flex>
                  </GhostButton>
                </Box>
              ))}
            </Grid>
          )}
          {!matchingNames.length && (
            <Flex css={{ alignItems: 'center', justifyContent: 'center', minHeight: 300, padding: '$5 $6' }}>
              <Text size="2" css={{ textAlign: 'center', lineHeight: '20px' }}>
                No icons for <Text css={{ display: 'inline', fontWeight: 500 }}>{value}</Text>
              </Text>
            </Flex>
          )}
        </Box>
      )}
    </CopyToastVisibility.Consumer>
  );
};
