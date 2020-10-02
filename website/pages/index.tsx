import React from 'react';
import fs from 'fs';
import path from 'path';

import { Box, Container, Flex, Text } from '@modulz/design-system';

export default function Home(props) {
  return (
    <Box css={{ py: '$9' }}>
      <Container size="3" css={{ textAlign: 'center', mb: '$4' }}>
        <Text
          as="h1"
          size={{ initial: '8', bp2: '9' }}
          css={{
            fontWeight: 500,
            lineHeight: '35px',
            bp2: {
              lineHeight: '55px'
            }
          }}
        >
          Radix Icons
        </Text>

        <Flex
          css={{
            mt: '$9',
            gap: '$6',
            flexWrap: 'wrap'
          }}
        >
          {props.icons.map(({ filename, content }) => (
            <Box key={filename} css={{ color: '$hiContrast' }}>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}

export async function getStaticProps(context) {
  const iconDirectory = path.resolve(process.cwd(), '../packages/radix-icons/icons/15');
  const filenames = fs.readdirSync(iconDirectory);

  const icons = filenames.map(filename => {
    const filePath = path.join(iconDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
      filename,
      content: fileContents
    };
  });

  // By returning { props: icons }, the Blog component
  // will receive `icons` as a prop at build time
  return {
    props: {
      icons
    }
  };
}
