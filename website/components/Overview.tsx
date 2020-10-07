import React from 'react';
import useDarkMode from 'use-dark-mode';
import Icons from '@modulz/radix-icons';
import { Box, Grid, Text, darkThemeClass, styled } from '@modulz/design-system';
import { Tooltip } from './Tooltip';

export const Overview = React.memo(() => {
  return (
    <Grid css={{ padding: '0 $6 $2', gap: '$8', gridTemplateColumns: 'repeat(3, 1fr)' }}>
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
  letterSpacing: '-0.02em'
});

const Group = styled(Grid, {
  color: '$hiContrast',
  rowGap: '$6',
  gridTemplateColumns: 'repeat(6, 15px)',
  justifyItems: 'center',
  justifyContent: 'space-between',
  margin: '$4 0 $6',
  padding: '0 $1'
});

const Abstract = () => {
  return (
    <Box>
      <Label>Abstract</Label>
      <Group>
        <Tooltip label="Hamburger">
          <Icons.HamburgerIcon />
        </Tooltip>
        <Tooltip label="Cross 1">
          <Icons.Cross1Icon />
        </Tooltip>
        <Tooltip label="Dots Horizontal">
          <Icons.DotsHorizontalIcon />
        </Tooltip>
        <Tooltip label="Dots Vertical">
          <Icons.DotsVerticalIcon />
        </Tooltip>
        <Tooltip label="Plus">
          <Icons.PlusIcon />
        </Tooltip>
        <Tooltip label="Minus">
          <Icons.MinusIcon />
        </Tooltip>
        <Tooltip label="Check">
          <Icons.CheckIcon />
        </Tooltip>
        <Tooltip label="Cross 2">
          <Icons.Cross2Icon />
        </Tooltip>
        <Tooltip label="Check Circled">
          <Icons.CheckCircledIcon />
        </Tooltip>
        <Tooltip label="Cross Circled">
          <Icons.CrossCircledIcon />
        </Tooltip>
        <Tooltip label="Plus Circled">
          <Icons.PlusCircledIcon />
        </Tooltip>
        <Tooltip label="Minus Circled">
          <Icons.MinusCircledIcon />
        </Tooltip>
        <Tooltip label="Question Mark">
          <Icons.QuestionMarkIcon />
        </Tooltip>
        <Tooltip label="Question Mark Circled ">
          <Icons.QuestionMarkCircledIcon />
        </Tooltip>
        <Tooltip label="Info Circled">
          <Icons.InfoCircledIcon />
        </Tooltip>
        <Tooltip label="Exclamation Triangle">
          <Icons.ExclamationTriangleIcon />
        </Tooltip>
        <Tooltip label="Share 1">
          <Icons.Share1Icon />
        </Tooltip>
        <Tooltip label="Share 2">
          <Icons.Share2Icon />
        </Tooltip>
        <Tooltip label="External Link">
          <Icons.ExternalLinkIcon />
        </Tooltip>
        <Tooltip label="Enter">
          <Icons.EnterIcon />
        </Tooltip>
        <Tooltip label="Exit">
          <Icons.ExitIcon />
        </Tooltip>
        <Tooltip label="Download">
          <Icons.DownloadIcon />
        </Tooltip>
        <Tooltip label="Upload">
          <Icons.UploadIcon />
        </Tooltip>
        <Tooltip label="Reset">
          <Icons.ResetIcon />
        </Tooltip>
        <Tooltip label="Reload">
          <Icons.ReloadIcon />
        </Tooltip>
        <Tooltip label="Update">
          <Icons.UpdateIcon />
        </Tooltip>
        <Tooltip label="Enter Full Screen ">
          <Icons.EnterFullScreenIcon />
        </Tooltip>
        <Tooltip label="Exit Full Screen ">
          <Icons.ExitFullScreenIcon />
        </Tooltip>
        <Tooltip label="Drag Handle Vertical ">
          <Icons.DragHandleVerticalIcon />
        </Tooltip>
        <Tooltip label="Drag Handle Horizontal ">
          <Icons.DragHandleHorizontalIcon />
        </Tooltip>
        <Tooltip label="Drag Handle Dots  1">
          <Icons.DragHandleDots1Icon />
        </Tooltip>
        <Tooltip label="Drag Handle Dots  2">
          <Icons.DragHandleDots2Icon />
        </Tooltip>
        <Tooltip label="Dot">
          <Icons.DotIcon />
        </Tooltip>
        <Tooltip label="Dot Solid">
          <Icons.DotSolidIcon />
        </Tooltip>
        <Tooltip label="Commit">
          <Icons.CommitIcon />
        </Tooltip>
        <Tooltip label="Slash">
          <Icons.SlashIcon />
        </Tooltip>
        <Tooltip label="Half 1">
          <Icons.Half1Icon />
        </Tooltip>
        <Tooltip label="Half 2">
          <Icons.Half2Icon />
        </Tooltip>
        <Tooltip label="View None">
          <Icons.ViewNoneIcon />
        </Tooltip>
        <Tooltip label="View Vertical">
          <Icons.ViewVerticalIcon />
        </Tooltip>
        <Tooltip label="View Horizontal">
          <Icons.ViewHorizontalIcon />
        </Tooltip>
        <Tooltip label="View Grid">
          <Icons.ViewGridIcon />
        </Tooltip>
      </Group>
    </Box>
  );
};

const Alignment = () => {
  return (
    <Box>
      <Label>Alignment</Label>
      <Group>
        <Tooltip label="Align Left">
          <Icons.AlignLeftIcon />
        </Tooltip>
        <Tooltip label="Align Vertical Centers ">
          <Icons.AlignVerticalCentersIcon />
        </Tooltip>
        <Tooltip label="Align Right">
          <Icons.AlignRightIcon />
        </Tooltip>
        <Tooltip label="Align Top">
          <Icons.AlignTopIcon />
        </Tooltip>
        <Tooltip label="Align Horizontal Centers ">
          <Icons.AlignHorizontalCentersIcon />
        </Tooltip>
        <Tooltip label="Align Bottom">
          <Icons.AlignBottomIcon />
        </Tooltip>
        <Tooltip label="Align Stretch">
          <Icons.AlignStretchIcon />
        </Tooltip>
        <Tooltip label="Align Start">
          <Icons.AlignStartIcon />
        </Tooltip>
        <Tooltip label="Align Center">
          <Icons.AlignCenterIcon />
        </Tooltip>
        <Tooltip label="Align End">
          <Icons.AlignEndIcon />
        </Tooltip>
        <Tooltip label="Justify Stretch">
          <Icons.JustifyStretchIcon />
        </Tooltip>
        <Tooltip label="Justify Start">
          <Icons.JustifyStartIcon />
        </Tooltip>
        <Tooltip label="Justify Center">
          <Icons.JustifyCenterIcon />
        </Tooltip>
        <Tooltip label="Justify End">
          <Icons.JustifyEndIcon />
        </Tooltip>
        <Tooltip label="Pin Left">
          <Icons.PinLeftIcon />
        </Tooltip>
        <Tooltip label="Pin Right">
          <Icons.PinRightIcon />
        </Tooltip>
        <Tooltip label="Pin Top">
          <Icons.PinTopIcon />
        </Tooltip>
        <Tooltip label="Pin Bottom">
          <Icons.PinBottomIcon />
        </Tooltip>
      </Group>
    </Box>
  );
};

const Arrows = () => {
  return (
    <Box>
      <Label>Arrows</Label>
      <Group>
        <Tooltip label="Arrow Left">
          <Icons.ArrowLeftIcon />
        </Tooltip>
        <Tooltip label="Arrow Right">
          <Icons.ArrowRightIcon />
        </Tooltip>
        <Tooltip label="Arrow Up">
          <Icons.ArrowUpIcon />
        </Tooltip>
        <Tooltip label="Arrow Down">
          <Icons.ArrowDownIcon />
        </Tooltip>
        <Tooltip label="Arrow Top Left ">
          <Icons.ArrowTopLeftIcon />
        </Tooltip>
        <Tooltip label="Arrow Top Right ">
          <Icons.ArrowTopRightIcon />
        </Tooltip>
        <Tooltip label="Arrow Bottom Left ">
          <Icons.ArrowBottomLeftIcon />
        </Tooltip>
        <Tooltip label="Arrow Bottom Right ">
          <Icons.ArrowBottomRightIcon />
        </Tooltip>
        <Tooltip label="Chevron Down">
          <Icons.ChevronDownIcon />
        </Tooltip>
        <Tooltip label="Chevron Left">
          <Icons.ChevronLeftIcon />
        </Tooltip>
        <Tooltip label="Chevron Right">
          <Icons.ChevronRightIcon />
        </Tooltip>
        <Tooltip label="Chevron Up">
          <Icons.ChevronUpIcon />
        </Tooltip>
        <Tooltip label="Double Arrow Down ">
          <Icons.DoubleArrowDownIcon />
        </Tooltip>
        <Tooltip label="Double Arrow Left ">
          <Icons.DoubleArrowLeftIcon />
        </Tooltip>
        <Tooltip label="Double Arrow Right ">
          <Icons.DoubleArrowRightIcon />
        </Tooltip>
        <Tooltip label="Double Arrow Up ">
          <Icons.DoubleArrowUpIcon />
        </Tooltip>
        <Tooltip label="Thick Arrow Left ">
          <Icons.ThickArrowLeftIcon />
        </Tooltip>
        <Tooltip label="Thick Arrow Right ">
          <Icons.ThickArrowRightIcon />
        </Tooltip>
        <Tooltip label="Thick Arrow Up ">
          <Icons.ThickArrowUpIcon />
        </Tooltip>
        <Tooltip label="Thick Arrow Down ">
          <Icons.ThickArrowDownIcon />
        </Tooltip>
        <Tooltip label="Triangle Left">
          <Icons.TriangleLeftIcon />
        </Tooltip>
        <Tooltip label="Triangle Right">
          <Icons.TriangleRightIcon />
        </Tooltip>
        <Tooltip label="Triangle Up">
          <Icons.TriangleUpIcon />
        </Tooltip>
        <Tooltip label="Triangle Down">
          <Icons.TriangleDownIcon />
        </Tooltip>
        <Tooltip label="Caret Left">
          <Icons.CaretLeftIcon />
        </Tooltip>
        <Tooltip label="Caret Right">
          <Icons.CaretRightIcon />
        </Tooltip>
        <Tooltip label="Caret Up">
          <Icons.CaretUpIcon />
        </Tooltip>
        <Tooltip label="Caret Down">
          <Icons.CaretDownIcon />
        </Tooltip>
        <Tooltip label="Caret Sort">
          <Icons.CaretSortIcon />
        </Tooltip>
        <Tooltip label="Width">
          <Icons.WidthIcon />
        </Tooltip>
        <Tooltip label="Height">
          <Icons.HeightIcon />
        </Tooltip>
        <Tooltip label="Size">
          <Icons.SizeIcon />
        </Tooltip>
        <Tooltip label="Move">
          <Icons.MoveIcon />
        </Tooltip>
        <Tooltip label="All Sides">
          <Icons.AllSidesIcon />
        </Tooltip>
      </Group>
    </Box>
  );
};

const Borders = () => {
  return (
    <Box>
      <Label>Borders and corners</Label>
      <Group>
        <Tooltip label="Border All">
          <Icons.BorderAllIcon />
        </Tooltip>
        <Tooltip label="Border Split">
          <Icons.BorderSplitIcon />
        </Tooltip>
        <Tooltip label="Border None">
          <Icons.BorderNoneIcon />
        </Tooltip>
        <Tooltip label="Border Left">
          <Icons.BorderLeftIcon />
        </Tooltip>
        <Tooltip label="Border Right">
          <Icons.BorderRightIcon />
        </Tooltip>
        <Tooltip label="Border Top">
          <Icons.BorderTopIcon />
        </Tooltip>
        <Tooltip label="Border Bottom">
          <Icons.BorderBottomIcon />
        </Tooltip>
        <Tooltip label="Corners">
          <Icons.CornersIcon />
        </Tooltip>
        <Tooltip label="Corner Top Left ">
          <Icons.CornerTopLeftIcon />
        </Tooltip>
        <Tooltip label="Corner Top Right ">
          <Icons.CornerTopRightIcon />
        </Tooltip>
        <Tooltip label="Corner Bottom Left ">
          <Icons.CornerBottomLeftIcon />
        </Tooltip>
        <Tooltip label="Corner Bottom Right ">
          <Icons.CornerBottomRightIcon />
        </Tooltip>
        <Tooltip label="Border Style">
          <Icons.BorderStyleIcon />
        </Tooltip>
        <Tooltip label="Border Solid">
          <Icons.BorderSolidIcon />
        </Tooltip>
        <Tooltip label="Border Dashed">
          <Icons.BorderDashedIcon />
        </Tooltip>
        <Tooltip label="Border Dotted">
          <Icons.BorderDottedIcon />
        </Tooltip>
      </Group>
    </Box>
  );
};

const Components = () => {
  return (
    <Box>
      <Label>Components</Label>
      <Group>
        <Tooltip label="Box">
          <Icons.BoxIcon />
        </Tooltip>
        <Tooltip label="Aspect Ratio">
          <Icons.AspectRatioIcon />
        </Tooltip>
        <Tooltip label="Container">
          <Icons.ContainerIcon />
        </Tooltip>
        <Tooltip label="Section">
          <Icons.SectionIcon />
        </Tooltip>
        <Tooltip label="Layout">
          <Icons.LayoutIcon />
        </Tooltip>
        <Tooltip label="Grid">
          <Icons.GridIcon />
        </Tooltip>
        <Tooltip label="Table">
          <Icons.TableIcon />
        </Tooltip>
        <Tooltip label="Image">
          <Icons.ImageIcon />
        </Tooltip>
        <Tooltip label="Switch">
          <Icons.SwitchIcon />
        </Tooltip>
        <Tooltip label="Checkbox">
          <Icons.CheckboxIcon />
        </Tooltip>
        <Tooltip label="Radiobutton">
          <Icons.RadiobuttonIcon />
        </Tooltip>
        <Tooltip label="Avatar">
          <Icons.AvatarIcon />
        </Tooltip>
        <Tooltip label="Button">
          <Icons.ButtonIcon />
        </Tooltip>
        <Tooltip label="Badge">
          <Icons.BadgeIcon />
        </Tooltip>
        <Tooltip label="Input">
          <Icons.InputIcon />
        </Tooltip>
        <Tooltip label="Slider">
          <Icons.SliderIcon />
        </Tooltip>
        <Tooltip label="Heading">
          <Icons.HeadingIcon />
        </Tooltip>
        <Tooltip label="Text">
          <Icons.TextIcon />
        </Tooltip>
        <Tooltip label="Quote">
          <Icons.QuoteIcon />
        </Tooltip>
        <Tooltip label="Code">
          <Icons.CodeIcon />
        </Tooltip>
        <Tooltip label="List Bullet">
          <Icons.ListBulletIcon />
        </Tooltip>
        <Tooltip label="Dropdown Menu">
          <Icons.DropdownMenuIcon />
        </Tooltip>
        <Tooltip label="Video">
          <Icons.VideoIcon />
        </Tooltip>
        <Tooltip label="Pie Chart">
          <Icons.PieChartIcon />
        </Tooltip>
        <Tooltip label="Calendar">
          <Icons.CalendarIcon />
        </Tooltip>
        <Tooltip label="Dashboard">
          <Icons.DashboardIcon />
        </Tooltip>
        <Tooltip label="Activity Log">
          <Icons.ActivityLogIcon />
        </Tooltip>
        <Tooltip label="Divider Vertical">
          <Icons.DividerVerticalIcon />
        </Tooltip>
        <Tooltip label="Divider Horizontal">
          <Icons.DividerHorizontalIcon />
        </Tooltip>
      </Group>
    </Box>
  );
};

const Design = () => {
  return (
    <Box>
      <Label>Design</Label>
      <Group>
        <Tooltip label="Frame">
          <Icons.FrameIcon />
        </Tooltip>
        <Tooltip label="Crop">
          <Icons.CropIcon />
        </Tooltip>
        <Tooltip label="Layers">
          <Icons.LayersIcon />
        </Tooltip>
        <Tooltip label="Stack">
          <Icons.StackIcon />
        </Tooltip>
        <Tooltip label="Tokens">
          <Icons.TokensIcon />
        </Tooltip>
        <Tooltip label="Component 1">
          <Icons.Component1Icon />
        </Tooltip>
        <Tooltip label="Component 2">
          <Icons.Component2Icon />
        </Tooltip>
        <Tooltip label="Symbol">
          <Icons.SymbolIcon />
        </Tooltip>
        <Tooltip label="Component Instance">
          <Icons.ComponentInstanceIcon />
        </Tooltip>
        <Tooltip label="Component None">
          <Icons.ComponentNoneIcon />
        </Tooltip>
        <Tooltip label="Component Boolean">
          <Icons.ComponentBooleanIcon />
        </Tooltip>
        <Tooltip label="Component Placeholder">
          <Icons.ComponentPlaceholderIcon />
        </Tooltip>
        <Tooltip label="Opacity">
          <Icons.OpacityIcon />
        </Tooltip>
        <Tooltip label="Blending Mode">
          <Icons.BlendingModeIcon />
        </Tooltip>
        <Tooltip label="Mask On">
          <Icons.MaskOnIcon />
        </Tooltip>
        <Tooltip label="Mask Off">
          <Icons.MaskOffIcon />
        </Tooltip>
        <Tooltip label="Shadow">
          <Icons.ShadowIcon />
        </Tooltip>
        <Tooltip label="Shadow None">
          <Icons.ShadowNoneIcon />
        </Tooltip>
        <Tooltip label="Value">
          <Icons.ValueIcon />
        </Tooltip>
        <Tooltip label="Value None">
          <Icons.ValueNoneIcon />
        </Tooltip>
        <Tooltip label="Zoom In">
          <Icons.ZoomInIcon />
        </Tooltip>
        <Tooltip label="Zoom Out">
          <Icons.ZoomOutIcon />
        </Tooltip>
        <Tooltip label="Cursor Text">
          <Icons.CursorTextIcon />
        </Tooltip>
        <Tooltip label="Square">
          <Icons.SquareIcon />
        </Tooltip>
        <Tooltip label="Group">
          <Icons.GroupIcon />
        </Tooltip>
        <Tooltip label="Dimensions">
          <Icons.DimensionsIcon />
        </Tooltip>
        <Tooltip label="Box Model">
          <Icons.BoxModelIcon />
        </Tooltip>
        <Tooltip label="Margin">
          <Icons.MarginIcon />
        </Tooltip>
        <Tooltip label="Columns">
          <Icons.ColumnsIcon />
        </Tooltip>
        <Tooltip label="Rows">
          <Icons.RowsIcon />
        </Tooltip>
      </Group>
    </Box>
  );
};

const Logos = () => {
  return (
    <Box>
      <Label>Logos</Label>
      <Group>
        <Tooltip label="Modulz Logo">
          <Icons.ModulzLogoIcon />
        </Tooltip>
        <Tooltip label="Figma Logo">
          <Icons.FigmaLogoIcon />
        </Tooltip>
        <Tooltip label="Framer Logo">
          <Icons.FramerLogoIcon />
        </Tooltip>
        <Tooltip label="Sketch Logo">
          <Icons.SketchLogoIcon />
        </Tooltip>
        <Tooltip label="Stitches Logo">
          <Icons.StitchesLogoIcon />
        </Tooltip>
      </Group>
    </Box>
  );
};

const Music = () => {
  return (
    <Box>
      <Label>Music</Label>
      <Group>
        <Tooltip label="Play">
          <Icons.PlayIcon />
        </Tooltip>
        <Tooltip label="Resume">
          <Icons.ResumeIcon />
        </Tooltip>
        <Tooltip label="Pause">
          <Icons.PauseIcon />
        </Tooltip>
        <Tooltip label="Stop">
          <Icons.StopIcon />
        </Tooltip>
        <Tooltip label="Track Previous">
          <Icons.TrackPreviousIcon />
        </Tooltip>
        <Tooltip label="Track Next">
          <Icons.TrackNextIcon />
        </Tooltip>
        <Tooltip label="Loop">
          <Icons.LoopIcon />
        </Tooltip>
        <Tooltip label="Shuffle">
          <Icons.ShuffleIcon />
        </Tooltip>
        <Tooltip label="Speaker Loud">
          <Icons.SpeakerLoudIcon />
        </Tooltip>
        <Tooltip label="Speaker Moderate">
          <Icons.SpeakerModerateIcon />
        </Tooltip>
        <Tooltip label="Speaker Quiet">
          <Icons.SpeakerQuietIcon />
        </Tooltip>
        <Tooltip label="Speaker Off">
          <Icons.SpeakerOffIcon />
        </Tooltip>
      </Group>
    </Box>
  );
};

const Objects = () => {
  return (
    <Box>
      <Label>Objects</Label>
      <Group>
        <Tooltip label="Magnifying Glass">
          <Icons.MagnifyingGlassIcon />
        </Tooltip>
        <Tooltip label="Gear">
          <Icons.GearIcon />
        </Tooltip>
        <Tooltip label="Bell">
          <Icons.BellIcon />
        </Tooltip>
        <Tooltip label="Home">
          <Icons.HomeIcon />
        </Tooltip>
        <Tooltip label="Lock Closed">
          <Icons.LockClosedIcon />
        </Tooltip>
        <Tooltip label="Lock Open 1 ">
          <Icons.LockOpen1Icon />
        </Tooltip>
        <Tooltip label="Lock Open 2 ">
          <Icons.LockOpen2Icon />
        </Tooltip>
        <Tooltip label="Backpack">
          <Icons.BackpackIcon />
        </Tooltip>
        <Tooltip label="Camera">
          <Icons.CameraIcon />
        </Tooltip>
        <Tooltip label="Paper Plane">
          <Icons.PaperPlaneIcon />
        </Tooltip>
        <Tooltip label="Rocket">
          <Icons.RocketIcon />
        </Tooltip>
        <Tooltip label="Envelope Closed">
          <Icons.EnvelopeClosedIcon />
        </Tooltip>
        <Tooltip label="Envelope Open">
          <Icons.EnvelopeOpenIcon />
        </Tooltip>
        <Tooltip label="Chat Bubble">
          <Icons.ChatBubbleIcon />
        </Tooltip>
        <Tooltip label="Link 1">
          <Icons.Link1Icon />
        </Tooltip>
        <Tooltip label="Link None 1 ">
          <Icons.LinkNone1Icon />
        </Tooltip>
        <Tooltip label="Link Break 1 ">
          <Icons.LinkBreak1Icon />
        </Tooltip>
        <Tooltip label="Link 2">
          <Icons.Link2Icon />
        </Tooltip>
        <Tooltip label="Link None 2 ">
          <Icons.LinkNone2Icon />
        </Tooltip>
        <Tooltip label="Link Break 2 ">
          <Icons.LinkBreak2Icon />
        </Tooltip>
        <Tooltip label="Trash">
          <Icons.TrashIcon />
        </Tooltip>
        <Tooltip label="Pencil 1">
          <Icons.Pencil1Icon />
        </Tooltip>
        <Tooltip label="Pencil 2">
          <Icons.Pencil2Icon />
        </Tooltip>
        <Tooltip label="Bookmark">
          <Icons.BookmarkIcon />
        </Tooltip>
        <Tooltip label="Drawing Pin">
          <Icons.DrawingPinIcon />
        </Tooltip>
        <Tooltip label="Drawing Pin Solid ">
          <Icons.DrawingPinSolidIcon />
        </Tooltip>
        <Tooltip label="Sewing Pin">
          <Icons.SewingPinIcon />
        </Tooltip>
        <Tooltip label="Sewing Pin Solid ">
          <Icons.SewingPinSolidIcon />
        </Tooltip>
        <Tooltip label="Cube">
          <Icons.CubeIcon />
        </Tooltip>
        <Tooltip label="Mix">
          <Icons.MixIcon />
        </Tooltip>
        <Tooltip label="Mixer Horizontal">
          <Icons.MixerHorizontalIcon />
        </Tooltip>
        <Tooltip label="Mixer Vertical">
          <Icons.MixerVerticalIcon />
        </Tooltip>
        <Tooltip label="File">
          <Icons.FileIcon />
        </Tooltip>
        <Tooltip label="File Text">
          <Icons.FileTextIcon />
        </Tooltip>
        <Tooltip label="File Plus">
          <Icons.FilePlusIcon />
        </Tooltip>
        <Tooltip label="File Minus">
          <Icons.FileMinusIcon />
        </Tooltip>
        <Tooltip label="Reader">
          <Icons.ReaderIcon />
        </Tooltip>
        <Tooltip label="Id Card">
          <Icons.IdCardIcon />
        </Tooltip>
        <Tooltip label="Crosshair 1">
          <Icons.Crosshair1Icon />
        </Tooltip>
        <Tooltip label="Crosshair 2">
          <Icons.Crosshair2Icon />
        </Tooltip>
        <Tooltip label="Target">
          <Icons.TargetIcon />
        </Tooltip>
        <Tooltip label="Disc">
          <Icons.DiscIcon />
        </Tooltip>
        <Tooltip label="Globe">
          <Icons.GlobeIcon />
        </Tooltip>
        <Tooltip label="Clock">
          <Icons.ClockIcon />
        </Tooltip>
        <Tooltip label="Timer">
          <Icons.TimerIcon />
        </Tooltip>
        <Tooltip label="Stopwatch">
          <Icons.StopwatchIcon />
        </Tooltip>
        <Tooltip label="Lap Timer">
          <Icons.LapTimerIcon />
        </Tooltip>
        <Tooltip label="Countdown Timer">
          <Icons.CountdownTimerIcon />
        </Tooltip>
        <Tooltip label="Face">
          <Icons.FaceIcon />
        </Tooltip>
        <Tooltip label="Person">
          <Icons.PersonIcon />
        </Tooltip>
        <Tooltip label="Eye Open">
          <Icons.EyeOpenIcon />
        </Tooltip>
        <Tooltip label="Eye Closed">
          <Icons.EyeClosedIcon />
        </Tooltip>
      </Group>
    </Box>
  );
};

const Typography = () => {
  return (
    <Box>
      <Label>Typography</Label>
      <Group>
        <Tooltip label="Font Style">
          <Icons.FontStyleIcon />
        </Tooltip>
        <Tooltip label="Font Italic">
          <Icons.FontItalicIcon />
        </Tooltip>
        <Tooltip label="Font Roman">
          <Icons.FontRomanIcon />
        </Tooltip>
        <Tooltip label="Font Bold">
          <Icons.FontBoldIcon />
        </Tooltip>
        <Tooltip label="Letter Case Uppercase ">
          <Icons.LetterCaseUppercaseIcon />
        </Tooltip>
        <Tooltip label="Letter Case Capitalize ">
          <Icons.LetterCaseCapitalizeIcon />
        </Tooltip>
        <Tooltip label="Letter Case Lowercase ">
          <Icons.LetterCaseLowercaseIcon />
        </Tooltip>
        <Tooltip label="Letter Case Toggle ">
          <Icons.LetterCaseToggleIcon />
        </Tooltip>
        <Tooltip label="Letter Spacing">
          <Icons.LetterSpacingIcon />
        </Tooltip>
        <Tooltip label="Align Baseline">
          <Icons.AlignBaselineIcon />
        </Tooltip>
        <Tooltip label="Font Size">
          <Icons.FontSizeIcon />
        </Tooltip>
        <Tooltip label="Font Family">
          <Icons.FontFamilyIcon />
        </Tooltip>
        <Tooltip label="Underline">
          <Icons.UnderlineIcon />
        </Tooltip>
        <Tooltip label="Strikethrough">
          <Icons.StrikethroughIcon />
        </Tooltip>
        <Tooltip label="Overline">
          <Icons.OverlineIcon />
        </Tooltip>
        <Tooltip label="Line Height">
          <Icons.LineHeightIcon />
        </Tooltip>
        <Tooltip label="Text Align Left ">
          <Icons.TextAlignLeftIcon />
        </Tooltip>
        <Tooltip label="Text Align Center ">
          <Icons.TextAlignCenterIcon />
        </Tooltip>
        <Tooltip label="Text Align Right ">
          <Icons.TextAlignRightIcon />
        </Tooltip>
        <Tooltip label="Text Align Justify ">
          <Icons.TextAlignJustifyIcon />
        </Tooltip>
      </Group>
    </Box>
  );
};
