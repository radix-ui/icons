import React from 'react';
import fs from 'fs';
import path from 'path';
import useDarkMode from 'use-dark-mode';
import { Box, Container, Flex, Grid, Text, styled } from '@modulz/design-system';

export default function Home(props) {
  const darkMode = useDarkMode();
  const crimson = darkMode.value ? 'hsla(336, 79%, 48%, 0.5)' : 'hsla(336, 90%, 91%, 1.0)';
  const teal = darkMode.value ? 'hsla(174, 100%, 28%, 0.5)' : 'hsla(174, 75%, 84%, 1.0)';
  const getIcon = (fileName: string) => props.icons.find(icon => icon.filename === fileName).content as string;

  return (
    <Box css={{ color: '$hiContrast' }}>
      <Box
        css={{
          position: 'fixed',
          top: 'calc(0.5em + 7.5vh)',
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
          <Line color={crimson} angle="0deg" offset="0, 0.465em" />
          <Line color={crimson} angle="0deg" offset="0, 0.525em" />
          <Line color={crimson} angle="45deg" offset="-0.285em, 0" />
          <Line color={crimson} angle="45deg" offset="-0.370em, 0" />
          <Line color={crimson} angle="45deg" offset="0.245em, 0" />
          <Line color={crimson} angle="-45deg" offset="0.620em, 0" />
          <Line color={crimson} angle="-45deg" offset="0.705em, 0" />
          <Line color={crimson} angle="-45deg" offset="1.235em, 0" />
          <Line color={teal} angle="0deg" offset="0, 0" />
          <Line color={teal} angle="0deg" offset="0, 1em" />
          <Line color={teal} angle="90deg" offset="0, 0" />
          <Line color={teal} angle="90deg" offset="1em, 0" />
          <HeroIcon svg={getIcon('arrow-left.svg')} />

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

      <Box
        css={{
          position: 'fixed',
          borderRadius: '$1',
          top: '$5',
          right: '$5',
          padding: '$3 $4',
          background: darkMode.value ? 'hsl(174, 65%, 14%)' : 'hsl(174, 100%, 94%)',
          minWidth: 200
        }}
      >
        <Text size="2" css={{ lineHeight: '25px' }}>
          <BoxLink href="#svg" target="_blank">
            <Box as="span" css={{ mr: '$1' }} dangerouslySetInnerHTML={{ __html: getIcon('download.svg') }} />
            Download SVG
          </BoxLink>
          <BoxLink href="https://www.figma.com/file/9Df5CaFUEomVzn20gRpaX3/Radix-Icons" target="_blank">
            <Box as="span" css={{ mr: '$1' }} dangerouslySetInnerHTML={{ __html: getIcon('figma-logo.svg') }} />
            Open in Figma
          </BoxLink>
          <BoxLink href="#framer" target="_blank">
            <Box as="span" css={{ mr: '$1' }} dangerouslySetInnerHTML={{ __html: getIcon('framer-logo.svg') }} />
            Open in Framer Web
          </BoxLink>
          <BoxLink href="#sketch" target="_blank">
            <Box as="span" css={{ mr: '$1' }} dangerouslySetInnerHTML={{ __html: getIcon('sketch-logo.svg') }} />
            Add Library for Sketch
          </BoxLink>
          <BoxLink href="https://www.npmjs.com/package/@modulz/radix-icons" target="_blank">
            <Box as="span" css={{ mr: '$1' }} dangerouslySetInnerHTML={{ __html: getIcon('cube.svg') }} />
            Install with npm
          </BoxLink>
        </Text>
      </Box>

      <Container css={{ position: 'relative', textAlign: 'center', mb: '$4' }}>
        <Box
          css={{
            background: darkMode.value ? '$gray100' : '$loContrast',
            marginBottom: '$5',
            borderRadius: '$2',
            boxShadow: darkMode.value ? '0 30px 250px -50px black' : '0 30px 250px -50px $gray500',
            default: {
              marginTop: 'calc(30vh + 160px)'
            },
            bp3: {
              marginTop: 'calc(30vh + 260px)'
            }
          }}
        >
          <Grid
            css={{
              gap: '$4',
              padding: '$4',
              default: {
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))'
              },
              bp2: {
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))'
              }
            }}
          >
            {props.icons.map(({ filename, content }) => (
              <Box key={filename} css={{ textAlign: 'center' }}>
                <Box
                  dangerouslySetInnerHTML={{ __html: content }}
                  css={{ my: '$2', svg: { display: 'block', margin: 'auto' } }}
                />
                <Text
                  size="1"
                  css={{
                    display: 'block',
                    color: '$gray600',
                    my: '$2',
                    lineHeight: '15px',
                    textTransform: 'capitalize'
                  }}
                >
                  {filename.replace(/-/g, ' ').replace(/\.svg/, '')}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

const BoxLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    fontWeight: 500,
    letterSpacing: '-0.017em',
    wordSpacing: '-0.01em'
  },
  svg: {
    display: 'block'
  }
});

type LineProps = {
  angle?: string;
  offset?: string;
  color?: string;
};

function Line({ angle = '0deg', offset = '0px, 0px', color }: LineProps) {
  return (
    <Box
      css={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 'calc(100vw + 100vh)',
        borderTop: '1px solid',
        transform: ` translate(${offset}) rotate(${angle}) translateX(-50%)`,
        transformOrigin: 'top left',
        color
      }}
    />
  );
}

type HeroIconProps = {
  svg: string;
};

function HeroIcon({ svg }: HeroIconProps) {
  return (
    <Box
      css={{
        position: 'relative',
        svg: {
          display: 'block',
          width: '1em',
          height: '1em'
        }
      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
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
