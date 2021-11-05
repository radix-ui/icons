import React from 'react';
import useDarkMode from 'use-dark-mode';
import * as Icons from '@radix-ui/react-icons';
import { Box, Grid, Text, styled, darkThemeClass } from '@modulz/design-system';
import { Tooltip } from './Tooltip';
import { CopyToastVisibility } from './CopyToast';
import { ChromelessButton } from './ChromelessButton';

export const Overview = React.memo(() => {
  return (
    <Grid
      css={{
        default: {
          padding: '0 $3 $2',
          marginTop: '-$2',
        },
        bp1: {
          padding: '0 $6 $1',
          marginTop: 0,
        },
        '@media (min-width: 750px)': {
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '$8',
        },
      }}
    >
      <Box>
        <Arrows />
        <Components />
        <Design />
      </Box>
      <Box>
        <Objects />
        <Typography />
        <Music />
      </Box>
      <Box>
        <Alignment />
        <Abstract />
        <Borders />
        <Logos />
      </Box>
    </Grid>
  );
});

const Label = styled(Text, {
  marginTop: '$4',
  marginBottom: '$5',
  display: 'block',
  fontSize: '$1',
  fontWeight: 500,
  lineHeight: '25px',
  letterSpacing: '-0.01em',
});

const Group = styled(Grid, {
  justifyItems: 'center',
  justifyContent: 'space-between',
  margin: '$4 0 $6',
  padding: '0 $1',
  rowGap: '$6',

  '@media (max-width: 350px)': {
    gridTemplateColumns: 'repeat(5, 15px)',
  },

  '@media (min-width: 350px) and (max-width: 449px)': {
    gridTemplateColumns: 'repeat(7, 15px)',
  },

  '@media (min-width: 450px) and (max-width: 549px)': {
    gridTemplateColumns: 'repeat(9, 15px)',
  },

  '@media (min-width: 550px) and (max-width: 649px)': {
    gridTemplateColumns: 'repeat(10, 15px)',
  },

  '@media (min-width: 650px) and (max-width: 749px)': {
    gridTemplateColumns: 'repeat(12, 15px)',
  },

  '@media (min-width: 750px) and (max-width: 899px)': {
    gridTemplateColumns: 'repeat(4, 15px)',
  },

  '@media (min-width: 900px) and (max-width: 1049px)': {
    gridTemplateColumns: 'repeat(5, 15px)',
  },

  '@media (min-width: 1050px)': {
    gridTemplateColumns: 'repeat(6, 15px)',
  },
});

const GhostButton = (props: React.ComponentProps<typeof ChromelessButton>) => {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default',
  });

  return (
    <ChromelessButton
      css={{
        display: 'block',
        cursor: 'pointer',
        padding: '$3',
        margin: '-$3',
        borderRadius: '$1',
        '&:hover': {
          backgroundColor: darkMode.value ? 'hsl(174, 65%, 14%)' : '$teal300',
        },
        '&:active, &:focus': {
          boxShadow: darkMode.value ? '0 0 0 2px hsl(174, 100%, 28%)' : '0 0 0 2px $teal700',
        },
      }}
      {...props}
    />
  );
};

type CopyButtonProps = {
  children?: React.ReactNode;
  label: string;
};

const CopyButton = ({ children, label }: CopyButtonProps) => {
  return (
    <CopyToastVisibility.Consumer>
      {({ setIcon, setIsVisible }) => (
        <Tooltip label={label}>
          <Tooltip.Trigger as="div">
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
              {children}
            </GhostButton>
          </Tooltip.Trigger>
        </Tooltip>
      )}
    </CopyToastVisibility.Consumer>
  );
};

const Abstract = () => {
  return (
    <Box>
      <Label>Abstract</Label>
      <Group>
        <CopyButton label="Hamburger Menu">
          <Icons.HamburgerMenuIcon />
        </CopyButton>
        <CopyButton label="Cross 1">
          <Icons.Cross1Icon />
        </CopyButton>
        <CopyButton label="Dots Horizontal">
          <Icons.DotsHorizontalIcon />
        </CopyButton>
        <CopyButton label="Dots Vertical">
          <Icons.DotsVerticalIcon />
        </CopyButton>
        <CopyButton label="Plus">
          <Icons.PlusIcon />
        </CopyButton>
        <CopyButton label="Minus">
          <Icons.MinusIcon />
        </CopyButton>
        <CopyButton label="Check">
          <Icons.CheckIcon />
        </CopyButton>
        <CopyButton label="Cross 2">
          <Icons.Cross2Icon />
        </CopyButton>
        <CopyButton label="Check Circled">
          <Icons.CheckCircledIcon />
        </CopyButton>
        <CopyButton label="Cross Circled">
          <Icons.CrossCircledIcon />
        </CopyButton>
        <CopyButton label="Plus Circled">
          <Icons.PlusCircledIcon />
        </CopyButton>
        <CopyButton label="Minus Circled">
          <Icons.MinusCircledIcon />
        </CopyButton>
        <CopyButton label="Question Mark">
          <Icons.QuestionMarkIcon />
        </CopyButton>
        <CopyButton label="Question Mark Circled">
          <Icons.QuestionMarkCircledIcon />
        </CopyButton>
        <CopyButton label="Info Circled">
          <Icons.InfoCircledIcon />
        </CopyButton>
        <CopyButton label="Exclamation Triangle">
          <Icons.ExclamationTriangleIcon />
        </CopyButton>
        <CopyButton label="Share 1">
          <Icons.Share1Icon />
        </CopyButton>
        <CopyButton label="Share 2">
          <Icons.Share2Icon />
        </CopyButton>
        <CopyButton label="External Link">
          <Icons.ExternalLinkIcon />
        </CopyButton>
        <CopyButton label="Enter">
          <Icons.EnterIcon />
        </CopyButton>
        <CopyButton label="Exit">
          <Icons.ExitIcon />
        </CopyButton>
        <CopyButton label="Download">
          <Icons.DownloadIcon />
        </CopyButton>
        <CopyButton label="Upload">
          <Icons.UploadIcon />
        </CopyButton>
        <CopyButton label="Reset">
          <Icons.ResetIcon />
        </CopyButton>
        <CopyButton label="Reload">
          <Icons.ReloadIcon />
        </CopyButton>
        <CopyButton label="Update">
          <Icons.UpdateIcon />
        </CopyButton>
        <CopyButton label="Enter Full Screen">
          <Icons.EnterFullScreenIcon />
        </CopyButton>
        <CopyButton label="Exit Full Screen">
          <Icons.ExitFullScreenIcon />
        </CopyButton>
        <CopyButton label="Drag Handle Vertical">
          <Icons.DragHandleVerticalIcon />
        </CopyButton>
        <CopyButton label="Drag Handle Horizontal">
          <Icons.DragHandleHorizontalIcon />
        </CopyButton>
        <CopyButton label="Drag Handle Dots  1">
          <Icons.DragHandleDots1Icon />
        </CopyButton>
        <CopyButton label="Drag Handle Dots  2">
          <Icons.DragHandleDots2Icon />
        </CopyButton>
        <CopyButton label="Dot">
          <Icons.DotIcon />
        </CopyButton>
        <CopyButton label="Dot Filled">
          <Icons.DotFilledIcon />
        </CopyButton>
        <CopyButton label="Commit">
          <Icons.CommitIcon />
        </CopyButton>
        <CopyButton label="Slash">
          <Icons.SlashIcon />
        </CopyButton>
        <CopyButton label="Circle">
          <Icons.CircleIcon />
        </CopyButton>
        <CopyButton label="Circle Backslash">
          <Icons.CircleBackslashIcon />
        </CopyButton>
        <CopyButton label="Half 1">
          <Icons.Half1Icon />
        </CopyButton>
        <CopyButton label="Half 2">
          <Icons.Half2Icon />
        </CopyButton>
        <CopyButton label="View Vertical">
          <Icons.ViewVerticalIcon />
        </CopyButton>
        <CopyButton label="View Horizontal">
          <Icons.ViewHorizontalIcon />
        </CopyButton>
        <CopyButton label="View Grid">
          <Icons.ViewGridIcon />
        </CopyButton>
        <CopyButton label="View None">
          <Icons.ViewNoneIcon />
        </CopyButton>
        <CopyButton label="Square">
          <Icons.SquareIcon />
        </CopyButton>
        <CopyButton label="Copy">
          <Icons.CopyIcon />
        </CopyButton>
        <CopyButton label="Dash">
          <Icons.DashIcon />
        </CopyButton>
      </Group>
    </Box>
  );
};

const Alignment = () => {
  return (
    <Box>
      <Label>Alignment</Label>
      <Group>
        <CopyButton label="Align Top">
          <Icons.AlignTopIcon />
        </CopyButton>
        <CopyButton label="Align Center Vertically">
          <Icons.AlignCenterVerticallyIcon />
        </CopyButton>
        <CopyButton label="Align Bottom">
          <Icons.AlignBottomIcon />
        </CopyButton>
        <CopyButton label="Stretch Vertically">
          <Icons.StretchVerticallyIcon />
        </CopyButton>
        <CopyButton label="Align Left">
          <Icons.AlignLeftIcon />
        </CopyButton>
        <CopyButton label="Align Center Horizontally">
          <Icons.AlignCenterHorizontallyIcon />
        </CopyButton>
        <CopyButton label="Align Right">
          <Icons.AlignRightIcon />
        </CopyButton>
        <CopyButton label="Stretch Horizontally">
          <Icons.StretchHorizontallyIcon />
        </CopyButton>
        <CopyButton label="Space Between Horizontally">
          <Icons.SpaceBetweenHorizontallyIcon />
        </CopyButton>
        <CopyButton label="Space Evenly Horizontally">
          <Icons.SpaceEvenlyHorizontallyIcon />
        </CopyButton>
        <CopyButton label="Space Between Vertically">
          <Icons.SpaceBetweenVerticallyIcon />
        </CopyButton>
        <CopyButton label="Space Evenly Vertically">
          <Icons.SpaceEvenlyVerticallyIcon />
        </CopyButton>
        <CopyButton label="Pin Left">
          <Icons.PinLeftIcon />
        </CopyButton>
        <CopyButton label="Pin Right">
          <Icons.PinRightIcon />
        </CopyButton>
        <CopyButton label="Pin Top">
          <Icons.PinTopIcon />
        </CopyButton>
        <CopyButton label="Pin Bottom">
          <Icons.PinBottomIcon />
        </CopyButton>
      </Group>
    </Box>
  );
};

const Arrows = () => {
  return (
    <Box>
      <Label>Arrows</Label>
      <Group>
        <CopyButton label="Arrow Left">
          <Icons.ArrowLeftIcon />
        </CopyButton>
        <CopyButton label="Arrow Right">
          <Icons.ArrowRightIcon />
        </CopyButton>
        <CopyButton label="Arrow Up">
          <Icons.ArrowUpIcon />
        </CopyButton>
        <CopyButton label="Arrow Down">
          <Icons.ArrowDownIcon />
        </CopyButton>
        <CopyButton label="Arrow Top Left">
          <Icons.ArrowTopLeftIcon />
        </CopyButton>
        <CopyButton label="Arrow Top Right">
          <Icons.ArrowTopRightIcon />
        </CopyButton>
        <CopyButton label="Arrow Bottom Left">
          <Icons.ArrowBottomLeftIcon />
        </CopyButton>
        <CopyButton label="Arrow Bottom Right">
          <Icons.ArrowBottomRightIcon />
        </CopyButton>
        <CopyButton label="Chevron Down">
          <Icons.ChevronDownIcon />
        </CopyButton>
        <CopyButton label="Chevron Left">
          <Icons.ChevronLeftIcon />
        </CopyButton>
        <CopyButton label="Chevron Right">
          <Icons.ChevronRightIcon />
        </CopyButton>
        <CopyButton label="Chevron Up">
          <Icons.ChevronUpIcon />
        </CopyButton>
        <CopyButton label="Double Arrow Down">
          <Icons.DoubleArrowDownIcon />
        </CopyButton>
        <CopyButton label="Double Arrow Left">
          <Icons.DoubleArrowLeftIcon />
        </CopyButton>
        <CopyButton label="Double Arrow Right">
          <Icons.DoubleArrowRightIcon />
        </CopyButton>
        <CopyButton label="Double Arrow Up">
          <Icons.DoubleArrowUpIcon />
        </CopyButton>
        <CopyButton label="Thick Arrow Left">
          <Icons.ThickArrowLeftIcon />
        </CopyButton>
        <CopyButton label="Thick Arrow Right">
          <Icons.ThickArrowRightIcon />
        </CopyButton>
        <CopyButton label="Thick Arrow Up">
          <Icons.ThickArrowUpIcon />
        </CopyButton>
        <CopyButton label="Thick Arrow Down">
          <Icons.ThickArrowDownIcon />
        </CopyButton>
        <CopyButton label="Triangle Left">
          <Icons.TriangleLeftIcon />
        </CopyButton>
        <CopyButton label="Triangle Right">
          <Icons.TriangleRightIcon />
        </CopyButton>
        <CopyButton label="Triangle Up">
          <Icons.TriangleUpIcon />
        </CopyButton>
        <CopyButton label="Triangle Down">
          <Icons.TriangleDownIcon />
        </CopyButton>
        <CopyButton label="Caret Left">
          <Icons.CaretLeftIcon />
        </CopyButton>
        <CopyButton label="Caret Right">
          <Icons.CaretRightIcon />
        </CopyButton>
        <CopyButton label="Caret Up">
          <Icons.CaretUpIcon />
        </CopyButton>
        <CopyButton label="Caret Down">
          <Icons.CaretDownIcon />
        </CopyButton>
        <CopyButton label="Caret Sort">
          <Icons.CaretSortIcon />
        </CopyButton>
        <CopyButton label="Width">
          <Icons.WidthIcon />
        </CopyButton>
        <CopyButton label="Height">
          <Icons.HeightIcon />
        </CopyButton>
        <CopyButton label="Size">
          <Icons.SizeIcon />
        </CopyButton>
        <CopyButton label="Move">
          <Icons.MoveIcon />
        </CopyButton>
        <CopyButton label="All Sides">
          <Icons.AllSidesIcon />
        </CopyButton>
      </Group>
    </Box>
  );
};

const Borders = () => {
  return (
    <Box>
      <Label>Borders and corners</Label>
      <Group>
        <CopyButton label="Border All">
          <Icons.BorderAllIcon />
        </CopyButton>
        <CopyButton label="Border Split">
          <Icons.BorderSplitIcon />
        </CopyButton>
        <CopyButton label="Border None">
          <Icons.BorderNoneIcon />
        </CopyButton>
        <CopyButton label="Border Left">
          <Icons.BorderLeftIcon />
        </CopyButton>
        <CopyButton label="Border Right">
          <Icons.BorderRightIcon />
        </CopyButton>
        <CopyButton label="Border Top">
          <Icons.BorderTopIcon />
        </CopyButton>
        <CopyButton label="Border Bottom">
          <Icons.BorderBottomIcon />
        </CopyButton>
        <CopyButton label="Corners">
          <Icons.CornersIcon />
        </CopyButton>
        <CopyButton label="Corner Top Left">
          <Icons.CornerTopLeftIcon />
        </CopyButton>
        <CopyButton label="Corner Top Right">
          <Icons.CornerTopRightIcon />
        </CopyButton>
        <CopyButton label="Corner Bottom Left">
          <Icons.CornerBottomLeftIcon />
        </CopyButton>
        <CopyButton label="Corner Bottom Right">
          <Icons.CornerBottomRightIcon />
        </CopyButton>
        <CopyButton label="Border Style">
          <Icons.BorderStyleIcon />
        </CopyButton>
        <CopyButton label="Border Solid">
          <Icons.BorderSolidIcon />
        </CopyButton>
        <CopyButton label="Border Dashed">
          <Icons.BorderDashedIcon />
        </CopyButton>
        <CopyButton label="Border Dotted">
          <Icons.BorderDottedIcon />
        </CopyButton>
      </Group>
    </Box>
  );
};

const Components = () => {
  return (
    <Box>
      <Label>Components</Label>
      <Group>
        <CopyButton label="Box">
          <Icons.BoxIcon />
        </CopyButton>
        <CopyButton label="Aspect Ratio">
          <Icons.AspectRatioIcon />
        </CopyButton>
        <CopyButton label="Container">
          <Icons.ContainerIcon />
        </CopyButton>
        <CopyButton label="Section">
          <Icons.SectionIcon />
        </CopyButton>
        <CopyButton label="Layout">
          <Icons.LayoutIcon />
        </CopyButton>
        <CopyButton label="Grid">
          <Icons.GridIcon />
        </CopyButton>
        <CopyButton label="Table">
          <Icons.TableIcon />
        </CopyButton>
        <CopyButton label="Image">
          <Icons.ImageIcon />
        </CopyButton>
        <CopyButton label="Switch">
          <Icons.SwitchIcon />
        </CopyButton>
        <CopyButton label="Checkbox">
          <Icons.CheckboxIcon />
        </CopyButton>
        <CopyButton label="Radiobutton">
          <Icons.RadiobuttonIcon />
        </CopyButton>
        <CopyButton label="Avatar">
          <Icons.AvatarIcon />
        </CopyButton>
        <CopyButton label="Button">
          <Icons.ButtonIcon />
        </CopyButton>
        <CopyButton label="Badge">
          <Icons.BadgeIcon />
        </CopyButton>
        <CopyButton label="Input">
          <Icons.InputIcon />
        </CopyButton>
        <CopyButton label="Slider">
          <Icons.SliderIcon />
        </CopyButton>
        <CopyButton label="Quote">
          <Icons.QuoteIcon />
        </CopyButton>
        <CopyButton label="Code">
          <Icons.CodeIcon />
        </CopyButton>
        <CopyButton label="List Bullet">
          <Icons.ListBulletIcon />
        </CopyButton>
        <CopyButton label="Dropdown Menu">
          <Icons.DropdownMenuIcon />
        </CopyButton>
        <CopyButton label="Video">
          <Icons.VideoIcon />
        </CopyButton>
        <CopyButton label="Pie Chart">
          <Icons.PieChartIcon />
        </CopyButton>
        <CopyButton label="Calendar">
          <Icons.CalendarIcon />
        </CopyButton>
        <CopyButton label="Dashboard">
          <Icons.DashboardIcon />
        </CopyButton>
        <CopyButton label="Activity Log">
          <Icons.ActivityLogIcon />
        </CopyButton>
        <CopyButton label="Bar Chart">
          <Icons.BarChartIcon />
        </CopyButton>
        <CopyButton label="Divider Vertical">
          <Icons.DividerVerticalIcon />
        </CopyButton>
        <CopyButton label="Divider Horizontal">
          <Icons.DividerHorizontalIcon />
        </CopyButton>
      </Group>
    </Box>
  );
};

const Design = () => {
  return (
    <Box>
      <Label>Design</Label>
      <Group>
        <CopyButton label="Frame">
          <Icons.FrameIcon />
        </CopyButton>
        <CopyButton label="Crop">
          <Icons.CropIcon />
        </CopyButton>
        <CopyButton label="Layers">
          <Icons.LayersIcon />
        </CopyButton>
        <CopyButton label="Stack">
          <Icons.StackIcon />
        </CopyButton>
        <CopyButton label="Tokens">
          <Icons.TokensIcon />
        </CopyButton>
        <CopyButton label="Component 1">
          <Icons.Component1Icon />
        </CopyButton>
        <CopyButton label="Component 2">
          <Icons.Component2Icon />
        </CopyButton>
        <CopyButton label="Symbol">
          <Icons.SymbolIcon />
        </CopyButton>
        <CopyButton label="Component Instance">
          <Icons.ComponentInstanceIcon />
        </CopyButton>
        <CopyButton label="Component None">
          <Icons.ComponentNoneIcon />
        </CopyButton>
        <CopyButton label="Component Boolean">
          <Icons.ComponentBooleanIcon />
        </CopyButton>
        <CopyButton label="Component Placeholder">
          <Icons.ComponentPlaceholderIcon />
        </CopyButton>
        <CopyButton label="Opacity">
          <Icons.OpacityIcon />
        </CopyButton>
        <CopyButton label="Blending Mode">
          <Icons.BlendingModeIcon />
        </CopyButton>
        <CopyButton label="Mask On">
          <Icons.MaskOnIcon />
        </CopyButton>
        <CopyButton label="Mask Off">
          <Icons.MaskOffIcon />
        </CopyButton>
        <CopyButton label="Shadow">
          <Icons.ShadowIcon />
        </CopyButton>
        <CopyButton label="Shadow None">
          <Icons.ShadowNoneIcon />
        </CopyButton>
        <CopyButton label="Shadow Inner">
          <Icons.ShadowInnerIcon />
        </CopyButton>
        <CopyButton label="Shadow Outer">
          <Icons.ShadowOuterIcon />
        </CopyButton>
        <CopyButton label="Value">
          <Icons.ValueIcon />
        </CopyButton>
        <CopyButton label="Value None">
          <Icons.ValueNoneIcon />
        </CopyButton>
        <CopyButton label="Zoom In">
          <Icons.ZoomInIcon />
        </CopyButton>
        <CopyButton label="Zoom Out">
          <Icons.ZoomOutIcon />
        </CopyButton>
        <CopyButton label="Transparency Grid">
          <Icons.TransparencyGridIcon />
        </CopyButton>
        <CopyButton label="Group">
          <Icons.GroupIcon />
        </CopyButton>
        <CopyButton label="Dimensions">
          <Icons.DimensionsIcon />
        </CopyButton>
        <CopyButton label="Rotate Counter-Clockwise">
          <Icons.RotateCounterClockwiseIcon />
        </CopyButton>
        <CopyButton label="Columns">
          <Icons.ColumnsIcon />
        </CopyButton>
        <CopyButton label="Rows">
          <Icons.RowsIcon />
        </CopyButton>
        <CopyButton label="Box Model">
          <Icons.BoxModelIcon />
        </CopyButton>
        <CopyButton label="Padding">
          <Icons.PaddingIcon />
        </CopyButton>
        <CopyButton label="Margin">
          <Icons.MarginIcon />
        </CopyButton>
        <CopyButton label="Angle">
          <Icons.AngleIcon />
        </CopyButton>
        <CopyButton label="Cursor Arrow">
          <Icons.CursorArrowIcon />
        </CopyButton>
        <CopyButton label="Cursor Text">
          <Icons.CursorTextIcon />
        </CopyButton>
        <CopyButton label="Column Spacing">
          <Icons.ColumnSpacingIcon />
        </CopyButton>
        <CopyButton label="Row Spacing">
          <Icons.RowSpacingIcon />
        </CopyButton>
      </Group>
    </Box>
  );
};

const Logos = () => {
  return (
    <Box>
      <Label>Logos</Label>
      <Group>
        <CopyButton label="Modulz Logo">
          <Icons.ModulzLogoIcon />
        </CopyButton>
        <CopyButton label="Stitches Logo">
          <Icons.StitchesLogoIcon />
        </CopyButton>
        <CopyButton label="Figma Logo">
          <Icons.FigmaLogoIcon />
        </CopyButton>
        <CopyButton label="Framer Logo">
          <Icons.FramerLogoIcon />
        </CopyButton>
        <CopyButton label="Sketch Logo">
          <Icons.SketchLogoIcon />
        </CopyButton>
        <CopyButton label="Twitter Logo">
          <Icons.TwitterLogoIcon />
        </CopyButton>
        <CopyButton label="IconJar Logo">
          <Icons.IconJarLogoIcon />
        </CopyButton>
        <CopyButton label="GitHub Logo">
          <Icons.GitHubLogoIcon />
        </CopyButton>
        <CopyButton label="Vercel Logo">
          <Icons.VercelLogoIcon />
        </CopyButton>
        <CopyButton label="CodeSandbox Logo">
          <Icons.CodeSandboxLogoIcon />
        </CopyButton>
        <CopyButton label="Notion Logo">
          <Icons.NotionLogoIcon />
        </CopyButton>
      </Group>
    </Box>
  );
};

const Music = () => {
  return (
    <Box>
      <Label>Music</Label>
      <Group>
        <CopyButton label="Play">
          <Icons.PlayIcon />
        </CopyButton>
        <CopyButton label="Resume">
          <Icons.ResumeIcon />
        </CopyButton>
        <CopyButton label="Pause">
          <Icons.PauseIcon />
        </CopyButton>
        <CopyButton label="Stop">
          <Icons.StopIcon />
        </CopyButton>
        <CopyButton label="Track Previous">
          <Icons.TrackPreviousIcon />
        </CopyButton>
        <CopyButton label="Track Next">
          <Icons.TrackNextIcon />
        </CopyButton>
        <CopyButton label="Loop">
          <Icons.LoopIcon />
        </CopyButton>
        <CopyButton label="Shuffle">
          <Icons.ShuffleIcon />
        </CopyButton>
        <CopyButton label="Speaker Loud">
          <Icons.SpeakerLoudIcon />
        </CopyButton>
        <CopyButton label="Speaker Moderate">
          <Icons.SpeakerModerateIcon />
        </CopyButton>
        <CopyButton label="Speaker Quiet">
          <Icons.SpeakerQuietIcon />
        </CopyButton>
        <CopyButton label="Speaker Off">
          <Icons.SpeakerOffIcon />
        </CopyButton>
      </Group>
    </Box>
  );
};

const Objects = () => {
  return (
    <Box>
      <Label>Objects</Label>
      <Group>
        <CopyButton label="Magnifying Glass">
          <Icons.MagnifyingGlassIcon />
        </CopyButton>
        <CopyButton label="Gear">
          <Icons.GearIcon />
        </CopyButton>
        <CopyButton label="Bell">
          <Icons.BellIcon />
        </CopyButton>
        <CopyButton label="Home">
          <Icons.HomeIcon />
        </CopyButton>
        <CopyButton label="Lock Closed">
          <Icons.LockClosedIcon />
        </CopyButton>
        <CopyButton label="Lock Open 1">
          <Icons.LockOpen1Icon />
        </CopyButton>
        <CopyButton label="Lock Open 2">
          <Icons.LockOpen2Icon />
        </CopyButton>
        <CopyButton label="Backpack">
          <Icons.BackpackIcon />
        </CopyButton>
        <CopyButton label="Camera">
          <Icons.CameraIcon />
        </CopyButton>
        <CopyButton label="Paper Plane">
          <Icons.PaperPlaneIcon />
        </CopyButton>
        <CopyButton label="Rocket">
          <Icons.RocketIcon />
        </CopyButton>
        <CopyButton label="Envelope Closed">
          <Icons.EnvelopeClosedIcon />
        </CopyButton>
        <CopyButton label="Envelope Open">
          <Icons.EnvelopeOpenIcon />
        </CopyButton>
        <CopyButton label="Chat Bubble">
          <Icons.ChatBubbleIcon />
        </CopyButton>
        <CopyButton label="Link 1">
          <Icons.Link1Icon />
        </CopyButton>
        <CopyButton label="Link None 1">
          <Icons.LinkNone1Icon />
        </CopyButton>
        <CopyButton label="Link Break 1">
          <Icons.LinkBreak1Icon />
        </CopyButton>
        <CopyButton label="Link 2">
          <Icons.Link2Icon />
        </CopyButton>
        <CopyButton label="Link None 2">
          <Icons.LinkNone2Icon />
        </CopyButton>
        <CopyButton label="Link Break 2">
          <Icons.LinkBreak2Icon />
        </CopyButton>
        <CopyButton label="Trash">
          <Icons.TrashIcon />
        </CopyButton>
        <CopyButton label="Pencil 1">
          <Icons.Pencil1Icon />
        </CopyButton>
        <CopyButton label="Pencil 2">
          <Icons.Pencil2Icon />
        </CopyButton>
        <CopyButton label="Bookmark">
          <Icons.BookmarkIcon />
        </CopyButton>
        <CopyButton label="Drawing Pin">
          <Icons.DrawingPinIcon />
        </CopyButton>
        <CopyButton label="Drawing Pin Filled">
          <Icons.DrawingPinFilledIcon />
        </CopyButton>
        <CopyButton label="Sewing Pin">
          <Icons.SewingPinIcon />
        </CopyButton>
        <CopyButton label="Sewing Pin Filled">
          <Icons.SewingPinFilledIcon />
        </CopyButton>
        <CopyButton label="Cube">
          <Icons.CubeIcon />
        </CopyButton>
        <CopyButton label="Archive">
          <Icons.ArchiveIcon />
        </CopyButton>
        <CopyButton label="Crumpled Paper">
          <Icons.CrumpledPaperIcon />
        </CopyButton>
        <CopyButton label="Mix">
          <Icons.MixIcon />
        </CopyButton>
        <CopyButton label="Mixer Horizontal">
          <Icons.MixerHorizontalIcon />
        </CopyButton>
        <CopyButton label="Mixer Vertical">
          <Icons.MixerVerticalIcon />
        </CopyButton>
        <CopyButton label="File">
          <Icons.FileIcon />
        </CopyButton>
        <CopyButton label="File Text">
          <Icons.FileTextIcon />
        </CopyButton>
        <CopyButton label="File Plus">
          <Icons.FilePlusIcon />
        </CopyButton>
        <CopyButton label="File Minus">
          <Icons.FileMinusIcon />
        </CopyButton>
        <CopyButton label="Reader">
          <Icons.ReaderIcon />
        </CopyButton>
        <CopyButton label="Card Stack">
          <Icons.CardStackIcon />
        </CopyButton>
        <CopyButton label="Card Stack Plus">
          <Icons.CardStackPlusIcon />
        </CopyButton>
        <CopyButton label="Card Stack Minus">
          <Icons.CardStackMinusIcon />
        </CopyButton>
        <CopyButton label="Id Card">
          <Icons.IdCardIcon />
        </CopyButton>
        <CopyButton label="Crosshair 1">
          <Icons.Crosshair1Icon />
        </CopyButton>
        <CopyButton label="Crosshair 2">
          <Icons.Crosshair2Icon />
        </CopyButton>
        <CopyButton label="Target">
          <Icons.TargetIcon />
        </CopyButton>
        <CopyButton label="Disc">
          <Icons.DiscIcon />
        </CopyButton>
        <CopyButton label="Globe">
          <Icons.GlobeIcon />
        </CopyButton>
        <CopyButton label="Sun">
          <Icons.SunIcon />
        </CopyButton>
        <CopyButton label="Moon">
          <Icons.MoonIcon />
        </CopyButton>
        <CopyButton label="Clock">
          <Icons.ClockIcon />
        </CopyButton>
        <CopyButton label="Timer">
          <Icons.TimerIcon />
        </CopyButton>
        <CopyButton label="Counter-Clockwise Clock">
          <Icons.CounterClockwiseClockIcon />
        </CopyButton>
        <CopyButton label="Countdown Timer">
          <Icons.CountdownTimerIcon />
        </CopyButton>
        <CopyButton label="Stopwatch">
          <Icons.StopwatchIcon />
        </CopyButton>
        <CopyButton label="Lap Timer">
          <Icons.LapTimerIcon />
        </CopyButton>
        <CopyButton label="Lightning Bolt">
          <Icons.LightningBoltIcon />
        </CopyButton>
        <CopyButton label="Magic Wand">
          <Icons.MagicWandIcon />
        </CopyButton>
        <CopyButton label="Face">
          <Icons.FaceIcon />
        </CopyButton>
        <CopyButton label="Person">
          <Icons.PersonIcon />
        </CopyButton>
        <CopyButton label="Eye Open">
          <Icons.EyeOpenIcon />
        </CopyButton>
        <CopyButton label="Eye None">
          <Icons.EyeNoneIcon />
        </CopyButton>
        <CopyButton label="Eye Closed">
          <Icons.EyeClosedIcon />
        </CopyButton>
        <CopyButton label="Hand">
          <Icons.HandIcon />
        </CopyButton>
        <CopyButton label="Ruler Horizontal">
          <Icons.RulerHorizontalIcon />
        </CopyButton>
        <CopyButton label="Ruler Square">
          <Icons.RulerSquareIcon />
        </CopyButton>
        <CopyButton label="Clipboard">
          <Icons.ClipboardIcon />
        </CopyButton>
        <CopyButton label="Clipboard Copy">
          <Icons.ClipboardCopyIcon />
        </CopyButton>
        <CopyButton label="Star">
          <Icons.StarIcon />
        </CopyButton>
        <CopyButton label="StarFilled">
          <Icons.StarFilledIcon />
        </CopyButton>
        <CopyButton label="Cookie">
          <Icons.CookieIcon />
        </CopyButton>
      </Group>
    </Box>
  );
};

const Typography = () => {
  return (
    <Box>
      <Label>Typography</Label>
      <Group>
        <CopyButton label="Font Style">
          <Icons.FontStyleIcon />
        </CopyButton>
        <CopyButton label="Font Italic">
          <Icons.FontItalicIcon />
        </CopyButton>
        <CopyButton label="Font Roman">
          <Icons.FontRomanIcon />
        </CopyButton>
        <CopyButton label="Font Bold">
          <Icons.FontBoldIcon />
        </CopyButton>
        <CopyButton label="Letter Case Uppercase">
          <Icons.LetterCaseUppercaseIcon />
        </CopyButton>
        <CopyButton label="Letter Case Capitalize">
          <Icons.LetterCaseCapitalizeIcon />
        </CopyButton>
        <CopyButton label="Letter Case Lowercase">
          <Icons.LetterCaseLowercaseIcon />
        </CopyButton>
        <CopyButton label="Letter Case Toggle">
          <Icons.LetterCaseToggleIcon />
        </CopyButton>
        <CopyButton label="Letter Spacing">
          <Icons.LetterSpacingIcon />
        </CopyButton>
        <CopyButton label="Align Baseline">
          <Icons.AlignBaselineIcon />
        </CopyButton>
        <CopyButton label="Font Size">
          <Icons.FontSizeIcon />
        </CopyButton>
        <CopyButton label="Font Family">
          <Icons.FontFamilyIcon />
        </CopyButton>
        <CopyButton label="Heading">
          <Icons.HeadingIcon />
        </CopyButton>
        <CopyButton label="Text">
          <Icons.TextIcon />
        </CopyButton>
        <CopyButton label="Text None">
          <Icons.TextNoneIcon />
        </CopyButton>
        <CopyButton label="Line Height">
          <Icons.LineHeightIcon />
        </CopyButton>
        <CopyButton label="Underline">
          <Icons.UnderlineIcon />
        </CopyButton>
        <CopyButton label="Strikethrough">
          <Icons.StrikethroughIcon />
        </CopyButton>
        <CopyButton label="Overline">
          <Icons.OverlineIcon />
        </CopyButton>
        <CopyButton label="Pilcrow">
          <Icons.PilcrowIcon />
        </CopyButton>
        <CopyButton label="Text Align Left">
          <Icons.TextAlignLeftIcon />
        </CopyButton>
        <CopyButton label="Text Align Center">
          <Icons.TextAlignCenterIcon />
        </CopyButton>
        <CopyButton label="Text Align Right">
          <Icons.TextAlignRightIcon />
        </CopyButton>
        <CopyButton label="Text Align Justify">
          <Icons.TextAlignJustifyIcon />
        </CopyButton>
      </Group>
    </Box>
  );
};
