import React from 'react';
import { Box, Flex, Grid, Text } from '@modulz/design-system';
import Icons from '@modulz/radix-icons';

type SearchResultsProps = {
  value: string;
};

const iconNames = Object.keys(Icons).map(key => {
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
  const matchingNames = iconNames.filter(name => new RegExp(`\\b${cleanValue}`, 'gi').test(name));

  return (
    <Box>
      {value && matchingNames.length > 0 && (
        <Grid
          css={{
            alignContent: 'start',
            padding: '$5 $6',
            columnGap: '$8',
            rowGap: '$2',
            // Place icons on rows first, then add more columns as needed, up to 4 total.
            // And make sure there's at least 3 rows, so it looks nice.
            // If only there was something like a multi-column layout feature in CSS... 🙃
            gridAutoFlow: 'column',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: `repeat(${Math.max(Math.ceil(matchingNames.length / 4), 3)}, auto)`,
          }}
        >
          {matchingNames.map(name => (
            <Flex css={{ pb: '$3', alignItems: 'center' }}>
              <Flex css={{ mr: '$1', p: '$1' }}>
                {React.createElement(Object.values(Icons)[iconNames.indexOf(name)])}
              </Flex>
              <Text size="2">{name}</Text>
            </Flex>
          ))}
        </Grid>
      )}
      {!matchingNames.length && (
        <Flex css={{ alignItems: 'center', justifyContent: 'center', minHeight: 300, padding: '$5 $6' }}>
          <Text size="2" css={{ textAlign: 'center', lineHeight: '20px' }}>
            No icons for <Text css={{ fontWeight: 500 }}>{value}</Text>
          </Text>
        </Flex>
      )}
    </Box>
  );
};
