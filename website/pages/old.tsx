import React from 'react';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Text } from '../components/Text';
import { Link } from '../components/Link';

function Home() {
  return (
    <Box>
      <Grid
        css={{
          padding: '$5',
          gridTemplateColumns: '1',
          gap: '$5',
          justifyContent: 'center',

          bp2: {
            padding: '$6',
            gridTemplateColumns: 'repeat(2, max-content)'
          },

          bp4: {
            padding: '$6',
            gridTemplateColumns: 'repeat(4, max-content)'
          }
        }}
      >
        <Flex css={{ gap: '$4' }}>
          <TextTable weight="regular">B</TextTable>
          <TextTable weight="regular">y</TextTable>
          <TextTable weight="regular">r</TextTable>
          <TextTable weight="regular">d</TextTable>
        </Flex>
        <Flex css={{ gap: '$4' }}>
          <TextTable weight="medium">B</TextTable>
          <TextTable weight="medium">y</TextTable>
          <TextTable weight="medium">r</TextTable>
          <TextTable weight="medium">d</TextTable>
        </Flex>
        <Flex css={{ gap: '$4' }}>
          <TextTable weight="semibold">B</TextTable>
          <TextTable weight="semibold">y</TextTable>
          <TextTable weight="semibold">r</TextTable>
          <TextTable weight="semibold">d</TextTable>
        </Flex>
        <Flex css={{ gap: '$4' }}>
          <TextTable weight="bold">B</TextTable>
          <TextTable weight="bold">y</TextTable>
          <TextTable weight="bold">r</TextTable>
          <TextTable weight="bold">d</TextTable>
        </Flex>
      </Grid>

      <Grid
        css={{
          bc: '$black',
          color: '$white',
          padding: '$5',
          gridTemplateColumns: '1',
          gap: '$5',
          justifyContent: 'center',

          bp2: {
            padding: '$6',
            gridTemplateColumns: 'repeat(2, max-content)'
          },

          bp4: {
            padding: '$6',
            gridTemplateColumns: 'repeat(4, max-content)'
          }
        }}
      >
        <Flex css={{ gap: '$4' }}>
          <TextTable weight="regular">B</TextTable>
          <TextTable weight="regular">y</TextTable>
          <TextTable weight="regular">r</TextTable>
          <TextTable weight="regular">d</TextTable>
        </Flex>
        <Flex css={{ gap: '$4' }}>
          <TextTable weight="medium">B</TextTable>
          <TextTable weight="medium">y</TextTable>
          <TextTable weight="medium">r</TextTable>
          <TextTable weight="medium">d</TextTable>
        </Flex>
        <Flex css={{ gap: '$4' }}>
          <TextTable weight="semibold">B</TextTable>
          <TextTable weight="semibold">y</TextTable>
          <TextTable weight="semibold">r</TextTable>
          <TextTable weight="semibold">d</TextTable>
        </Flex>
        <Flex css={{ gap: '$4' }}>
          <TextTable weight="bold">B</TextTable>
          <TextTable weight="bold">y</TextTable>
          <TextTable weight="bold">r</TextTable>
          <TextTable weight="bold">d</TextTable>
        </Flex>
      </Grid>

      <Box
        css={{
          padding: '$5',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          gap: '$5',

          bp2: {
            padding: '$6'
          }
        }}
      >
        <Text size={{ initial: '4', bp2: '6' }} weight="regular">
          No need to worry 'bout tomorrow, and yesterday is gone.
        </Text>
        <Text size={{ initial: '4', bp2: '6' }} weight="medium">
          No need to worry 'bout tomorrow, and yesterday is gone.
        </Text>
        <Text size={{ initial: '4', bp2: '6' }} weight="semibold">
          No need to worry 'bout tomorrow, and yesterday is gone.
        </Text>
        <Text size={{ initial: '4', bp2: '6' }} weight="bold">
          No need to worry 'bout tomorrow, and yesterday is gone.
        </Text>
      </Box>

      <Box
        css={{
          bc: '$black',
          color: '$white',
          padding: '$5',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          gap: '$5',

          bp2: {
            padding: '$6'
          }
        }}
      >
        <Text size={{ initial: '4', bp2: '6' }} weight="regular">
          No need to worry 'bout tomorrow, and yesterday is gone.
        </Text>
        <Text size={{ initial: '4', bp2: '6' }} weight="medium">
          No need to worry 'bout tomorrow, and yesterday is gone.
        </Text>
        <Text size={{ initial: '4', bp2: '6' }} weight="semibold">
          No need to worry 'bout tomorrow, and yesterday is gone.
        </Text>
        <Text size={{ initial: '4', bp2: '6' }} weight="bold">
          No need to worry 'bout tomorrow, and yesterday is gone.
        </Text>
      </Box>

      <Box css={{ flex: '1', height: '$6', bc: '$pink' }} />
      <Box css={{ flex: '1', height: '$6', bc: '$blue' }} />
      <Box css={{ flex: '1', height: '$6', bc: '$turq' }} />
      <Box css={{ flex: '1', height: '$6', bc: '$yellow' }} />
      <Box css={{ flex: '1', height: '$6', bc: '$orange' }} />
      <Box css={{ flex: '1', height: '$6', bc: '$red' }} />

      <Box
        css={{
          padding: '$5',
          textAlign: 'center',
          bp2: {
            padding: '$6'
          }
        }}
      >
        <Box css={{ display: 'inline-block', position: 'relative' }}>
          <Text
            size="9"
            css={{
              position: 'absolute',
              top: 1,
              left: 1,
              zIndex: 1,
              color: '$red'
            }}
            weight="bold"
          >
            ELIJAH
          </Text>
          <Text
            size="9"
            css={{
              position: 'relative',
              top: 0,
              left: 0,
              zIndex: 2,
              color: '$black'
            }}
            weight="bold"
          >
            ELIJAH
          </Text>
          <Text
            size="9"
            css={{
              position: 'absolute',
              top: -1,
              left: -1,
              zIndex: 1,
              color: '$turq'
            }}
            weight="bold"
          >
            ELIJAH
          </Text>
        </Box>
      </Box>
      <Box
        css={{
          bc: '$black',
          padding: '$5',
          textAlign: 'center',
          bp2: {
            padding: '$6'
          }
        }}
      >
        <Box css={{ display: 'inline-block', position: 'relative' }}>
          <Text
            size="9"
            css={{
              position: 'absolute',
              top: -1,
              left: -1,
              zIndex: 1,
              color: '$red'
            }}
            weight="bold"
          >
            ELIJAH
          </Text>
          <Text
            size="9"
            css={{
              position: 'relative',
              top: 0,
              left: 0,
              zIndex: 2,
              color: '$white'
            }}
            weight="bold"
          >
            ELIJAH
          </Text>
          <Text
            size="9"
            css={{
              position: 'absolute',
              top: 1,
              left: 1,
              zIndex: 1,
              color: '$turq'
            }}
            weight="bold"
          >
            ELIJAH
          </Text>
        </Box>
      </Box>

      <Box
        css={{
          padding: '$5',
          textAlign: 'center',
          bp2: {
            padding: '$6'
          }
        }}
      >
        <Text size="6">
          Sliding on the <Link href="#">east coast</Link>
          <br />
          The very steep coast
          <br /> People <Link href="#">getting high</Link>
        </Text>
      </Box>
    </Box>
  );
}

export default Home;

const TextTable = ({ weight, children }: { weight?: any; children?: any }) => (
  <Box
    css={{
      display: 'grid',
      gap: '$2',
      gridTemplateColumns: 'repeat(1, max-content)',
      gridAutoRows: 'max-content',
      alignItems: 'baseline',
      textAlign: 'center'
    }}
  >
    <Text weight={weight} size="9">
      {children}
    </Text>
    <Text weight={weight} size="8">
      {children}
    </Text>
    <Text weight={weight} size="7">
      {children}
    </Text>
    <Text weight={weight} size="6">
      {children}
    </Text>
    <Text weight={weight} size="5">
      {children}
    </Text>
    <Text weight={weight} size="4">
      {children}
    </Text>
    <Text weight={weight} size="3">
      {children}
    </Text>
    <Text weight={weight} size="2">
      {children}
    </Text>
    <Text weight={weight} size="1">
      {children}
    </Text>
  </Box>
);
