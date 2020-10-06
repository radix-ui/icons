import React from 'react';
import fs from 'fs';
import path from 'path';
import useDarkMode from 'use-dark-mode';
import { Box, Container, Grid, Text, styled, darkThemeClass } from '@modulz/design-system';
import Icons from '@modulz/radix-icons';

export default function Home(props) {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default'
  });

  const crimson = darkMode.value ? 'hsla(336, 79%, 48%, 0.5)' : 'hsla(336, 90%, 91%, 1.0)';
  const teal = darkMode.value ? 'hsla(174, 100%, 28%, 0.5)' : 'hsla(174, 75%, 84%, 1.0)';

  return (
    <Box css={{ color: '$hiContrast' }}>
      <Box
        css={{
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

          <Box css={{ position: 'relative' }}>
            <Icons.ArrowLeftIcon style={{ display: 'block', width: '1em', height: '1em' }} />
          </Box>

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
            <Box as="span" css={{ mr: '$1' }}>
              <Icons.DownloadIcon />
            </Box>
            Download SVG
          </BoxLink>
          <BoxLink href="https://www.figma.com/file/9Df5CaFUEomVzn20gRpaX3/Radix-Icons" target="_blank">
            <Box as="span" css={{ mr: '$1' }}>
              <Icons.FigmaLogoIcon />
            </Box>
            Open in Figma
          </BoxLink>
          <BoxLink href="#framer" target="_blank">
            <Box as="span" css={{ mr: '$1' }}>
              <Icons.FramerLogoIcon />
            </Box>
            Open in Framer Web
          </BoxLink>
          <BoxLink href="#sketch" target="_blank">
            <Box as="span" css={{ mr: '$1' }}>
              <Icons.SketchLogoIcon />
            </Box>
            Add Library for Sketch
          </BoxLink>
          <BoxLink href="https://www.npmjs.com/package/@modulz/radix-icons" target="_blank">
            <Box as="span" css={{ mr: '$1' }}>
              <Icons.CubeIcon />
            </Box>
            Install with npm
          </BoxLink>
        </Text>
      </Box>

      <Box>
        <Container size="4" css={{ position: 'relative', mb: '$4' }}>
          <Box
            css={{
              background: darkMode.value ? '$gray100' : '$loContrast',
              padding: '$1 $6 $4',
              marginBottom: '$5',
              borderRadius: '$2',
              minHeight: 200,
              boxShadow: darkMode.value ? '0 50px 250px -70px black' : '0 50px 250px -70px rgba(0, 0, 0, 0.4)',
              default: {
                marginTop: 'calc(30vh + 160px)'
              },
              bp3: {
                marginTop: 'calc(25vh + 260px)'
              }
            }}
          >
            <Box>
              <Label>Arrows</Label>
              <Group>
                <Icons.ArrowLeftIcon />
                <Icons.ArrowRightIcon />
                <Icons.ArrowUpIcon />
                <Icons.ArrowDownIcon />
                <Icons.ArrowTopLeftIcon />
                <Icons.ArrowTopRightIcon />
                <Icons.ArrowBottomLeftIcon />
                <Icons.ArrowBottomRightIcon />
                <Icons.ChevronDownIcon />
                <Icons.ChevronLeftIcon />
                <Icons.ChevronRightIcon />
                <Icons.ChevronUpIcon />
                <Icons.DoubleArrowDownIcon />
                <Icons.DoubleArrowLeftIcon />
                <Icons.DoubleArrowRightIcon />
                <Icons.DoubleArrowUpIcon />
                <Icons.ThickArrowLeftIcon />
                <Icons.ThickArrowRightIcon />
                <Icons.ThickArrowUpIcon />
                <Icons.ThickArrowDownIcon />
                <Icons.TriangleLeftIcon />
                <Icons.TriangleRightIcon />
                <Icons.TriangleUpIcon />
                <Icons.TriangleDownIcon />
                <Icons.CaretLeftIcon />
                <Icons.CaretRightIcon />
                <Icons.CaretUpIcon />
                <Icons.CaretDownIcon />
                <Icons.CaretSortIcon />
                <Icons.WidthIcon />
                <Icons.HeightIcon />
                <Icons.SizeIcon />
                <Icons.MoveIcon />
                <Icons.AllSidesIcon />
              </Group>
            </Box>
            <Box>
              <Label>Objects</Label>
              <Group>
                <Icons.MagnifyingGlassIcon />
                <Icons.GearIcon />
                <Icons.BellIcon />
                <Icons.HomeIcon />
                <Icons.LockClosedIcon />
                <Icons.LockOpen1Icon />
                <Icons.LockOpen2Icon />
                <Icons.BackpackIcon />
                <Icons.CameraIcon />
                <Icons.PaperPlaneIcon />
                <Icons.RocketIcon />
                <Icons.EnvelopeClosedIcon />
                <Icons.EnvelopeOpenIcon />
                <Icons.ChatBubbleIcon />
                <Icons.Link1Icon />
                <Icons.LinkNone1Icon />
                <Icons.LinkBreak1Icon />
                <Icons.Link2Icon />
                <Icons.LinkNone2Icon />
                <Icons.LinkBreak2Icon />
                <Icons.TrashIcon />
                <Icons.Pencil1Icon />
                <Icons.Pencil2Icon />
                <Icons.BookmarkIcon />
                <Icons.DrawingPinIcon />
                <Icons.DrawingPinSolidIcon />
                <Icons.SewingPinIcon />
                <Icons.SewingPinSolidIcon />
                <Icons.CubeIcon />
                <Icons.MixIcon />
                <Icons.MixerHorizontalIcon />
                <Icons.MixerVerticalIcon />
                <Icons.FileIcon />
                <Icons.FileTextIcon />
                <Icons.FilePlusIcon />
                <Icons.FileMinusIcon />
                <Icons.ReaderIcon />
                <Icons.IdCardIcon />
                <Icons.Crosshair1Icon />
                <Icons.Crosshair2Icon />
                <Icons.TargetIcon />
                <Icons.DiscIcon />
                <Icons.GlobeIcon />
                <Icons.ClockIcon />
                <Icons.TimerIcon />
                <Icons.StopwatchIcon />
                <Icons.LapTimerIcon />
                <Icons.CountdownTimerIcon />
                <Icons.FaceIcon />
                <Icons.PersonIcon />
                <Icons.EyeOpenIcon />
                <Icons.EyeClosedIcon />
              </Group>
            </Box>
            <Box>
              <Label>Music</Label>
              <Group>
                <Icons.PlayIcon />
                <Icons.ResumeIcon />
                <Icons.PauseIcon />
                <Icons.StopIcon />
                <Icons.TrackPreviousIcon />
                <Icons.TrackNextIcon />
                <Icons.LoopIcon />
                <Icons.ShuffleIcon />
                <Icons.SpeakerLoudIcon />
                <Icons.SpeakerModerateIcon />
                <Icons.SpeakerQuietIcon />
                <Icons.SpeakerOffIcon />
              </Group>
            </Box>
            <Box>
              <Label>Components</Label>
              <Group>
                <Icons.BoxIcon />
                <Icons.AspectRatioIcon />
                <Icons.ContainerIcon />
                <Icons.SectionIcon />
                <Icons.LayoutIcon />
                <Icons.GridIcon />
                <Icons.TableIcon />
                <Icons.ImageIcon />
                <Icons.SwitchIcon />
                <Icons.CheckboxIcon />
                <Icons.RadiobuttonIcon />
                <Icons.AvatarIcon />
                <Icons.ButtonIcon />
                <Icons.BadgeIcon />
                <Icons.InputIcon />
                <Icons.SliderIcon />
                <Icons.HeadingIcon />
                <Icons.TextIcon />
                <Icons.QuoteIcon />
                <Icons.CodeIcon />
                <Icons.ListBulletIcon />
                <Icons.DropdownMenuIcon />
                <Icons.VideoIcon />
                <Icons.PieChartIcon />
                <Icons.CalendarIcon />
                <Icons.DashboardIcon />
                <Icons.ActivityLogIcon />
                <Icons.DividerVerticalIcon />
                <Icons.DividerHorizontalIcon />
              </Group>
            </Box>
            <Box>
              <Label>Typography</Label>
              <Group>
                <Icons.FontStyleIcon />
                <Icons.FontItalicIcon />
                <Icons.FontRomanIcon />
                <Icons.FontBoldIcon />
                <Icons.LetterCaseUppercaseIcon />
                <Icons.LetterCaseCapitalizeIcon />
                <Icons.LetterCaseLowercaseIcon />
                <Icons.LetterCaseToggleIcon />
                <Icons.LetterSpacingIcon />
                <Icons.AlignBaselineIcon />
                <Icons.FontSizeIcon />
                <Icons.FontFamilyIcon />
                <Icons.UnderlineIcon />
                <Icons.StrikethroughIcon />
                <Icons.OverlineIcon />
                <Icons.LineHeightIcon />
                <Icons.TextAlignLeftIcon />
                <Icons.TextAlignCenterIcon />
                <Icons.TextAlignRightIcon />
                <Icons.TextAlignJustifyIcon />
              </Group>
            </Box>
            <Box>
              <Label>Design</Label>
              <Group>
                <Icons.FrameIcon />
                <Icons.CropIcon />
                <Icons.LayersIcon />
                <Icons.StackIcon />
                <Icons.TokensIcon />
                <Icons.Component1Icon />
                <Icons.Component2Icon />
                <Icons.SymbolIcon />
                <Icons.ComponentInstanceIcon />
                <Icons.ComponentNoneIcon />
                <Icons.ComponentBooleanIcon />
                <Icons.ComponentPlaceholderIcon />
                <Icons.OpacityIcon />
                <Icons.BlendingModeIcon />
                <Icons.MaskOnIcon />
                <Icons.MaskOffIcon />
                <Icons.ShadowIcon />
                <Icons.ShadowNoneIcon />
                <Icons.ValueIcon />
                <Icons.ValueNoneIcon />
                <Icons.ZoomInIcon />
                <Icons.ZoomOutIcon />
                <Icons.CursorTextIcon />
                <Icons.SquareIcon />
                <Icons.GroupIcon />
                <Icons.DimensionsIcon />
                <Icons.BoxModelIcon />
                <Icons.MarginIcon />
                <Icons.ColumnsIcon />
                <Icons.RowsIcon />
              </Group>
            </Box>
            <Box>
              <Label>Alignment</Label>
              <Group>
                <Icons.AlignLeftIcon />
                <Icons.AlignVerticalCentersIcon />
                <Icons.AlignRightIcon />
                <Icons.AlignTopIcon />
                <Icons.AlignHorizontalCentersIcon />
                <Icons.AlignBottomIcon />
                <Icons.AlignStretchIcon />
                <Icons.AlignStartIcon />
                <Icons.AlignCenterIcon />
                <Icons.AlignEndIcon />
                <Icons.JustifyStretchIcon />
                <Icons.JustifyStartIcon />
                <Icons.JustifyCenterIcon />
                <Icons.JustifyEndIcon />
                <Icons.PinLeftIcon />
                <Icons.PinRightIcon />
                <Icons.PinTopIcon />
                <Icons.PinBottomIcon />
              </Group>
            </Box>
            <Box>
              <Label>Borders and corners</Label>
              <Group>
                <Icons.BorderAllIcon />
                <Icons.BorderSplitIcon />
                <Icons.BorderNoneIcon />
                <Icons.BorderLeftIcon />
                <Icons.BorderRightIcon />
                <Icons.BorderTopIcon />
                <Icons.BorderBottomIcon />
                <Icons.CornersIcon />
                <Icons.CornerTopLeftIcon />
                <Icons.CornerTopRightIcon />
                <Icons.CornerBottomLeftIcon />
                <Icons.CornerBottomRightIcon />
                <Icons.BorderStyleIcon />
                <Icons.BorderSolidIcon />
                <Icons.BorderDashedIcon />
                <Icons.BorderDottedIcon />
              </Group>
            </Box>
            <Box>
              <Label>Abstract</Label>
              <Group>
                <Icons.HamburgerIcon />
                <Icons.Cross1Icon />
                <Icons.DotsHorizontalIcon />
                <Icons.DotsVerticalIcon />
                <Icons.PlusIcon />
                <Icons.MinusIcon />
                <Icons.CheckIcon />
                <Icons.Cross2Icon />
                <Icons.CheckCircledIcon />
                <Icons.CrossCircledIcon />
                <Icons.PlusCircledIcon />
                <Icons.MinusCircledIcon />
                <Icons.QuestionMarkIcon />
                <Icons.QuestionMarkCircledIcon />
                <Icons.InfoCircledIcon />
                <Icons.ExclamationTriangleIcon />
                <Icons.Share1Icon />
                <Icons.Share2Icon />
                <Icons.ExternalLinkIcon />
                <Icons.EnterIcon />
                <Icons.ExitIcon />
                <Icons.DownloadIcon />
                <Icons.UploadIcon />
                <Icons.ResetIcon />
                <Icons.ReloadIcon />
                <Icons.UpdateIcon />
                <Icons.EnterFullScreenIcon />
                <Icons.ExitFullScreenIcon />
                <Icons.DragHandleVerticalIcon />
                <Icons.DragHandleHorizontalIcon />
                <Icons.DragHandleDots1Icon />
                <Icons.DragHandleDots2Icon />
                <Icons.DotIcon />
                <Icons.DotSolidIcon />
                <Icons.CommitIcon />
                <Icons.SlashIcon />
                <Icons.Half1Icon />
                <Icons.Half2Icon />
                <Icons.ViewNoneIcon />
                <Icons.ViewVerticalIcon />
                <Icons.ViewHorizontalIcon />
                <Icons.ViewGridIcon />
              </Group>
            </Box>
            <Box>
              <Label>Logos</Label>
              <Group>
                <Icons.ModulzLogoIcon />
                <Icons.FigmaLogoIcon />
                <Icons.FramerLogoIcon />
                <Icons.SketchLogoIcon />
                <Icons.StitchesLogoIcon />
              </Group>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

const Label = styled(Text, {
  my: '$4',
  display: 'block',
  fontSize: '$1',
  fontWeight: 500,
  lineHeight: '25px',
  letterSpacing: '-0.02em'
});

const Group = styled(Grid, {
  rowGap: '$6',
  gridTemplateColumns: 'repeat(16, 15px)',
  justifyItems: 'center',
  justifyContent: 'space-between',
  margin: '$4 0 $6',
  padding: '0 $1'
});

/** Naïve UpperCamelCaseIcon to Title Case conversion  */
function convertIconKeyToFriendlyName(key) {
  return key.replace(/Icon$/, '').replace(/(.)([A-Z])/g, '$1 $2');
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

{
  /* <Grid
  css={{
    rowGap: '$5',
    padding: '$6 $4',
    default: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    },
    bp2: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
    },
  }}
  >
  {Object.keys(Icons).map((key) => (
    <Box key={key} css={{ my: '$2', svg: { display: 'block', margin: 'auto' } }}>
      {React.`create`Element(Icons[key])}
    </Box>
  ))}
</Grid> */
}
