import * as React from 'react';

interface SVGIconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
}

interface AlignBaselineOutline25IconProps extends SVGIconProps {
  name: 'align-baseline';
  size: '25';
}

export const AlignBaselineOutline25Icon: React.FunctionComponent<
  AlignBaselineOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.5 20.5h-16" stroke={color} strokeLinecap="round" />
    <path
      d="M20.5 13.5l-3 4-3-4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M17.5 7.5v10" stroke={color} strokeLinecap="round" />
    <path d="M5.5 14.5h5" stroke={color} />
    <path
      d="M4.5 17.5L8 7.5l3.5 10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface AlignCenterOutline25IconProps extends SVGIconProps {
  name: 'align-center';
  size: '25';
}

export const AlignCenterOutline25Icon: React.FunctionComponent<
  AlignCenterOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.5 12.5h-16" stroke={color} strokeLinecap="round" />
    <path d="M16.5 8.5h-8v4h8v-4zM16.5 12.5h-8v4h8v-4z" stroke={color} />
  </svg>
);

interface AlignEndOutline25IconProps extends SVGIconProps {
  name: 'align-end';
  size: '25';
}

export const AlignEndOutline25Icon: React.FunctionComponent<
  AlignEndOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.5 20.5h-16" stroke={color} strokeLinecap="round" />
    <path d="M16.5 12.5h-8v4h8v-4zM16.5 16.5h-8v4h8v-4z" stroke={color} />
  </svg>
);

interface AlignStartOutline25IconProps extends SVGIconProps {
  name: 'align-start';
  size: '25';
}

export const AlignStartOutline25Icon: React.FunctionComponent<
  AlignStartOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.5 4.5h-16" stroke={color} strokeLinecap="round" />
    <path d="M16.5 4.5h-8v4h8v-4zM16.5 8.5h-8v4h8v-4z" stroke={color} />
  </svg>
);

interface AlignStretchOutline25IconProps extends SVGIconProps {
  name: 'align-stretch';
  size: '25';
}

export const AlignStretchOutline25Icon: React.FunctionComponent<
  AlignStretchOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.5 4.5h-16M20.5 20.5h-16"
      stroke={color}
      strokeLinecap="round"
    />
    <path d="M14.5 4.5h-4v16h4v-16z" stroke={color} />
  </svg>
);

interface ArrowDownCircledOutline25IconProps extends SVGIconProps {
  name: 'arrow-down-circled';
  size: '25';
}

export const ArrowDownCircledOutline25Icon: React.FunctionComponent<
  ArrowDownCircledOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
    <path
      d="M9.5 12.5l3 4 3-4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.5 16.5v-8" stroke={color} strokeLinecap="round" />
  </svg>
);

interface ArrowDownOutline25IconProps extends SVGIconProps {
  name: 'arrow-down';
  size: '25';
}

export const ArrowDownOutline25Icon: React.FunctionComponent<
  ArrowDownOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.5 14.5l-6 6-6-6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.5 4.5v16" stroke={color} strokeLinecap="round" />
  </svg>
);

interface ArrowLeftCircledOutline25IconProps extends SVGIconProps {
  name: 'arrow-left-circled';
  size: '25';
}

export const ArrowLeftCircledOutline25Icon: React.FunctionComponent<
  ArrowLeftCircledOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
    <path
      d="M12.5 9.5l-4 3 4 3"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8.5 12.5h8" stroke={color} strokeLinecap="round" />
  </svg>
);

interface ArrowLeftOutline25IconProps extends SVGIconProps {
  name: 'arrow-left';
  size: '25';
}

export const ArrowLeftOutline25Icon: React.FunctionComponent<
  ArrowLeftOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5 6.5l-6 6 6 6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M4.5 12.5h16" stroke={color} strokeLinecap="round" />
  </svg>
);

interface ArrowRightCircledOutline25IconProps extends SVGIconProps {
  name: 'arrow-right-circled';
  size: '25';
}

export const ArrowRightCircledOutline25Icon: React.FunctionComponent<
  ArrowRightCircledOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
    <path
      d="M13.5 9.5l3 3-3 3"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8.5 12.5h8" stroke={color} strokeLinecap="round" />
  </svg>
);

interface ArrowRightOutline25IconProps extends SVGIconProps {
  name: 'arrow-right';
  size: '25';
}

export const ArrowRightOutline25Icon: React.FunctionComponent<
  ArrowRightOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.5 6.5l6 6-6 6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M4.5 12.5h16" stroke={color} strokeLinecap="round" />
  </svg>
);

interface ArrowUpCircledOutline25IconProps extends SVGIconProps {
  name: 'arrow-up-circled';
  size: '25';
}

export const ArrowUpCircledOutline25Icon: React.FunctionComponent<
  ArrowUpCircledOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
    <path
      d="M9.5 12.5l3-4 3 4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.5 16.5v-8" stroke={color} strokeLinecap="round" />
  </svg>
);

interface ArrowUpOutline25IconProps extends SVGIconProps {
  name: 'arrow-up';
  size: '25';
}

export const ArrowUpOutline25Icon: React.FunctionComponent<
  ArrowUpOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.5 10.5l-6-6-6 6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.5 4.5v16" stroke={color} strokeLinecap="round" />
  </svg>
);

interface BackpackOutline25IconProps extends SVGIconProps {
  name: 'backpack';
  size: '25';
}

export const BackpackOutline25Icon: React.FunctionComponent<
  BackpackOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 10.5a6 6 0 1 1 12 0v9.69a.31.31 0 0 1-.31.31H6.81a.31.31 0 0 1-.31-.31V10.5z"
      stroke={color}
    />
    <path
      d="M15 13.5h-5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"
      stroke={color}
    />
    <path
      d="M9.5 5c0-2.5 3-2.5 3-2.5s3 0 3 2.5m-6 5.5c0-3 3-3 3-3s3 0 3 3h-6z"
      stroke={color}
      strokeLinejoin="round"
    />
    <path
      d="M4.5 13A1.5 1.5 0 0 1 6 11.5h.5v7H6A1.5 1.5 0 0 1 4.5 17v-4zm14-1.5h.5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-.5v-7z"
      stroke={color}
    />
  </svg>
);

interface BellOutline25IconProps extends SVGIconProps {
  name: 'bell';
  size: '25';
}

export const BellOutline25Icon: React.FunctionComponent<
  BellOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.45 18.5a2.5 2.5 0 0 1-2.45 2h-1a2.5 2.5 0 0 1-2.45-2h5.9z"
      stroke={color}
    />
    <path
      d="M5.5 15v3.5h14V15l-2.333-1.5V10S17.5 4.5 12.5 4.5 7.833 10 7.833 10v3.5L5.5 15z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface BookmarkOutline25IconProps extends SVGIconProps {
  name: 'bookmark';
  size: '25';
}

export const BookmarkOutline25Icon: React.FunctionComponent<
  BookmarkOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 4.5v16l5-4 5 4v-16h-10z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7 6.5h8" stroke={color} />
  </svg>
);

interface BorderDashedOutline25IconProps extends SVGIconProps {
  name: 'border-dashed';
  size: '25';
}

export const BorderDashedOutline25Icon: React.FunctionComponent<
  BorderDashedOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7 11H2v3h5v-3zM15 11h-5v3h5v-3zM23 11h-5v3h5v-3z" fill={color} />
  </svg>
);

interface BorderDottedOutline25IconProps extends SVGIconProps {
  name: 'border-dotted';
  size: '25';
}

export const BorderDottedOutline25Icon: React.FunctionComponent<
  BorderDottedOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM9.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM15.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM21.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      fill={color}
    />
  </svg>
);

interface BorderSolidOutline25IconProps extends SVGIconProps {
  name: 'border-solid';
  size: '25';
}

export const BorderSolidOutline25Icon: React.FunctionComponent<
  BorderSolidOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M23 11H2v3h21v-3z" fill={color} />
  </svg>
);

interface BoxOutline25IconProps extends SVGIconProps {
  name: 'box';
  size: '25';
}

export const BoxOutline25Icon: React.FunctionComponent<
  BoxOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 5.5H7A1.5 1.5 0 0 0 5.5 7v11A1.5 1.5 0 0 0 7 19.5h11a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 18 5.5z"
      stroke={color}
    />
  </svg>
);

interface BranchOutline25IconProps extends SVGIconProps {
  name: 'branch';
  size: '25';
}

export const BranchOutline25Icon: React.FunctionComponent<
  BranchOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.5 20.5V9" stroke={color} strokeLinecap="round" />
    <path
      d="M18.5 16.5v-8a2 2 0 0 0-2-2h-8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18.5 20.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
      stroke={color}
    />
  </svg>
);

interface BriefcaseOutline25IconProps extends SVGIconProps {
  name: 'briefcase';
  size: '25';
}

export const BriefcaseOutline25Icon: React.FunctionComponent<
  BriefcaseOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 14.5v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4"
      stroke={color}
      strokeLinejoin="round"
    />
    <path
      d="M4.5 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v4a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 12V8zm4-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1.5h-8V6z"
      stroke={color}
    />
    <path d="M12.5 13.5v4" stroke={color} strokeLinejoin="round" />
  </svg>
);

interface BullseyeOutline25IconProps extends SVGIconProps {
  name: 'bullseye';
  size: '25';
}

export const BullseyeOutline25Icon: React.FunctionComponent<
  BullseyeOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke={color} />
    <path d="M12.5 17.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" stroke={color} />
    <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
  </svg>
);

interface ButtonOutline25IconProps extends SVGIconProps {
  name: 'button';
  size: '25';
}

export const ButtonOutline25Icon: React.FunctionComponent<
  ButtonOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 9.5H6A1.5 1.5 0 0 0 4.5 11v3A1.5 1.5 0 0 0 6 15.5h13a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 19 9.5z"
      stroke={color}
    />
  </svg>
);

interface CameraOutline25IconProps extends SVGIconProps {
  name: 'camera';
  size: '25';
}

export const CameraOutline25Icon: React.FunctionComponent<
  CameraOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 17.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke={color} />
    <path
      d="M4.5 17.5V9.654a2 2 0 0 1 2-2h1.564a1 1 0 0 0 .733-.32l1.406-1.514a1 1 0 0 1 .733-.32h2.747a1 1 0 0 1 .71.296l1.547 1.562a1 1 0 0 0 .71.296h1.85a2 2 0 0 1 2 2V17.5a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CheckCircledOutline25IconProps extends SVGIconProps {
  name: 'check-circled';
  size: '25';
}

export const CheckCircledOutline25Icon: React.FunctionComponent<
  CheckCircledOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
    <path
      d="M15.5 9.5l-4 6-2-2.044"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CheckOutline25IconProps extends SVGIconProps {
  name: 'check';
  size: '25';
}

export const CheckOutline25Icon: React.FunctionComponent<
  CheckOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.5 5.5l-10 14-6-5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ChevronDownOutline25IconProps extends SVGIconProps {
  name: 'chevron-down';
  size: '25';
}

export const ChevronDownOutline25Icon: React.FunctionComponent<
  ChevronDownOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.5 9.5l-6 6-6-6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ChevronLeftOutline25IconProps extends SVGIconProps {
  name: 'chevron-left';
  size: '25';
}

export const ChevronLeftOutline25Icon: React.FunctionComponent<
  ChevronLeftOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 6.5l-6 6 6 6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ChevronRightOutline25IconProps extends SVGIconProps {
  name: 'chevron-right';
  size: '25';
}

export const ChevronRightOutline25Icon: React.FunctionComponent<
  ChevronRightOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 6.5l6 6-6 6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ChevronUpOutline25IconProps extends SVGIconProps {
  name: 'chevron-up';
  size: '25';
}

export const ChevronUpOutline25Icon: React.FunctionComponent<
  ChevronUpOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.5 15.5l-6-6-6 6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CircleSplitAngledOutline25IconProps extends SVGIconProps {
  name: 'circle-split-angled';
  size: '25';
}

export const CircleSplitAngledOutline25Icon: React.FunctionComponent<
  CircleSplitAngledOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM7 18L18 7"
      stroke={color}
    />
  </svg>
);

interface CircleSplitOutline25IconProps extends SVGIconProps {
  name: 'circle-split';
  size: '25';
}

export const CircleSplitOutline25Icon: React.FunctionComponent<
  CircleSplitOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12.5 20V5"
      stroke={color}
    />
  </svg>
);

interface CircleOutline25IconProps extends SVGIconProps {
  name: 'circle';
  size: '25';
}

export const CircleOutline25Icon: React.FunctionComponent<
  CircleOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
  </svg>
);

interface ClockOutline25IconProps extends SVGIconProps {
  name: 'clock';
  size: '25';
}

export const ClockOutline25Icon: React.FunctionComponent<
  ClockOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
    <path
      d="M14.5 14.5l-2-2v-5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CodeOutline25IconProps extends SVGIconProps {
  name: 'code';
  size: '25';
}

export const CodeOutline25Icon: React.FunctionComponent<
  CodeOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 8.5l-4 4 4 4M18.5 8.5l4 4-4 4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.032 20.324a.5.5 0 0 0 .936.352l-.936-.352zm6.936-15.648a.5.5 0 0 0-.936-.352l.936.352zm-6 16l6-16-.936-.352-6 16 .936.352z"
      fill={color}
    />
  </svg>
);

interface CreditCardOutline25IconProps extends SVGIconProps {
  name: 'credit-card';
  size: '25';
}

export const CreditCardOutline25Icon: React.FunctionComponent<
  CreditCardOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 6.5H6A1.5 1.5 0 0 0 4.5 8v9A1.5 1.5 0 0 0 6 18.5h13a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 19 6.5zM4.5 10.5h16"
      stroke={color}
    />
    <path
      d="M7.5 15.5h2"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CropOutline25IconProps extends SVGIconProps {
  name: 'crop';
  size: '25';
}

export const CropOutline25Icon: React.FunctionComponent<
  CropOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.5 4.5v11a1 1 0 0 0 1 1h11"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 8.5h11a1 1 0 0 1 1 1v11"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CrossCircledOutline25IconProps extends SVGIconProps {
  name: 'cross-circled';
  size: '25';
}

export const CrossCircledOutline25Icon: React.FunctionComponent<
  CrossCircledOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
    <path
      d="M9.5 15.5l6-6M15.5 15.5l-6-6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CrossOutline25IconProps extends SVGIconProps {
  name: 'cross';
  size: '25';
}

export const CrossOutline25Icon: React.FunctionComponent<
  CrossOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 19.5l14-14M19.5 19.5l-14-14"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CrosshairOutline25IconProps extends SVGIconProps {
  name: 'crosshair';
  size: '25';
}

export const CrosshairOutline25Icon: React.FunctionComponent<
  CrosshairOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12.5 5v3M5 12.5h3M17 12.5h3M12.5 17v3"
      stroke={color}
    />
  </svg>
);

interface CubeOutline25IconProps extends SVGIconProps {
  name: 'cube';
  size: '25';
}

export const CubeOutline25Icon: React.FunctionComponent<
  CubeOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 8v8.833l8 4.667 8-4.667V8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 12.5l8-4.5-8-4.5-8 4.5 8 4.5z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.5 12.5v9" stroke={color} />
  </svg>
);

interface DeviceDesktopOutline25IconProps extends SVGIconProps {
  name: 'device-desktop';
  size: '25';
}

export const DeviceDesktopOutline25Icon: React.FunctionComponent<
  DeviceDesktopOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 4.5H6A1.5 1.5 0 0 0 4.5 6v9A1.5 1.5 0 0 0 6 16.5h13a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 19 4.5z"
      stroke={color}
    />
    <path
      d="M16.5 20.5h-8M12.5 20v-3.5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface DeviceKeyboardOutline25IconProps extends SVGIconProps {
  name: 'device-keyboard';
  size: '25';
}

export const DeviceKeyboardOutline25Icon: React.FunctionComponent<
  DeviceKeyboardOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 7.5H6A1.5 1.5 0 0 0 4.5 9v7A1.5 1.5 0 0 0 6 17.5h13a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 19 7.5z"
      stroke={color}
    />
    <mask id="a" fill={color}>
      <path d="M8 10H7v1h1v-1z" />
    </mask>
    <path
      d="M7 10V9H6v1h1zm1 0h1V9H8v1zm0 1v1h1v-1H8zm-1 0H6v1h1v-1zm0 0h1V9H7v2zm0-1v1h2v-1H7zm1 0H7v2h1v-2zm0 1v-1H6v1h2z"
      fill={color}
      mask="url(#a)"
    />
    <mask id="b" fill={color}>
      <path d="M10 10H9v1h1v-1z" />
    </mask>
    <path
      d="M9 10V9H8v1h1zm1 0h1V9h-1v1zm0 1v1h1v-1h-1zm-1 0H8v1h1v-1zm0 0h1V9H9v2zm0-1v1h2v-1H9zm1 0H9v2h1v-2zm0 1v-1H8v1h2z"
      fill={color}
      mask="url(#b)"
    />
    <mask id="c" fill={color}>
      <path d="M12 10h-1v1h1v-1z" />
    </mask>
    <path
      d="M11 10V9h-1v1h1zm1 0h1V9h-1v1zm0 1v1h1v-1h-1zm-1 0h-1v1h1v-1zm0 0h1V9h-1v2zm0-1v1h2v-1h-2zm1 0h-1v2h1v-2zm0 1v-1h-2v1h2z"
      fill={color}
      mask="url(#c)"
    />
    <mask id="d" fill={color}>
      <path d="M14 10h-1v1h1v-1z" />
    </mask>
    <path
      d="M13 10V9h-1v1h1zm1 0h1V9h-1v1zm0 1v1h1v-1h-1zm-1 0h-1v1h1v-1zm0 0h1V9h-1v2zm0-1v1h2v-1h-2zm1 0h-1v2h1v-2zm0 1v-1h-2v1h2z"
      fill={color}
      mask="url(#d)"
    />
    <mask id="e" fill={color}>
      <path d="M16 10h-1v1h1v-1z" />
    </mask>
    <path
      d="M15 10V9h-1v1h1zm1 0h1V9h-1v1zm0 1v1h1v-1h-1zm-1 0h-1v1h1v-1zm0 0h1V9h-1v2zm0-1v1h2v-1h-2zm1 0h-1v2h1v-2zm0 1v-1h-2v1h2z"
      fill={color}
      mask="url(#e)"
    />
    <mask id="f" fill={color}>
      <path d="M18 10h-1v1h1v-1z" />
    </mask>
    <path
      d="M17 10V9h-1v1h1zm1 0h1V9h-1v1zm0 1v1h1v-1h-1zm-1 0h-1v1h1v-1zm0 0h1V9h-1v2zm0-1v1h2v-1h-2zm1 0h-1v2h1v-2zm0 1v-1h-2v1h2z"
      fill={color}
      mask="url(#f)"
    />
    <mask id="g" fill={color}>
      <path d="M9 12H8v1h1v-1z" />
    </mask>
    <path
      d="M8 12v-1H7v1h1zm1 0h1v-1H9v1zm0 1v1h1v-1H9zm-1 0H7v1h1v-1zm0 0h1v-2H8v2zm0-1v1h2v-1H8zm1 0H8v2h1v-2zm0 1v-1H7v1h2z"
      fill={color}
      mask="url(#g)"
    />
    <mask id="h" fill={color}>
      <path d="M8 14H7v1h1v-1z" />
    </mask>
    <path
      d="M7 14v-1H6v1h1zm1 0h1v-1H8v1zm0 1v1h1v-1H8zm-1 0H6v1h1v-1zm0 0h1v-2H7v2zm0-1v1h2v-1H7zm1 0H7v2h1v-2zm0 1v-1H6v1h2z"
      fill={color}
      mask="url(#h)"
    />
    <mask id="i" fill={color}>
      <path d="M18 14h-1v1h1v-1z" />
    </mask>
    <path
      d="M17 14v-1h-1v1h1zm1 0h1v-1h-1v1zm0 1v1h1v-1h-1zm-1 0h-1v1h1v-1zm0 0h1v-2h-1v2zm0-1v1h2v-1h-2zm1 0h-1v2h1v-2zm0 1v-1h-2v1h2z"
      fill={color}
      mask="url(#i)"
    />
    <mask id="j" fill={color}>
      <path d="M11 12h-1v1h1v-1z" />
    </mask>
    <path
      d="M10 12v-1H9v1h1zm1 0h1v-1h-1v1zm0 1v1h1v-1h-1zm-1 0H9v1h1v-1zm0 0h1v-2h-1v2zm0-1v1h2v-1h-2zm1 0h-1v2h1v-2zm0 1v-1H9v1h2z"
      fill={color}
      mask="url(#j)"
    />
    <mask id="k" fill={color}>
      <path d="M13 12h-1v1h1v-1z" />
    </mask>
    <path
      d="M12 12v-1h-1v1h1zm1 0h1v-1h-1v1zm0 1v1h1v-1h-1zm-1 0h-1v1h1v-1zm0 0h1v-2h-1v2zm0-1v1h2v-1h-2zm1 0h-1v2h1v-2zm0 1v-1h-2v1h2z"
      fill={color}
      mask="url(#k)"
    />
    <mask id="l" fill={color}>
      <path d="M15 12h-1v1h1v-1z" />
    </mask>
    <path
      d="M14 12v-1h-1v1h1zm1 0h1v-1h-1v1zm0 1v1h1v-1h-1zm-1 0h-1v1h1v-1zm0 0h1v-2h-1v2zm0-1v1h2v-1h-2zm1 0h-1v2h1v-2zm0 1v-1h-2v1h2z"
      fill={color}
      mask="url(#l)"
    />
    <mask id="m" fill={color}>
      <path d="M17 12h-1v1h1v-1z" />
    </mask>
    <path
      d="M16 12v-1h-1v1h1zm1 0h1v-1h-1v1zm0 1v1h1v-1h-1zm-1 0h-1v1h1v-1zm0 0h1v-2h-1v2zm0-1v1h2v-1h-2zm1 0h-1v2h1v-2zm0 1v-1h-2v1h2z"
      fill={color}
      mask="url(#m)"
    />
    <path d="M9.5 14.5h6" stroke={color} />
  </svg>
);

interface DeviceLaptopOutline25IconProps extends SVGIconProps {
  name: 'device-laptop';
  size: '25';
}

export const DeviceLaptopOutline25Icon: React.FunctionComponent<
  DeviceLaptopOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 13.5l-1 7h16l-1-7v-9h-14v9zM5.5 13.5h14"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface DeviceMicrophoneOutline25IconProps extends SVGIconProps {
  name: 'device-microphone';
  size: '25';
}

export const DeviceMicrophoneOutline25Icon: React.FunctionComponent<
  DeviceMicrophoneOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.5 5.5a3 3 0 1 0-6 0v8a3 3 0 1 0 6 0v-8z" stroke={color} />
    <path
      d="M6.5 11.5v2c0 6 5.647 6 6 6 .353 0 6 0 6-6v-2m-2 11h-8 8zm-4-3v3-3z"
      stroke={color}
      strokeLinejoin="round"
    />
  </svg>
);

interface DeviceMobileLandscapeOutline25IconProps extends SVGIconProps {
  name: 'device-mobile-landscape';
  size: '25';
}

export const DeviceMobileLandscapeOutline25Icon: React.FunctionComponent<
  DeviceMobileLandscapeOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 7.5H6A1.5 1.5 0 0 0 4.5 9v7A1.5 1.5 0 0 0 6 17.5h13a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 19 7.5z"
      stroke={color}
    />
    <path d="M17.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill={color} />
  </svg>
);

interface DeviceMobilePortraitOutline25IconProps extends SVGIconProps {
  name: 'device-mobile-portrait';
  size: '25';
}

export const DeviceMobilePortraitOutline25Icon: React.FunctionComponent<
  DeviceMobilePortraitOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 4.5H9A1.5 1.5 0 0 0 7.5 6v13A1.5 1.5 0 0 0 9 20.5h7a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 16 4.5z"
      stroke={color}
    />
    <path d="M12.5 18a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill={color} />
  </svg>
);

interface DeviceMouseOutline25IconProps extends SVGIconProps {
  name: 'device-mouse';
  size: '25';
}

export const DeviceMouseOutline25Icon: React.FunctionComponent<
  DeviceMouseOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 10.5v-3" stroke={color} strokeLinecap="round" />
    <path d="M17.5 9.5a5 5 0 0 0-10 0v6a5 5 0 0 0 10 0v-6z" stroke={color} />
  </svg>
);

interface DevicePrintOutline25IconProps extends SVGIconProps {
  name: 'device-print';
  size: '25';
}

export const DevicePrintOutline25Icon: React.FunctionComponent<
  DevicePrintOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 15.5H9A1.5 1.5 0 0 0 7.5 17v2A1.5 1.5 0 0 0 9 20.5h7a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5zM7.5 6A1.5 1.5 0 0 1 9 4.5h7A1.5 1.5 0 0 1 17.5 6v5.5h-10V6z"
      stroke={color}
    />
    <path
      d="M7.5 18.5H6A1.5 1.5 0 0 1 4.5 17v-4A1.5 1.5 0 0 1 6 11.5h13a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-1.5"
      stroke={color}
      strokeLinejoin="round"
    />
  </svg>
);

interface DeviceSpeakerOutline25IconProps extends SVGIconProps {
  name: 'device-speaker';
  size: '25';
}

export const DeviceSpeakerOutline25Icon: React.FunctionComponent<
  DeviceSpeakerOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 4.5H8A1.5 1.5 0 0 0 6.5 6v13A1.5 1.5 0 0 0 8 20.5h9a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 17 4.5z"
      stroke={color}
    />
    <path d="M12.5 17.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke={color} />
    <path d="M12.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill={color} />
  </svg>
);

interface DeviceTabletLandscapeOutline25IconProps extends SVGIconProps {
  name: 'device-tablet-landscape';
  size: '25';
}

export const DeviceTabletLandscapeOutline25Icon: React.FunctionComponent<
  DeviceTabletLandscapeOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 6.5H6A1.5 1.5 0 0 0 4.5 8v9A1.5 1.5 0 0 0 6 18.5h13a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 19 6.5z"
      stroke={color}
    />
    <path d="M17.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill={color} />
  </svg>
);

interface DeviceTabletPortraitOutline25IconProps extends SVGIconProps {
  name: 'device-tablet-portrait';
  size: '25';
}

export const DeviceTabletPortraitOutline25Icon: React.FunctionComponent<
  DeviceTabletPortraitOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 4.5H8A1.5 1.5 0 0 0 6.5 6v13A1.5 1.5 0 0 0 8 20.5h9a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 17 4.5z"
      stroke={color}
    />
    <path d="M12.5 18a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill={color} />
  </svg>
);

interface DeviceTvOutline25IconProps extends SVGIconProps {
  name: 'device-tv';
  size: '25';
}

export const DeviceTvOutline25Icon: React.FunctionComponent<
  DeviceTvOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 8.5H6A1.5 1.5 0 0 0 4.5 10v9A1.5 1.5 0 0 0 6 20.5h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 19 8.5z"
      stroke={color}
    />
    <path
      d="M16.5 4.5l-4 4-4-4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface DiamondOutline25IconProps extends SVGIconProps {
  name: 'diamond';
  size: '25';
}

export const DiamondOutline25Icon: React.FunctionComponent<
  DiamondOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 9.5l3-5h10l3 5-8 11-8-11z"
      stroke={color}
      strokeLinejoin="round"
    />
    <path d="M13.5 4.5l2.5 5-3.5 11" stroke={color} strokeLinejoin="round" />
    <path d="M4.5 9.5h15.813" stroke={color} />
    <path d="M11.5 4.5L9 9.5l3.5 11" stroke={color} strokeLinejoin="round" />
  </svg>
);

interface DirectionColumnOutline25IconProps extends SVGIconProps {
  name: 'direction-column';
  size: '25';
}

export const DirectionColumnOutline25Icon: React.FunctionComponent<
  DirectionColumnOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.5 14.5l-3 4-3-4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M17.5 6.5V18" stroke={color} strokeLinecap="round" />
    <path
      d="M9.5 20V5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5zM9.5 16.5h-5m5-8h-5 5zm0 4h-5 5z"
      stroke={color}
    />
  </svg>
);

interface DirectionRowOutline25IconProps extends SVGIconProps {
  name: 'direction-row';
  size: '25';
}

export const DirectionRowOutline25Icon: React.FunctionComponent<
  DirectionRowOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.833 14.5l3.667 3-3.667 3"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M6.5 17.5h11.267" stroke={color} strokeLinecap="round" />
    <path
      d="M20 4.5H5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5zM16.5 4.5v5m-8-5v5-5zm4 0v5-5z"
      stroke={color}
    />
  </svg>
);

interface DiscOutline25IconProps extends SVGIconProps {
  name: 'disc';
  size: '25';
}

export const DiscOutline25Icon: React.FunctionComponent<
  DiscOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke={color} />
    <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
  </svg>
);

interface DotsHorizontalOutline25IconProps extends SVGIconProps {
  name: 'dots-horizontal';
  size: '25';
}

export const DotsHorizontalOutline25Icon: React.FunctionComponent<
  DotsHorizontalOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM19.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      fill={color}
    />
  </svg>
);

interface DotsVerticalOutline25IconProps extends SVGIconProps {
  name: 'dots-vertical';
  size: '25';
}

export const DotsVerticalOutline25Icon: React.FunctionComponent<
  DotsVerticalOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      fill={color}
    />
  </svg>
);

interface DoubleArrowDownOutline25IconProps extends SVGIconProps {
  name: 'double-arrow-down';
  size: '25';
}

export const DoubleArrowDownOutline25Icon: React.FunctionComponent<
  DoubleArrowDownOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.5 12.5l-6 6-6-6M18.5 6.5l-6 6-6-6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface DoubleArrowLeftOutline25IconProps extends SVGIconProps {
  name: 'double-arrow-left';
  size: '25';
}

export const DoubleArrowLeftOutline25Icon: React.FunctionComponent<
  DoubleArrowLeftOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 6.5l-6 6 6 6M18.5 6.5l-6 6 6 6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface DoubleArrowRightOutline25IconProps extends SVGIconProps {
  name: 'double-arrow-right';
  size: '25';
}

export const DoubleArrowRightOutline25Icon: React.FunctionComponent<
  DoubleArrowRightOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 6.5l6 6-6 6M6.5 6.5l6 6-6 6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface DoubleArrowUpOutline25IconProps extends SVGIconProps {
  name: 'double-arrow-up';
  size: '25';
}

export const DoubleArrowUpOutline25Icon: React.FunctionComponent<
  DoubleArrowUpOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.5 12.5l-6-6-6 6M18.5 18.5l-6-6-6 6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface DownloadOutline25IconProps extends SVGIconProps {
  name: 'download';
  size: '25';
}

export const DownloadOutline25Icon: React.FunctionComponent<
  DownloadOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 12.5V20a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-7.5M12.5 4.5v11"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 10.5l4 5 4-5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface DragOutline25IconProps extends SVGIconProps {
  name: 'drag';
  size: '25';
}

export const DragOutline25Icon: React.FunctionComponent<
  DragOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM12.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM15.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM9.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM12.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM15.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM9.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM12.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM15.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM9.5 16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM12.5 16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM15.5 16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM9.5 19a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM12.5 19a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM15.5 19a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
      fill={color}
    />
  </svg>
);

interface ElementTagOutline25IconProps extends SVGIconProps {
  name: 'element-tag';
  size: '25';
}

export const ElementTagOutline25Icon: React.FunctionComponent<
  ElementTagOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 8.5l-4 4 4 4M18.5 8.5l4 4-4 4M9.5 20.5l6-16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface EnvelopeOpenOutline25IconProps extends SVGIconProps {
  name: 'envelope-open';
  size: '25';
}

export const EnvelopeOpenOutline25Icon: React.FunctionComponent<
  EnvelopeOpenOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 11l7.5 5.5L20 11M5 20l5.5-4.5M20 20l-5.5-4.5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 10.75V20a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-9.25a.5.5 0 0 0-.2-.4L12.5 4.5l-7.8 5.85a.5.5 0 0 0-.2.4z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface EnvelopeOutline25IconProps extends SVGIconProps {
  name: 'envelope';
  size: '25';
}

export const EnvelopeOutline25Icon: React.FunctionComponent<
  EnvelopeOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 8l7.5 5.5L20 8M5 17l5.5-4.5M20 17l-5.5-4.5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 8v9a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface EnvelopesOutline25IconProps extends SVGIconProps {
  name: 'envelopes';
  size: '25';
}

export const EnvelopesOutline25Icon: React.FunctionComponent<
  EnvelopesOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 8.5H6A1.5 1.5 0 0 0 4.5 10v9A1.5 1.5 0 0 0 6 20.5h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 19 8.5zM5.5 8A1.5 1.5 0 0 1 7 6.5h11A1.5 1.5 0 0 1 19.5 8v.5h-14V8zM6.5 6A1.5 1.5 0 0 1 8 4.5h9A1.5 1.5 0 0 1 18.5 6v.5h-12V6z"
      stroke={color}
    />
    <path
      d="M5 9l7.5 6.5L20 9M5 20l5.5-5.5M20 20l-5.5-5.5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ExternalLinkOutline25IconProps extends SVGIconProps {
  name: 'external-link';
  size: '25';
}

export const ExternalLinkOutline25Icon: React.FunctionComponent<
  ExternalLinkOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.5 4.5h6v6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.5 13.5l9-9M18.5 14.5V20a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h5.5"
      stroke={color}
      strokeLinecap="round"
    />
  </svg>
);

interface FileMinusOutline25IconProps extends SVGIconProps {
  name: 'file-minus';
  size: '25';
}

export const FileMinusOutline25Icon: React.FunctionComponent<
  FileMinusOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 19.5v-14a1 1 0 0 1 1-1h5.586a1 1 0 0 1 .707.293l4.414 4.414a1 1 0 0 1 .293.707V19.5a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9.5 14.5h6" stroke={color} strokeLinecap="round" />
    <path
      d="M13.5 5v4.5H18"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface FilePlusOutline25IconProps extends SVGIconProps {
  name: 'file-plus';
  size: '25';
}

export const FilePlusOutline25Icon: React.FunctionComponent<
  FilePlusOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 19.5v-14a1 1 0 0 1 1-1h5.586a1 1 0 0 1 .707.293l4.414 4.414a1 1 0 0 1 .293.707V19.5a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 5v4.5H18"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9.5 14.5h6M12.5 17.5v-6" stroke={color} strokeLinecap="round" />
  </svg>
);

interface FileTextOutline25IconProps extends SVGIconProps {
  name: 'file-text';
  size: '25';
}

export const FileTextOutline25Icon: React.FunctionComponent<
  FileTextOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 19.5v-14a1 1 0 0 1 1-1h5.586a1 1 0 0 1 .707.293l4.414 4.414a1 1 0 0 1 .293.707V19.5a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 16.5h6M9.5 12.5h6M9.5 8.5h1"
      stroke={color}
      strokeLinecap="round"
    />
    <path
      d="M13.5 5v4.5H18"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface FileOutline25IconProps extends SVGIconProps {
  name: 'file';
  size: '25';
}

export const FileOutline25Icon: React.FunctionComponent<
  FileOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 19.5v-14a1 1 0 0 1 1-1h5.586a1 1 0 0 1 .707.293l4.414 4.414a1 1 0 0 1 .293.707V19.5a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 5v4.5H18"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface FolderOutline25IconProps extends SVGIconProps {
  name: 'folder';
  size: '25';
}

export const FolderOutline25Icon: React.FunctionComponent<
  FolderOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 6.5H6A1.5 1.5 0 0 0 4.5 8v9A1.5 1.5 0 0 0 6 18.5h13a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 19 6.5z"
      stroke={color}
    />
    <path
      d="M9.5 15.5l6-6M15.5 15.5l-6-6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface FoldersOutline25IconProps extends SVGIconProps {
  name: 'folders';
  size: '25';
}

export const FoldersOutline25Icon: React.FunctionComponent<
  FoldersOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 8.5H6A1.5 1.5 0 0 0 4.5 10v9A1.5 1.5 0 0 0 6 20.5h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 19 8.5zM5.5 8A1.5 1.5 0 0 1 7 6.5h11A1.5 1.5 0 0 1 19.5 8v.5h-14V8zM6.5 6A1.5 1.5 0 0 1 8 4.5h9A1.5 1.5 0 0 1 18.5 6v.5h-12V6z"
      stroke={color}
    />
    <path
      d="M9.5 17.5l6-6M15.5 17.5l-6-6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface FoodRamenOutline25IconProps extends SVGIconProps {
  name: 'food-ramen';
  size: '25';
}

export const FoodRamenOutline25Icon: React.FunctionComponent<
  FoodRamenOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.5 5.5l-1 5 1-5zm5-1l-3 6 3-6zm-6 10H5h8.5zm-1 6c-5 0-8-5-8-8h16c0 3-3 8-8 8z"
      stroke={color}
      strokeLinejoin="round"
    />
  </svg>
);

interface GlobeOutline25IconProps extends SVGIconProps {
  name: 'globe';
  size: '25';
}

export const GlobeOutline25Icon: React.FunctionComponent<
  GlobeOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12.5" cy="12.5" r="8" stroke={color} />
    <path
      d="M5.5 16c4.375 1.333 9.625 1.333 14 0M5.5 9c4.5-1.333 9.5-1.333 14 0M12.5 20.5c-6-2.5-6-13.5 0-16M12.5 20.5c6-2.5 6-13.5 0-16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M4.5 12.5h16M12.5 4.5v16" stroke={color} />
  </svg>
);

interface GridLinesOutline25IconProps extends SVGIconProps {
  name: 'grid-lines';
  size: '25';
}

export const GridLinesOutline25Icon: React.FunctionComponent<
  GridLinesOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 8.5h16M8.5 20.5v-16M16.5 20.5v-16M4.5 16.5h16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface HamburgerOutline25IconProps extends SVGIconProps {
  name: 'hamburger';
  size: '25';
}

export const HamburgerOutline25Icon: React.FunctionComponent<
  HamburgerOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 18.5h17M4 12.5h17M4 6.5h17" stroke={color} />
  </svg>
);

interface HomeOutline25IconProps extends SVGIconProps {
  name: 'home';
  size: '25';
}

export const HomeOutline25Icon: React.FunctionComponent<
  HomeOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 11.914V20.5h5v-6h4v6h5v-8.586a1 1 0 0 0-.293-.707L12.5 4.5l-6.707 6.707a1 1 0 0 0-.293.707z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface IdentificationOutline25IconProps extends SVGIconProps {
  name: 'identification';
  size: '25';
}

export const IdentificationOutline25Icon: React.FunctionComponent<
  IdentificationOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 6.5H6A1.5 1.5 0 0 0 4.5 8v9A1.5 1.5 0 0 0 6 18.5h13a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 19 6.5z"
      stroke={color}
    />
    <path d="M17.5 9.5h-3v3h3v-3z" stroke={color} />
    <path
      d="M7.5 12.5h3M7.5 15.5h6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ImageOutline25IconProps extends SVGIconProps {
  name: 'image';
  size: '25';
}

export const ImageOutline25Icon: React.FunctionComponent<
  ImageOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 5.5H7A1.5 1.5 0 0 0 5.5 7v11A1.5 1.5 0 0 0 7 19.5h11a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 18 5.5z"
      stroke={color}
    />
    <path d="M9.5 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" stroke={color} />
    <path
      d="M6.5 19l8.737-8.5 4.263 3"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface InfoCircledOutline25IconProps extends SVGIconProps {
  name: 'info-circled';
  size: '25';
}

export const InfoCircledOutline25Icon: React.FunctionComponent<
  InfoCircledOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
    <path
      d="M12.5 16.5v-5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill={color} />
  </svg>
);

interface JustifyAroundOutline25IconProps extends SVGIconProps {
  name: 'justify-around';
  size: '25';
}

export const JustifyAroundOutline25Icon: React.FunctionComponent<
  JustifyAroundOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.5 4.5v16M4.5 4.5v16" stroke={color} strokeLinecap="round" />
    <path d="M8.5 8.5h-4v8h4v-8zM20.5 8.5h-4v8h4v-8z" stroke={color} />
  </svg>
);

interface JustifyBetweenOutline25IconProps extends SVGIconProps {
  name: 'justify-between';
  size: '25';
}

export const JustifyBetweenOutline25Icon: React.FunctionComponent<
  JustifyBetweenOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 4.5v16" stroke={color} strokeLinecap="round" />
    <path d="M8.5 8.5h-4v8h4v-8zM20.5 8.5h-4v8h4v-8z" stroke={color} />
  </svg>
);

interface JustifyCenterOutline25IconProps extends SVGIconProps {
  name: 'justify-center';
  size: '25';
}

export const JustifyCenterOutline25Icon: React.FunctionComponent<
  JustifyCenterOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 4.5v16" stroke={color} strokeLinecap="round" />
    <path d="M12.5 8.5h-4v8h4v-8zM16.5 8.5h-4v8h4v-8z" stroke={color} />
  </svg>
);

interface JustifyEndOutline25IconProps extends SVGIconProps {
  name: 'justify-end';
  size: '25';
}

export const JustifyEndOutline25Icon: React.FunctionComponent<
  JustifyEndOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.5 4.5v16" stroke={color} strokeLinecap="round" />
    <path d="M16.5 8.5h-4v8h4v-8zM20.5 8.5h-4v8h4v-8z" stroke={color} />
  </svg>
);

interface JustifyStartOutline25IconProps extends SVGIconProps {
  name: 'justify-start';
  size: '25';
}

export const JustifyStartOutline25Icon: React.FunctionComponent<
  JustifyStartOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.5 4.5v16" stroke={color} strokeLinecap="round" />
    <path d="M8.5 8.5h-4v8h4v-8zM12.5 8.5h-4v8h4v-8z" stroke={color} />
  </svg>
);

interface LayoutGridGapOutline25IconProps extends SVGIconProps {
  name: 'layout-grid-gap';
  size: '25';
}

export const LayoutGridGapOutline25Icon: React.FunctionComponent<
  LayoutGridGapOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5 5.5h-5v5h5v-5zM10.5 14.5h-5v5h5v-5zM19.5 14.5h-5v5h5v-5zM19.5 5.5h-5v5h5v-5z"
      stroke={color}
    />
  </svg>
);

interface LayoutGridOutline25IconProps extends SVGIconProps {
  name: 'layout-grid';
  size: '25';
}

export const LayoutGridOutline25Icon: React.FunctionComponent<
  LayoutGridOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 5.5H6a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5zM12.5 6v13M19 12.5H6"
      stroke={color}
    />
  </svg>
);

interface LayoutHeaderLeftAlignedSectionsOutline25IconProps
  extends SVGIconProps {
  name: 'layout-header-left-aligned-sections';
  size: '25';
}

export const LayoutHeaderLeftAlignedSectionsOutline25Icon: React.FunctionComponent<
  LayoutHeaderLeftAlignedSectionsOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 6.5H6A1.5 1.5 0 0 0 4.5 8v9A1.5 1.5 0 0 0 6 18.5h13a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 19 6.5zM9.5 12v6M5 11.5h15.5"
      stroke={color}
    />
  </svg>
);

interface LayoutHeaderRightAlignedSectionsOutline25IconProps
  extends SVGIconProps {
  name: 'layout-header-right-aligned-sections';
  size: '25';
}

export const LayoutHeaderRightAlignedSectionsOutline25Icon: React.FunctionComponent<
  LayoutHeaderRightAlignedSectionsOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 6.5H6A1.5 1.5 0 0 0 4.5 8v9A1.5 1.5 0 0 0 6 18.5h13a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 19 6.5zM15.5 12v6M5 11.5h15.5"
      stroke={color}
    />
  </svg>
);

interface LayoutHeaderSectionsOutline25IconProps extends SVGIconProps {
  name: 'layout-header-sections';
  size: '25';
}

export const LayoutHeaderSectionsOutline25Icon: React.FunctionComponent<
  LayoutHeaderSectionsOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 6.5H6A1.5 1.5 0 0 0 4.5 8v9A1.5 1.5 0 0 0 6 18.5h13a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 19 6.5zM12.5 13v5M5 12.5h15.5"
      stroke={color}
    />
  </svg>
);

interface LayoutSectionsHeaderOutline25IconProps extends SVGIconProps {
  name: 'layout-sections-header';
  size: '25';
}

export const LayoutSectionsHeaderOutline25Icon: React.FunctionComponent<
  LayoutSectionsHeaderOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 6.5H6A1.5 1.5 0 0 0 4.5 8v9A1.5 1.5 0 0 0 6 18.5h13a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 19 6.5zM12.5 7v5M5 12.5h15.5"
      stroke={color}
    />
  </svg>
);

interface LayoutSidebarLeftOutline25IconProps extends SVGIconProps {
  name: 'layout-sidebar-left';
  size: '25';
}

export const LayoutSidebarLeftOutline25Icon: React.FunctionComponent<
  LayoutSidebarLeftOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 6.5H6A1.5 1.5 0 0 0 4.5 8v9A1.5 1.5 0 0 0 6 18.5h13a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 19 6.5zM9.5 7v11"
      stroke={color}
    />
  </svg>
);

interface LayoutSidebarRightOutline25IconProps extends SVGIconProps {
  name: 'layout-sidebar-right';
  size: '25';
}

export const LayoutSidebarRightOutline25Icon: React.FunctionComponent<
  LayoutSidebarRightOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 6.5H6A1.5 1.5 0 0 0 4.5 8v9A1.5 1.5 0 0 0 6 18.5h13a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 19 6.5zM15.5 7v11"
      stroke={color}
    />
  </svg>
);

interface LetterSpacingOutline25IconProps extends SVGIconProps {
  name: 'letter-spacing';
  size: '25';
}

export const LetterSpacingOutline25Icon: React.FunctionComponent<
  LetterSpacingOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 20.5l-3-3 3-3M17.5 20.5l3-3-3-3M11.5 11.5l-3-7-3 7M19.5 4.5l-3 7-3-7M6.5 9.5h4M4.5 17.5h16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface LifesaverOutline25IconProps extends SVGIconProps {
  name: 'lifesaver';
  size: '25';
}

export const LifesaverOutline25Icon: React.FunctionComponent<
  LifesaverOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 15.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke={color} />
    <path
      d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 18.5l4-4M14.5 10.5l4-4M10.5 10.5l-4-4M18 18l-3.5-3.5"
      stroke={color}
    />
  </svg>
);

interface LineAngledOutline25IconProps extends SVGIconProps {
  name: 'line-angled';
  size: '25';
}

export const LineAngledOutline25Icon: React.FunctionComponent<
  LineAngledOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.146 20.146a.5.5 0 0 0 .708.708l-.708-.708zM20.854 4.854a.5.5 0 0 0-.708-.708l.708.708zm-16 16l16-16-.708-.708-16 16 .708.708z"
      fill={color}
    />
  </svg>
);

interface LineHeightOutline25IconProps extends SVGIconProps {
  name: 'line-height';
  size: '25';
}

export const LineHeightOutline25Icon: React.FunctionComponent<
  LineHeightOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5 17.5l-3 3-3-3M10.5 7.5l-3-3-3 3"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 6.5h7M13.5 10.5h7M13.5 14.5h7M13.5 18.5h4"
      stroke={color}
      strokeLinecap="round"
    />
    <path
      d="M7.5 4.5v16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface LinkOutline25IconProps extends SVGIconProps {
  name: 'link';
  size: '25';
}

export const LinkOutline25Icon: React.FunctionComponent<
  LinkOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 8.5H8c-3.5 0-5 1.75-5 4s1.5 4 5 4h1.5M15.5 8.5H17c3.5 0 5 1.75 5 4s-1.5 4-5 4h-1.5M17.5 12.5h-10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ListOutline25IconProps extends SVGIconProps {
  name: 'list';
  size: '25';
}

export const ListOutline25Icon: React.FunctionComponent<
  ListOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 17.5h13M4 17.5h2M8 12.5h13M4 12.5h2M8 7.5h13M4 7.5h2"
      stroke={color}
    />
  </svg>
);

interface LockOutline25IconProps extends SVGIconProps {
  name: 'lock';
  size: '25';
}

export const LockOutline25Icon: React.FunctionComponent<
  LockOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 11.5H6A1.5 1.5 0 0 0 4.5 13v6A1.5 1.5 0 0 0 6 20.5h13a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5zM7.5 9.5a5 5 0 0 1 10 0v2h-10v-2z"
      stroke={color}
    />
  </svg>
);

interface LogOutline25IconProps extends SVGIconProps {
  name: 'log';
  size: '25';
}

export const LogOutline25Icon: React.FunctionComponent<
  LogOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 6.5h11M4.5 6.5h2M4.5 14.5h2M9.5 10.5h7M9.5 14.5h11M9.5 18.5h7"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface MagnifyingGlassOutline25IconProps extends SVGIconProps {
  name: 'magnifying-glass';
  size: '25';
}

export const MagnifyingGlassOutline25Icon: React.FunctionComponent<
  MagnifyingGlassOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.5 16.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" stroke={color} />
    <path d="M20.5 20.5L15 15" stroke={color} strokeLinecap="round" />
  </svg>
);

interface MinusCircledOutline25IconProps extends SVGIconProps {
  name: 'minus-circled';
  size: '25';
}

export const MinusCircledOutline25Icon: React.FunctionComponent<
  MinusCircledOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
    <path d="M8.5 12.5h8" stroke={color} strokeLinecap="round" />
  </svg>
);

interface MinusOutline25IconProps extends SVGIconProps {
  name: 'minus';
  size: '25';
}

export const MinusOutline25Icon: React.FunctionComponent<
  MinusOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.5 12.5h14" stroke={color} strokeLinecap="round" />
  </svg>
);

interface MixerVerticalOutline25IconProps extends SVGIconProps {
  name: 'mixer-vertical';
  size: '25';
}

export const MixerVerticalOutline25Icon: React.FunctionComponent<
  MixerVerticalOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 10.5v-6M6.5 20.5v-6M12.5 6.5v-2M12.5 20.5v-10M18.5 20.5v-2M18.5 14.5v-10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12.5 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18.5 18.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
      stroke={color}
    />
  </svg>
);

interface NoteOutline25IconProps extends SVGIconProps {
  name: 'note';
  size: '25';
}

export const NoteOutline25Icon: React.FunctionComponent<
  NoteOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 5.5H7A1.5 1.5 0 0 0 5.5 7v11A1.5 1.5 0 0 0 7 19.5h11a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 18 5.5zM9 9.5h7M9 12.5h7M9 15.5h7"
      stroke={color}
    />
  </svg>
);

interface NoteAddOutline25IconProps extends SVGIconProps {
  name: 'note-add';
  size: '25';
}

export const NoteAddOutline25Icon: React.FunctionComponent<
  NoteAddOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 16.5h7m-7-6h7-7zm0 3h7-7z" stroke={color} />
    <path
      d="M18.5 10.5v-6m-3 3h6-6zM18.5 13.5v5a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface PaperAirplaneOutline25IconProps extends SVGIconProps {
  name: 'paper-airplane';
  size: '25';
}

export const PaperAirplaneOutline25Icon: React.FunctionComponent<
  PaperAirplaneOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.5 12.5l-18-8v6.537a.5.5 0 0 0 .462.498L17.5 12.5l-12.538.964a.5.5 0 0 0-.462.499V20.5l18-8z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ParagraphOutline25IconProps extends SVGIconProps {
  name: 'paragraph';
  size: '25';
}

export const ParagraphOutline25Icon: React.FunctionComponent<
  ParagraphOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 6.5h16M4.5 10.5h16M4.5 14.5h16M4.5 18.5h8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface PauseOutline25IconProps extends SVGIconProps {
  name: 'pause';
  size: '25';
}

export const PauseOutline25Icon: React.FunctionComponent<
  PauseOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 5.5H8A1.5 1.5 0 0 0 6.5 7v11A1.5 1.5 0 0 0 8 19.5h1a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 9 5.5zM17 5.5h-1A1.5 1.5 0 0 0 14.5 7v11a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 17 5.5z"
      stroke={color}
    />
  </svg>
);

interface PersonOutline25IconProps extends SVGIconProps {
  name: 'person';
  size: '25';
}

export const PersonOutline25Icon: React.FunctionComponent<
  PersonOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 12.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke={color} />
    <path
      d="M5.5 20.5c1-6 13-6 14 0"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface PinBottomOutline25IconProps extends SVGIconProps {
  name: 'pin-bottom';
  size: '25';
}

export const PinBottomOutline25Icon: React.FunctionComponent<
  PinBottomOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 13.5l-3 4-3-4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.5 7.5v10M4.5 20.5h16" stroke={color} strokeLinecap="round" />
  </svg>
);

interface PinLeftOutline25IconProps extends SVGIconProps {
  name: 'pin-left';
  size: '25';
}

export const PinLeftOutline25Icon: React.FunctionComponent<
  PinLeftOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 9.5l-4 3 4 3"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7.5 12.5h10M4.5 4.5v16" stroke={color} strokeLinecap="round" />
  </svg>
);

interface PinRightOutline25IconProps extends SVGIconProps {
  name: 'pin-right';
  size: '25';
}

export const PinRightOutline25Icon: React.FunctionComponent<
  PinRightOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5 9.5l4 3-4 3"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7.5 12.5h10M20.5 4.5v16" stroke={color} strokeLinecap="round" />
  </svg>
);

interface PinTopOutline25IconProps extends SVGIconProps {
  name: 'pin-top';
  size: '25';
}

export const PinTopOutline25Icon: React.FunctionComponent<
  PinTopOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 11.5l-3-4-3 4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.5 7.5v10M4.5 4.5h16" stroke={color} strokeLinecap="round" />
  </svg>
);

interface PlayNextOutline25IconProps extends SVGIconProps {
  name: 'play-next';
  size: '25';
}

export const PlayNextOutline25Icon: React.FunctionComponent<
  PlayNextOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 4.5v16l12-8-12-8z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M20.5 20.5v-16" stroke={color} strokeLinecap="round" />
  </svg>
);

interface PlayOutline25IconProps extends SVGIconProps {
  name: 'play';
  size: '25';
}

export const PlayOutline25Icon: React.FunctionComponent<
  PlayOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 4.5v16l12-8-12-8z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface PlusCircledOutline25IconProps extends SVGIconProps {
  name: 'plus-circled';
  size: '25';
}

export const PlusCircledOutline25Icon: React.FunctionComponent<
  PlusCircledOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
    <path d="M8.5 12.5h8M12.5 16.5v-8" stroke={color} strokeLinecap="round" />
  </svg>
);

interface PlusOutline25IconProps extends SVGIconProps {
  name: 'plus';
  size: '25';
}

export const PlusOutline25Icon: React.FunctionComponent<
  PlusOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.5 12.5h14M12.5 19.5v-14" stroke={color} strokeLinecap="round" />
  </svg>
);

interface PositionAbsoluteOutline25IconProps extends SVGIconProps {
  name: 'position-absolute';
  size: '25';
}

export const PositionAbsoluteOutline25Icon: React.FunctionComponent<
  PositionAbsoluteOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 14l-2.5 1.5 7 4 7-4L17 14M12.5 13.5l7-4-7-4-7 4 7 4z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface PositionFixedOutline25IconProps extends SVGIconProps {
  name: 'position-fixed';
  size: '25';
}

export const PositionFixedOutline25Icon: React.FunctionComponent<
  PositionFixedOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5 9V5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4c2 .8 2.833 3.333 3 4.5h-10c0-2.4 2-4 3-4.5z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M13.5 13.5v4l-1 3-1-3v-4" stroke={color} strokeLinejoin="round" />
  </svg>
);

interface PositionRelativeOutline25IconProps extends SVGIconProps {
  name: 'position-relative';
  size: '25';
}

export const PositionRelativeOutline25Icon: React.FunctionComponent<
  PositionRelativeOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.5 13.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v3.5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 11h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z"
      stroke={color}
      strokeLinejoin="round"
    />
  </svg>
);

interface PositionStaticOutline25IconProps extends SVGIconProps {
  name: 'position-static';
  size: '25';
}

export const PositionStaticOutline25Icon: React.FunctionComponent<
  PositionStaticOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 7.5v-2h2M7.5 19.5h-2v-2M19.5 17.5v2h-2"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 5.5h4M10.5 19.5h4M5.5 14.5v-4M19.5 14.5v-4"
      stroke={color}
      strokeLinecap="round"
    />
    <path
      d="M17.5 5.5h2v2"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface PositionStickyOutline25IconProps extends SVGIconProps {
  name: 'position-sticky';
  size: '25';
}

export const PositionStickyOutline25Icon: React.FunctionComponent<
  PositionStickyOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.5 16.5l-7 4-7-4M12.5 12.5l7-4-7-4-7 4 7 4z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M5.5 12.5L8 14" stroke={color} strokeLinecap="round" />
    <path
      d="M19.5 12.5L17 14M10 15l2.5 1.5L15 15"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface QuotationOutline25IconProps extends SVGIconProps {
  name: 'quotation';
  size: '25';
}

export const QuotationOutline25Icon: React.FunctionComponent<
  QuotationOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.5 14.5v-10h10v10l-2 6h-6l2-6h-4zM14.5 14.5v-10h10v10l-2 6h-6l2-6h-4z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface Ratio11Outline25IconProps extends SVGIconProps {
  name: 'ratio-1-1';
  size: '25';
}

export const Ratio11Outline25Icon: React.FunctionComponent<
  Ratio11Outline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.5 4.5h-16v16h16v-16z" stroke={color} />
  </svg>
);

interface Ratio23Outline25IconProps extends SVGIconProps {
  name: 'ratio-2-3';
  size: '25';
}

export const Ratio23Outline25Icon: React.FunctionComponent<
  Ratio23Outline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.5 8.5h-14v8h14v-8z" stroke={color} />
  </svg>
);

interface Ratio32Outline25IconProps extends SVGIconProps {
  name: 'ratio-3-2';
  size: '25';
}

export const Ratio32Outline25Icon: React.FunctionComponent<
  Ratio32Outline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.5 5.5h-8v14h8v-14z" stroke={color} />
  </svg>
);

interface Ratio34Outline25IconProps extends SVGIconProps {
  name: 'ratio-3-4';
  size: '25';
}

export const Ratio34Outline25Icon: React.FunctionComponent<
  Ratio34Outline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.5 4.5h-12v16h12v-16z" stroke={color} />
  </svg>
);

interface Ratio43Outline25IconProps extends SVGIconProps {
  name: 'ratio-4-3';
  size: '25';
}

export const Ratio43Outline25Icon: React.FunctionComponent<
  Ratio43Outline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.5 6.5h-16v12h16v-12z" stroke={color} />
  </svg>
);

interface Ratio169Outline25IconProps extends SVGIconProps {
  name: 'ratio-16-9';
  size: '25';
}

export const Ratio169Outline25Icon: React.FunctionComponent<
  Ratio169Outline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.5 7.5h-16v10h16v-10z" stroke={color} />
  </svg>
);

interface ShareOutline25IconProps extends SVGIconProps {
  name: 'share';
  size: '25';
}

export const ShareOutline25Icon: React.FunctionComponent<
  ShareOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18.5 20.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6.5 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
      stroke={color}
    />
    <path
      d="M8.5 11.5l8-4M16.5 17.5l-8-4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface SliderOutline25IconProps extends SVGIconProps {
  name: 'slider';
  size: '25';
}

export const SliderOutline25Icon: React.FunctionComponent<
  SliderOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M.5 12.5h8M16.5 12.5h8" stroke={color} strokeLinecap="round" />
    <path d="M12.5 16.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke={color} />
  </svg>
);

interface SmileyOutline25IconProps extends SVGIconProps {
  name: 'smiley';
  size: '25';
}

export const SmileyOutline25Icon: React.FunctionComponent<
  SmileyOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
    <path
      d="M9.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM15.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
      fill={color}
    />
    <path
      d="M8.5 15c2 2.5 6 2.5 8 0"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface StackOutline25IconProps extends SVGIconProps {
  name: 'stack';
  size: '25';
}

export const StackOutline25Icon: React.FunctionComponent<
  StackOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.5 16.5l-7 4-7-4M19.5 12.5l-7 4-7-4M12.5 12.5l7-4-7-4-7 4 7 4z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface TextAlignCenterOutline25IconProps extends SVGIconProps {
  name: 'text-align-center';
  size: '25';
}

export const TextAlignCenterOutline25Icon: React.FunctionComponent<
  TextAlignCenterOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 16.5h9M4 12.5h17M8 8.5h9" stroke={color} />
  </svg>
);

interface TextAlignJustifyOutline25IconProps extends SVGIconProps {
  name: 'text-align-justify';
  size: '25';
}

export const TextAlignJustifyOutline25Icon: React.FunctionComponent<
  TextAlignJustifyOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 16.5h17M4 12.5h17M4 8.5h17" stroke={color} />
  </svg>
);

interface TextAlignLeftOutline25IconProps extends SVGIconProps {
  name: 'text-align-left';
  size: '25';
}

export const TextAlignLeftOutline25Icon: React.FunctionComponent<
  TextAlignLeftOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 16.5h9M4 12.5h17M4 8.5h9" stroke={color} />
  </svg>
);

interface TextAlignRightOutline25IconProps extends SVGIconProps {
  name: 'text-align-right';
  size: '25';
}

export const TextAlignRightOutline25Icon: React.FunctionComponent<
  TextAlignRightOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 16.5h9M4 12.5h17M12 8.5h9" stroke={color} />
  </svg>
);

interface TextCasingCapitalizeOutline25IconProps extends SVGIconProps {
  name: 'text-casing-capitalize';
  size: '25';
}

export const TextCasingCapitalizeOutline25Icon: React.FunctionComponent<
  TextCasingCapitalizeOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 14.5h5M20.5 18v-8M17 17.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
      stroke={color}
    />
    <path
      d="M4.5 17.5L8 7.5l3.5 10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface TextCasingLowercaseOutline25IconProps extends SVGIconProps {
  name: 'text-casing-lowercase';
  size: '25';
}

export const TextCasingLowercaseOutline25Icon: React.FunctionComponent<
  TextCasingLowercaseOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.5 18v-8M17 17.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM11.5 18v-8M8 17.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
      stroke={color}
    />
  </svg>
);

interface TextCasingUppercaseOutline25IconProps extends SVGIconProps {
  name: 'text-casing-uppercase';
  size: '25';
}

export const TextCasingUppercaseOutline25Icon: React.FunctionComponent<
  TextCasingUppercaseOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5 17.5l3.5-10 3.5 10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M14.5 14.5h5" stroke={color} />
    <path
      d="M4.5 17.5L8 7.5l3.5 10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M5.5 14.5h5" stroke={color} />
  </svg>
);

interface ThickArrowUpOutline25IconProps extends SVGIconProps {
  name: 'thick-arrow-up';
  size: '25';
}

export const ThickArrowUpOutline25Icon: React.FunctionComponent<
  ThickArrowUpOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 4.5l8 11h-5v5h-6v-5h-5l8-11z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ThickArrowDownOutline25IconProps extends SVGIconProps {
  name: 'thick-arrow-down';
  size: '25';
}

export const ThickArrowDownOutline25Icon: React.FunctionComponent<
  ThickArrowDownOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 4.5h-6v5h-5l8 11 8-11h-5v-5z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface TextStyleItalicOutline25IconProps extends SVGIconProps {
  name: 'text-style-italic';
  size: '25';
}

export const TextStyleItalicOutline25Icon: React.FunctionComponent<
  TextStyleItalicOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.5 7.5h-6M13.5 17.5h-6M14.5 7.5l-4 10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface TextStyleNormalOutline25IconProps extends SVGIconProps {
  name: 'text-style-normal';
  size: '25';
}

export const TextStyleNormalOutline25Icon: React.FunctionComponent<
  TextStyleNormalOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 7.5h-6M15.5 17.5h-6M12.5 7.5v10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface TextStyleOverlineOutline25IconProps extends SVGIconProps {
  name: 'text-style-overline';
  size: '25';
}

export const TextStyleOverlineOutline25Icon: React.FunctionComponent<
  TextStyleOverlineOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.5 4.5h-12" stroke={color} strokeLinecap="round" />
    <path
      d="M8.5 7.5c0 6-.5 10 4 10s4-4 4-10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface TextStyleStrikethroughOutline25IconProps extends SVGIconProps {
  name: 'text-style-strikethrough';
  size: '25';
}

export const TextStyleStrikethroughOutline25Icon: React.FunctionComponent<
  TextStyleStrikethroughOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.5 12.5h-12" stroke={color} strokeLinecap="round" />
    <path
      d="M8.5 7.5c0 6-.5 10 4 10s4-4 4-10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface TextStyleUnderlineOutline25IconProps extends SVGIconProps {
  name: 'text-style-underline';
  size: '25';
}

export const TextStyleUnderlineOutline25Icon: React.FunctionComponent<
  TextStyleUnderlineOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.5 20.5h-12" stroke={color} strokeLinecap="round" />
    <path
      d="M8.5 7.5c0 6-.5 10 4 10s4-4 4-10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface TrashOutline25IconProps extends SVGIconProps {
  name: 'trash';
  size: '25';
}

export const TrashOutline25Icon: React.FunctionComponent<
  TrashOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 8.5H8a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="bevel"
    />
    <path d="M17.5 6.5h-10a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2z" stroke={color} />
    <path
      d="M10.5 4.5h4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10.5 11v7M12.5 11v7M14.5 11v7" stroke={color} />
  </svg>
);

interface VehicleBusOutline25IconProps extends SVGIconProps {
  name: 'vehicle-bus';
  size: '25';
}

export const VehicleBusOutline25Icon: React.FunctionComponent<
  VehicleBusOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 20.5v2h3v-2m-9-16h6-6zm-3 16v2h3v-2h-3z"
      stroke={color}
      strokeLinejoin="round"
    />
    <path
      d="M9 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM16 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      stroke={color}
    />
    <path d="M2.5 8.5v-2h20v2" stroke={color} strokeLinejoin="round" />
    <path
      d="M4.5 6A3.5 3.5 0 0 1 8 2.5h9A3.5 3.5 0 0 1 20.5 6v14.5h-16V6z"
      stroke={color}
    />
    <path d="M5 13.5h15" stroke={color} strokeLinejoin="round" />
  </svg>
);

interface VehicleCarOutline25IconProps extends SVGIconProps {
  name: 'vehicle-car';
  size: '25';
}

export const VehicleCarOutline25Icon: React.FunctionComponent<
  VehicleCarOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 18.5v2h3v-2m-14-6.86v5.86a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5.86a.999.999 0 0 0-.038-.275l-1.755-6.14a1 1 0 0 0-.961-.725H7.254a1 1 0 0 0-.961.725l-1.755 6.14a1 1 0 0 0-.038.275v0zm3-.14h10-10zm-1 7v2h3v-2h-3z"
      stroke={color}
      strokeLinejoin="round"
    />
    <path
      d="M9 16.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM16 16.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      stroke={color}
    />
    <path d="M21.5 9.5H20m-15 0H3.5 5z" stroke={color} strokeLinejoin="round" />
  </svg>
);

interface VehicleTrainOutline25IconProps extends SVGIconProps {
  name: 'vehicle-train';
  size: '25';
}

export const VehicleTrainOutline25Icon: React.FunctionComponent<
  VehicleTrainOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 16.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM16 16.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      stroke={color}
    />
    <path
      d="M4.5 6A3.5 3.5 0 0 1 8 2.5h9A3.5 3.5 0 0 1 20.5 6v12.5h-16V6z"
      stroke={color}
    />
    <path
      d="M19.5 22.5l-3-4m-11 4l3-4-3 4z"
      stroke={color}
      strokeLinejoin="round"
    />
    <path d="M7.5 5.5h10v6h-10v-6z" stroke={color} />
  </svg>
);

interface VisibleOutline25IconProps extends SVGIconProps {
  name: 'visible';
  size: '25';
}

export const VisibleOutline25Icon: React.FunctionComponent<
  VisibleOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 20.5c-5.143 0-9.429-3.2-12-8 2.571-4.8 6.857-8 12-8s9.429 3.2 12 8c-2.571 4.8-6.857 8-12 8z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.5 16.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke={color} />
  </svg>
);

interface WarningOutline25IconProps extends SVGIconProps {
  name: 'warning';
  size: '25';
}

export const WarningOutline25Icon: React.FunctionComponent<
  WarningOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 5.5l-8 14h16l-8-14zM12.5 13.5v-3"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.5 17a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill={color} />
  </svg>
);

interface ZoomInOutline25IconProps extends SVGIconProps {
  name: 'zoom-in';
  size: '25';
}

export const ZoomInOutline25Icon: React.FunctionComponent<
  ZoomInOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.5 16.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" stroke={color} />
    <path
      d="M20.5 20.5L15 15M7.5 10.5h6M10.5 13.5v-6"
      stroke={color}
      strokeLinecap="round"
    />
  </svg>
);

interface ZoomOutOutline25IconProps extends SVGIconProps {
  name: 'zoom-out';
  size: '25';
}

export const ZoomOutOutline25Icon: React.FunctionComponent<
  ZoomOutOutline25IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.5 16.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" stroke={color} />
    <path
      d="M20.5 20.5L15 15M7.5 10.5h6"
      stroke={color}
      strokeLinecap="round"
    />
  </svg>
);

interface ArrowDownOutline15IconProps extends SVGIconProps {
  name: 'arrow-down';
  size: '15';
}

export const ArrowDownOutline15Icon: React.FunctionComponent<
  ArrowDownOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 8.5l-4 4-4-4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7.5 2.5v10" stroke={color} strokeLinecap="round" />
  </svg>
);

interface ArrowLeftOutline15IconProps extends SVGIconProps {
  name: 'arrow-left';
  size: '15';
}

export const ArrowLeftOutline15Icon: React.FunctionComponent<
  ArrowLeftOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 3.5l-4 4 4 4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M2.5 7.5h10" stroke={color} strokeLinecap="round" />
  </svg>
);

interface ArrowRightOutline15IconProps extends SVGIconProps {
  name: 'arrow-right';
  size: '15';
}

export const ArrowRightOutline15Icon: React.FunctionComponent<
  ArrowRightOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.5 3.5l4 4-4 4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M2.5 7.5h10" stroke={color} strokeLinecap="round" />
  </svg>
);

interface ArrowUpOutline15IconProps extends SVGIconProps {
  name: 'arrow-up';
  size: '15';
}

export const ArrowUpOutline15Icon: React.FunctionComponent<
  ArrowUpOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 6.5l-4-4-4 4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7.5 2.5v10" stroke={color} strokeLinecap="round" />
  </svg>
);

interface AspectRatioOutline15IconProps extends SVGIconProps {
  name: 'aspect-ratio';
  size: '15';
}

export const AspectRatioOutline15Icon: React.FunctionComponent<
  AspectRatioOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="2.5" y="2.5" width="10" height="10" rx=".5" stroke={color} />
    <path d="M3 8.5h2M6 8.5h3M10 8.5h2" stroke={color} />
  </svg>
);

interface AvatarOutline15IconProps extends SVGIconProps {
  name: 'avatar';
  size: '15';
}

export const AvatarOutline15Icon: React.FunctionComponent<
  AvatarOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.5 13a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z" stroke={color} />
    <path d="M7.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke={color} />
    <path
      d="M4 11s1.234-1.5 3.5-1.5S11 11 11 11"
      stroke={color}
      strokeLinecap="round"
    />
  </svg>
);

interface BackpackOutline15IconProps extends SVGIconProps {
  name: 'backpack';
  size: '15';
}

export const BackpackOutline15Icon: React.FunctionComponent<
  BackpackOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.5 9v2.5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v2A2.5 2.5 0 0 1 10 9.5H5A2.5 2.5 0 0 1 2.5 7V5zM5.5 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1.5h-4V3z"
      stroke={color}
    />
    <path
      d="M7.5 8.5v2"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface BadgeOutline15IconProps extends SVGIconProps {
  name: 'badge';
  size: '15';
}

export const BadgeOutline15Icon: React.FunctionComponent<
  BadgeOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="2.5" y="5.5" width="10" height="4" rx="2" stroke={color} />
    <path d="M5.5 7.5h4" stroke={color} strokeLinecap="round" />
  </svg>
);

interface BookmarkOutline15IconProps extends SVGIconProps {
  name: 'bookmark';
  size: '15';
}

export const BookmarkOutline15Icon: React.FunctionComponent<
  BookmarkOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 2.5v10l3-2.5 3 2.5v-10h-6z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface BoxOutline15IconProps extends SVGIconProps {
  name: 'box';
  size: '15';
}

export const BoxOutline15Icon: React.FunctionComponent<
  BoxOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2.5H3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5z"
      stroke={color}
    />
  </svg>
);

interface ButtonOutline15IconProps extends SVGIconProps {
  name: 'button';
  size: '15';
}

export const ButtonOutline15Icon: React.FunctionComponent<
  ButtonOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="1.5" y="4.5" width="12" height="6" rx="1.5" stroke={color} />
    <path d="M4.5 7.5h6" stroke={color} strokeLinecap="round" />
  </svg>
);

interface CaretBottomOutline15IconProps extends SVGIconProps {
  name: 'caret-bottom';
  size: '15';
}

export const CaretBottomOutline15Icon: React.FunctionComponent<
  CaretBottomOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 6L7.5 8.5 5 6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CaretLeftOutline15IconProps extends SVGIconProps {
  name: 'caret-left';
  size: '15';
}

export const CaretLeftOutline15Icon: React.FunctionComponent<
  CaretLeftOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 10L6.5 7.5 9 5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CaretRightOutline15IconProps extends SVGIconProps {
  name: 'caret-right';
  size: '15';
}

export const CaretRightOutline15Icon: React.FunctionComponent<
  CaretRightOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 5l2.5 2.5L6 10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CaretSortOutline15IconProps extends SVGIconProps {
  name: 'caret-sort';
  size: '15';
}

export const CaretSortOutline15Icon: React.FunctionComponent<
  CaretSortOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 10l-2.5 2.5L5 10M5 5l2.5-2.5L10 5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CaretUpOutline15IconProps extends SVGIconProps {
  name: 'caret-up';
  size: '15';
}

export const CaretUpOutline15Icon: React.FunctionComponent<
  CaretUpOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 9l2.5-2.5L10 9"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CheckCircledOutline15IconProps extends SVGIconProps {
  name: 'check-circled';
  size: '15';
}

export const CheckCircledOutline15Icon: React.FunctionComponent<
  CheckCircledOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7.5" cy="7.5" r="6" stroke={color} />
    <path
      d="M9.5 5.5l-2.667 4L5.5 8.137"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CheckOutline15IconProps extends SVGIconProps {
  name: 'check';
  size: '15';
}

export const CheckOutline15Icon: React.FunctionComponent<
  CheckOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 3.5l-6 8-4-3"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ChevronDownOutline15IconProps extends SVGIconProps {
  name: 'chevron-down';
  size: '15';
}

export const ChevronDownOutline15Icon: React.FunctionComponent<
  ChevronDownOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 5.5l-4 4-4-4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ChevronLeftOutline15IconProps extends SVGIconProps {
  name: 'chevron-left';
  size: '15';
}

export const ChevronLeftOutline15Icon: React.FunctionComponent<
  ChevronLeftOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 3.5l-4 4 4 4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ChevronRightOutline15IconProps extends SVGIconProps {
  name: 'chevron-right';
  size: '15';
}

export const ChevronRightOutline15Icon: React.FunctionComponent<
  ChevronRightOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 3.5l4 4-4 4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ChevronUpOutline15IconProps extends SVGIconProps {
  name: 'chevron-up';
  size: '15';
}

export const ChevronUpOutline15Icon: React.FunctionComponent<
  ChevronUpOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 9.5l-4-4-4 4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CircleOutline15IconProps extends SVGIconProps {
  name: 'circle';
  size: '15';
}

export const CircleOutline15Icon: React.FunctionComponent<
  CircleOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7.5" cy="7.5" r="6" stroke={color} />
  </svg>
);

interface ClockOutline15IconProps extends SVGIconProps {
  name: 'clock';
  size: '15';
}

export const ClockOutline15Icon: React.FunctionComponent<
  ClockOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7.5" cy="7.5" r="6" stroke={color} />
    <path
      d="M8 4.5a.5.5 0 0 0-1 0h1zm-.5 3H7a.5.5 0 0 0 .146.354L7.5 7.5zm1.646 2.354a.5.5 0 0 0 .708-.708l-.708.708zM7 4.5v3h1v-3H7zm.146 3.354l2 2 .708-.708-2-2-.708.708z"
      fill={color}
    />
  </svg>
);

interface CodeOutline15IconProps extends SVGIconProps {
  name: 'code';
  size: '15';
}

export const CodeOutline15Icon: React.FunctionComponent<
  CodeOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.5 5.5l-2 2 2 2M11.5 5.5l2 2-2 2"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.036 12.314a.5.5 0 1 0 .928.372l-.928-.372zm4.928-9.628a.5.5 0 1 0-.928-.372l.928.372zm-4 10l4-10-.928-.372-4 10 .928.372z"
      fill={color}
    />
  </svg>
);

interface ContainerOutline15IconProps extends SVGIconProps {
  name: 'container';
  size: '15';
}

export const ContainerOutline15Icon: React.FunctionComponent<
  ContainerOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path stroke={color} d="M5.5 2.5h4v10h-4z" />
    <path
      d="M14.5 5.5l-2 2 2 2M.5 9.5l2-2-2-2"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CrossOutline15IconProps extends SVGIconProps {
  name: 'cross';
  size: '15';
}

export const CrossOutline15Icon: React.FunctionComponent<
  CrossOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.5 12.5l10-10M12.5 12.5l-10-10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CrosshairClosedOutline15IconProps extends SVGIconProps {
  name: 'crosshair-closed';
  size: '15';
}

export const CrosshairClosedOutline15Icon: React.FunctionComponent<
  CrosshairClosedOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7.5" cy="7.5" r="4" stroke={color} />
    <path d="M.5 7.5h14M7.5.5v14" stroke={color} strokeLinecap="round" />
  </svg>
);

interface CrosshairOutline15IconProps extends SVGIconProps {
  name: 'crosshair';
  size: '15';
}

export const CrosshairOutline15Icon: React.FunctionComponent<
  CrosshairOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7.5" cy="7.5" r="6" stroke={color} />
    <path d="M7.5 2v3M2 7.5h3M10 7.5h3M7.5 10v3" stroke={color} />
  </svg>
);

interface DiscOutline15IconProps extends SVGIconProps {
  name: 'disc';
  size: '15';
}

export const DiscOutline15Icon: React.FunctionComponent<
  DiscOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7.5" cy="7.5" r="2" stroke={color} />
    <circle cx="7.5" cy="7.5" r="6" stroke={color} />
  </svg>
);

interface DividerOutline15IconProps extends SVGIconProps {
  name: 'divider';
  size: '15';
}

export const DividerOutline15Icon: React.FunctionComponent<
  DividerOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2.5 7.5h10" stroke={color} strokeLinecap="round" />
  </svg>
);

interface DotsHorizontalOutline15IconProps extends SVGIconProps {
  name: 'dots-horizontal';
  size: '15';
}

export const DotsHorizontalOutline15Icon: React.FunctionComponent<
  DotsHorizontalOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="2.5" cy="7.5" r="1.5" fill={color} />
    <circle cx="7.5" cy="7.5" r="1.5" fill={color} />
    <circle cx="12.5" cy="7.5" r="1.5" fill={color} />
  </svg>
);

interface DotsVerticalOutline15IconProps extends SVGIconProps {
  name: 'dots-vertical';
  size: '15';
}

export const DotsVerticalOutline15Icon: React.FunctionComponent<
  DotsVerticalOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7.5" cy="2.5" r="1.5" fill={color} />
    <circle cx="7.5" cy="7.5" r="1.5" fill={color} />
    <circle cx="7.5" cy="12.5" r="1.5" fill={color} />
  </svg>
);

interface DoubleArrowDownOutline15IconProps extends SVGIconProps {
  name: 'double-arrow-down';
  size: '15';
}

export const DoubleArrowDownOutline15Icon: React.FunctionComponent<
  DoubleArrowDownOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 8.5l-4 4-4-4M11.5 2.5l-4 4-4-4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface DoubleArrowLeftOutline15IconProps extends SVGIconProps {
  name: 'double-arrow-left';
  size: '15';
}

export const DoubleArrowLeftOutline15Icon: React.FunctionComponent<
  DoubleArrowLeftOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 3.5l-4 4 4 4M12.5 3.5l-4 4 4 4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface DoubleArrowRightOutline15IconProps extends SVGIconProps {
  name: 'double-arrow-right';
  size: '15';
}

export const DoubleArrowRightOutline15Icon: React.FunctionComponent<
  DoubleArrowRightOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.5 3.5l4 4-4 4M2.5 3.5l4 4-4 4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface DoubleArrowUpOutline15IconProps extends SVGIconProps {
  name: 'double-arrow-up';
  size: '15';
}

export const DoubleArrowUpOutline15Icon: React.FunctionComponent<
  DoubleArrowUpOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 6.5l-4-4-4 4M11.5 12.5l-4-4-4 4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface DownloadOutline15IconProps extends SVGIconProps {
  name: 'download';
  size: '15';
}

export const DownloadOutline15Icon: React.FunctionComponent<
  DownloadOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 7.5a.5.5 0 0 0-1 0h1zm10 0a.5.5 0 0 0-1 0h1zm-11 0V12h1V7.5H2zM2 12a1 1 0 0 0 1 1v-1H2zm1 1h9v-1H3v1zm9 0a1 1 0 0 0 1-1h-1v1zm.5-1h.5v-.001-.001-.001-.002-.001-.001-.002-.001-.001-.001-.002-.002-.002-.001-.002-.001-.002-.002-.002-.001-.002-.002-.002-.002-.002-.003-.002-.002-.002-.003-.002-.003-.002-.003-.003-.002-.003-.003-.003-.003-.003-.003-.003-.003-.004-.003-.003-.004-.003-.004-.003-.004-.003-.004-.004-.004-.003-.004-.004-.004-.004-.005-.004-.004-.004-.004-.005-.004-.005-.004-.005-.004-.005-.005-.004-.005-.005-.005-.005-.005-.005-.005-.005-.005-.006-.005-.005-.006-.005-.006-.005-.006-.005-.006-.006-.005-.006-.006-.006-.006-.006-.006-.006-.006-.006-.006-.006-.007-.006-.006-.007-.006-.007-.006-.007-.006-.007-.007-.006-.007-.007-.007-.007-.007-.007-.007-.007-.007-.007-.007-.007-.008-.007-.007-.008-.007-.008-.007-.008-.007-.008-.007-.008-.008-.007-.008-.008-.008-.008-.008-.008-.008-.008-.008-.008-.008-.008-.008-.009-.008-.008-.009-.008-.008-.009-.008-.009-.008-.009-.009-.008-.009-.009-.008-.01-.008-.009-.009-.009-.008-.01-.008-.01-.009-.009-.009-.009-.01-.008-.01-.009-.01-.008-.01-.01-.008-.01-.01-.009-.01-.009-.01-.01-.009-.01-.01-.009-.01-.01-.01-.009-.01-.01-.01-.01-.01-.01-.01-.01-.01-.01-.01-.01-.01-.01-.01-.01-.01-.01-.011-.01-.01-.011-.01-.01-.011-.01-.011-.01-.011-.01-.011-.01-.011-.011-.01-.011-.01-.012-.01-.011-.01-.012-.01-.011-.01-.012-.01-.011-.011-.011-.011-.011-.011-.011-.011-.011-.011-.011-.011-.011-.011-.011-.011-.012-.01-.012-.011-.011-.011-.012-.01-.012-.011-.012-.011-.011-.012-.01-.012-.012-.011-.011-.012-.011-.012-.011-.011-.012V9.8v-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.012-.011-.012-.012-.012-.011-.012-.012-.012-.011-.012-.012-.012-.011-.012-.012-.012-.012-.011-.012-.012-.012-.012-.012-.011-.012-.012-.012-.012-.011-.012-.012-.012-.012-.012-.011-.012-.012-.012-.012-.011-.012-.012-.012-.012-.012-.011-.012-.012-.012-.012-.011-.012-.012-.012-.012-.011-.012-.012-.012-.011-.012-.012-.012-.011-.012-.012-.012-.011-.012-.012-.011-.012-.012-.012-.011-.012-.012-.011-.012-.011-.012-.012-.011-.012-.012-.011-.012-.011-.012-.011-.012-.011-.012-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.01-.012-.012-.01-.012-.011-.012-.011-.011-.011-.012-.01-.012-.011-.011-.011-.012-.01-.012-.01-.012-.011-.011-.011-.011-.011-.01-.012-.01-.012-.01-.011-.011-.011-.011-.01-.012-.01-.011-.01V7.7v-.011-.01-.011-.011-.01-.011-.01-.011-.01-.011-.01-.011-.01-.011-.01-.011-.01-.01V7.5h-1V12h.5z"
      fill={color}
    />
    <path d="M7.5 2.5v7" stroke={color} strokeLinecap="round" />
    <path
      d="M5.5 6.5l2 3 2-3"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ExternalLinkOutline15IconProps extends SVGIconProps {
  name: 'external-link';
  size: '15';
}

export const ExternalLinkOutline15Icon: React.FunctionComponent<
  ExternalLinkOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 2.5h3v3"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 8.5l6-6M10.5 9.071V12a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h2.929"
      stroke={color}
      strokeLinecap="round"
    />
  </svg>
);

interface GridOutline15IconProps extends SVGIconProps {
  name: 'grid';
  size: '15';
}

export const GridOutline15Icon: React.FunctionComponent<
  GridOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2.5H3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM7.5 2v11M13 7.5H2"
      stroke={color}
    />
  </svg>
);

interface HeadingOutline15IconProps extends SVGIconProps {
  name: 'heading';
  size: '15';
}

export const HeadingOutline15Icon: React.FunctionComponent<
  HeadingOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 2.5v10M10.5 2.5v10M2.5 12.5h4M8.5 12.5h4M4.5 7.5h6M2.5 2.5h4M8.5 2.5h4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ImageOutline15IconProps extends SVGIconProps {
  name: 'image';
  size: '15';
}

export const ImageOutline15Icon: React.FunctionComponent<
  ImageOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="2.5" y="2.5" width="10" height="10" rx=".5" stroke={color} />
    <circle cx="5.5" cy="5.5" r="1" stroke={color} />
    <path
      d="M3 12.5l6.5-6 3 2"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface InfoOutline15IconProps extends SVGIconProps {
  name: 'info';
  size: '15';
}

export const InfoOutline15Icon: React.FunctionComponent<
  InfoOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7.5" cy="7.5" r="6" stroke={color} />
    <path
      d="M7.5 10.5v-4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="7.5" cy="4.5" r=".5" fill={color} />
  </svg>
);

interface InputOutline15IconProps extends SVGIconProps {
  name: 'input';
  size: '15';
}

export const InputOutline15Icon: React.FunctionComponent<
  InputOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path stroke={color} d="M.5 5.5h14v4H.5z" />
  </svg>
);

interface LayoutOutline15IconProps extends SVGIconProps {
  name: 'layout';
  size: '15';
}

export const LayoutOutline15Icon: React.FunctionComponent<
  LayoutOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="1.5" y="4.5" width="12" height="6" rx=".5" stroke={color} />
    <path d="M5.5 4.5v6M9.5 4.5v6" stroke={color} />
  </svg>
);

interface LinkOutline15IconProps extends SVGIconProps {
  name: 'link';
  size: '15';
}

export const LinkOutline15Icon: React.FunctionComponent<
  LinkOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 4.5H4C1.5 4.5.5 6 .5 7.5s1 3 3.5 3h1.5M9.5 4.5H11c2.5 0 3.5 1.5 3.5 3s-1 3-3.5 3H9.5M10.5 7.5h-6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface LockOutline15IconProps extends SVGIconProps {
  name: 'lock';
  size: '15';
}

export const LockOutline15Icon: React.FunctionComponent<
  LockOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="2.5" y="6.5" width="10" height="6" rx=".5" stroke={color} />
    <path d="M4.5 5.5a3 3 0 0 1 6 0v1h-6v-1z" stroke={color} />
  </svg>
);

interface MagnifyingGlassOutline15IconProps extends SVGIconProps {
  name: 'magnifying-glass';
  size: '15';
}

export const MagnifyingGlassOutline15Icon: React.FunctionComponent<
  MagnifyingGlassOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="6.5" cy="6.5" r="4" stroke={color} />
    <path
      d="M9.854 9.146a.5.5 0 1 0-.708.708l.708-.708zm2.292 3.708a.5.5 0 0 0 .708-.708l-.708.708zm-3-3l3 3 .708-.708-3-3-.708.708z"
      fill={color}
    />
  </svg>
);

interface MinusOutline15IconProps extends SVGIconProps {
  name: 'minus';
  size: '15';
}

export const MinusOutline15Icon: React.FunctionComponent<
  MinusOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2.5 7.5h10" stroke={color} strokeLinecap="round" />
  </svg>
);

interface MixerHorizontalOutline15IconProps extends SVGIconProps {
  name: 'mixer-horizontal';
  size: '15';
}

export const MixerHorizontalOutline15Icon: React.FunctionComponent<
  MixerHorizontalOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 4.5h-5M12.5 10.5h-1M2.5 4.5h1M2.5 10.5h5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="5.5" cy="4.5" r="2" stroke={color} />
    <circle cx="9.5" cy="10.5" r="2" stroke={color} />
  </svg>
);

interface MixerVerticalOutline15IconProps extends SVGIconProps {
  name: 'mixer-vertical';
  size: '15';
}

export const MixerVerticalOutline15Icon: React.FunctionComponent<
  MixerVerticalOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 7.5v-5M4.5 12.5v-1M10.5 3.5v-1M10.5 12.5v-5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="4.5" cy="9.5" r="2" stroke={color} />
    <circle cx="10.5" cy="5.5" r="2" stroke={color} />
  </svg>
);

interface PlusOutline15IconProps extends SVGIconProps {
  name: 'plus';
  size: '15';
}

export const PlusOutline15Icon: React.FunctionComponent<
  PlusOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2.5 7.5h10M7.5 12.5v-10" stroke={color} strokeLinecap="round" />
  </svg>
);

interface RadioOutline15IconProps extends SVGIconProps {
  name: 'radio';
  size: '15';
}

export const RadioOutline15Icon: React.FunctionComponent<
  RadioOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7.5" cy="7.5" r="6" stroke={color} />
    <circle cx="7.5" cy="7.5" r="2.5" fill={color} />
  </svg>
);

interface SectionOutline15IconProps extends SVGIconProps {
  name: 'section';
  size: '15';
}

export const SectionOutline15Icon: React.FunctionComponent<
  SectionOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke={color}
      d="M2.5 5.5h10v4h-10zM2 2.5h3M6 2.5h3M10 2.5h3M2 12.5h3M6 12.5h3M10 12.5h3"
    />
  </svg>
);

interface SlashOutline15IconProps extends SVGIconProps {
  name: 'slash';
  size: '15';
}

export const SlashOutline15Icon: React.FunctionComponent<
  SlashOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7.5" cy="7.5" r="6" stroke={color} />
    <path d="M3 12l9-9" stroke={color} />
  </svg>
);

interface SliderOutline15IconProps extends SVGIconProps {
  name: 'slider';
  size: '15';
}

export const SliderOutline15Icon: React.FunctionComponent<
  SliderOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7.5" cy="7.5" r="3" stroke={color} />
    <path d="M.5 7.5h4M10.5 7.5h4" stroke={color} strokeLinecap="round" />
  </svg>
);

interface SquareOutline15IconProps extends SVGIconProps {
  name: 'square';
  size: '15';
}

export const SquareOutline15Icon: React.FunctionComponent<
  SquareOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2.5 12.5v-10h10v10h-10z" stroke={color} />
  </svg>
);

interface SwitchOutline15IconProps extends SVGIconProps {
  name: 'switch';
  size: '15';
}

export const SwitchOutline15Icon: React.FunctionComponent<
  SwitchOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x=".5" y="3.5" width="14" height="8" rx="4" stroke={color} />
    <circle cx="10.5" cy="7.5" r="4" stroke={color} />
  </svg>
);

interface TableOutline15IconProps extends SVGIconProps {
  name: 'table';
  size: '15';
}

export const TableOutline15Icon: React.FunctionComponent<
  TableOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="1.5" y="1.5" width="12" height="12" rx=".5" stroke={color} />
    <path d="M7.5 2v11M13 9.5H2M13 5.5H2" stroke={color} />
  </svg>
);

interface TextOutline15IconProps extends SVGIconProps {
  name: 'text';
  size: '15';
}

export const TextOutline15Icon: React.FunctionComponent<
  TextOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 4.5v-2h-10v2M4.5 12.5h6M7.5 12.5v-10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ThickArrowDownOutline15IconProps extends SVGIconProps {
  name: 'thick-arrow-down';
  size: '15';
}

export const ThickArrowDownOutline15Icon: React.FunctionComponent<
  ThickArrowDownOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 2.5h-4v3h-3l5 7 5-7h-3v-3z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ThickArrowUpOutline15IconProps extends SVGIconProps {
  name: 'thick-arrow-up';
  size: '15';
}

export const ThickArrowUpOutline15Icon: React.FunctionComponent<
  ThickArrowUpOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 2.5l5 7h-3v3h-4v-3h-3l5-7z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface TrashOutline15IconProps extends SVGIconProps {
  name: 'trash';
  size: '15';
}

export const TrashOutline15Icon: React.FunctionComponent<
  TrashOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="4.5"
      y="4.5"
      width="6"
      height="8"
      rx=".5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="bevel"
    />
    <path d="M3.5 4.5h8M5.5 2.5h4" stroke={color} strokeLinecap="round" />
  </svg>
);

interface VisibleOutline15IconProps extends SVGIconProps {
  name: 'visible';
  size: '15';
}

export const VisibleOutline15Icon: React.FunctionComponent<
  VisibleOutline15IconProps
> = ({ color = 'currentColor', ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 12.5c-3 0-5.5-2-7-5 1.5-3 4-5 7-5s5.5 2 7 5c-1.5 3-4 5-7 5z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="7.5" cy="7.5" r="2" stroke={color} />
  </svg>
);

type OutlineTypeIcons =
  | AlignBaselineOutline25IconProps
  | AlignCenterOutline25IconProps
  | AlignEndOutline25IconProps
  | AlignStartOutline25IconProps
  | AlignStretchOutline25IconProps
  | ArrowDownCircledOutline25IconProps
  | ArrowDownOutline25IconProps
  | ArrowLeftCircledOutline25IconProps
  | ArrowLeftOutline25IconProps
  | ArrowRightCircledOutline25IconProps
  | ArrowRightOutline25IconProps
  | ArrowUpCircledOutline25IconProps
  | ArrowUpOutline25IconProps
  | BackpackOutline25IconProps
  | BellOutline25IconProps
  | BookmarkOutline25IconProps
  | BorderDashedOutline25IconProps
  | BorderDottedOutline25IconProps
  | BorderSolidOutline25IconProps
  | BoxOutline25IconProps
  | BranchOutline25IconProps
  | BriefcaseOutline25IconProps
  | BullseyeOutline25IconProps
  | ButtonOutline25IconProps
  | CameraOutline25IconProps
  | CheckCircledOutline25IconProps
  | CheckOutline25IconProps
  | ChevronDownOutline25IconProps
  | ChevronLeftOutline25IconProps
  | ChevronRightOutline25IconProps
  | ChevronUpOutline25IconProps
  | CircleSplitAngledOutline25IconProps
  | CircleSplitOutline25IconProps
  | CircleOutline25IconProps
  | ClockOutline25IconProps
  | CodeOutline25IconProps
  | CreditCardOutline25IconProps
  | CropOutline25IconProps
  | CrossCircledOutline25IconProps
  | CrossOutline25IconProps
  | CrosshairOutline25IconProps
  | CubeOutline25IconProps
  | DeviceDesktopOutline25IconProps
  | DeviceKeyboardOutline25IconProps
  | DeviceLaptopOutline25IconProps
  | DeviceMicrophoneOutline25IconProps
  | DeviceMobileLandscapeOutline25IconProps
  | DeviceMobilePortraitOutline25IconProps
  | DeviceMouseOutline25IconProps
  | DevicePrintOutline25IconProps
  | DeviceSpeakerOutline25IconProps
  | DeviceTabletLandscapeOutline25IconProps
  | DeviceTabletPortraitOutline25IconProps
  | DeviceTvOutline25IconProps
  | DiamondOutline25IconProps
  | DirectionColumnOutline25IconProps
  | DirectionRowOutline25IconProps
  | DiscOutline25IconProps
  | DotsHorizontalOutline25IconProps
  | DotsVerticalOutline25IconProps
  | DoubleArrowDownOutline25IconProps
  | DoubleArrowLeftOutline25IconProps
  | DoubleArrowRightOutline25IconProps
  | DoubleArrowUpOutline25IconProps
  | DownloadOutline25IconProps
  | DragOutline25IconProps
  | ElementTagOutline25IconProps
  | EnvelopeOpenOutline25IconProps
  | EnvelopeOutline25IconProps
  | EnvelopesOutline25IconProps
  | ExternalLinkOutline25IconProps
  | FileMinusOutline25IconProps
  | FilePlusOutline25IconProps
  | FileTextOutline25IconProps
  | FileOutline25IconProps
  | FolderOutline25IconProps
  | FoldersOutline25IconProps
  | FoodRamenOutline25IconProps
  | GlobeOutline25IconProps
  | GridLinesOutline25IconProps
  | HamburgerOutline25IconProps
  | HomeOutline25IconProps
  | IdentificationOutline25IconProps
  | ImageOutline25IconProps
  | InfoCircledOutline25IconProps
  | JustifyAroundOutline25IconProps
  | JustifyBetweenOutline25IconProps
  | JustifyCenterOutline25IconProps
  | JustifyEndOutline25IconProps
  | JustifyStartOutline25IconProps
  | LayoutGridGapOutline25IconProps
  | LayoutGridOutline25IconProps
  | LayoutHeaderLeftAlignedSectionsOutline25IconProps
  | LayoutHeaderRightAlignedSectionsOutline25IconProps
  | LayoutHeaderSectionsOutline25IconProps
  | LayoutSectionsHeaderOutline25IconProps
  | LayoutSidebarLeftOutline25IconProps
  | LayoutSidebarRightOutline25IconProps
  | LetterSpacingOutline25IconProps
  | LifesaverOutline25IconProps
  | LineAngledOutline25IconProps
  | LineHeightOutline25IconProps
  | LinkOutline25IconProps
  | ListOutline25IconProps
  | LockOutline25IconProps
  | LogOutline25IconProps
  | MagnifyingGlassOutline25IconProps
  | MinusCircledOutline25IconProps
  | MinusOutline25IconProps
  | MixerVerticalOutline25IconProps
  | NoteOutline25IconProps
  | NoteAddOutline25IconProps
  | PaperAirplaneOutline25IconProps
  | ParagraphOutline25IconProps
  | PauseOutline25IconProps
  | PersonOutline25IconProps
  | PinBottomOutline25IconProps
  | PinLeftOutline25IconProps
  | PinRightOutline25IconProps
  | PinTopOutline25IconProps
  | PlayNextOutline25IconProps
  | PlayOutline25IconProps
  | PlusCircledOutline25IconProps
  | PlusOutline25IconProps
  | PositionAbsoluteOutline25IconProps
  | PositionFixedOutline25IconProps
  | PositionRelativeOutline25IconProps
  | PositionStaticOutline25IconProps
  | PositionStickyOutline25IconProps
  | QuotationOutline25IconProps
  | Ratio11Outline25IconProps
  | Ratio23Outline25IconProps
  | Ratio32Outline25IconProps
  | Ratio34Outline25IconProps
  | Ratio43Outline25IconProps
  | Ratio169Outline25IconProps
  | ShareOutline25IconProps
  | SliderOutline25IconProps
  | SmileyOutline25IconProps
  | StackOutline25IconProps
  | TextAlignCenterOutline25IconProps
  | TextAlignJustifyOutline25IconProps
  | TextAlignLeftOutline25IconProps
  | TextAlignRightOutline25IconProps
  | TextCasingCapitalizeOutline25IconProps
  | TextCasingLowercaseOutline25IconProps
  | TextCasingUppercaseOutline25IconProps
  | ThickArrowUpOutline25IconProps
  | ThickArrowDownOutline25IconProps
  | TextStyleItalicOutline25IconProps
  | TextStyleNormalOutline25IconProps
  | TextStyleOverlineOutline25IconProps
  | TextStyleStrikethroughOutline25IconProps
  | TextStyleUnderlineOutline25IconProps
  | TrashOutline25IconProps
  | VehicleBusOutline25IconProps
  | VehicleCarOutline25IconProps
  | VehicleTrainOutline25IconProps
  | VisibleOutline25IconProps
  | WarningOutline25IconProps
  | ZoomInOutline25IconProps
  | ZoomOutOutline25IconProps
  | ArrowDownOutline15IconProps
  | ArrowLeftOutline15IconProps
  | ArrowRightOutline15IconProps
  | ArrowUpOutline15IconProps
  | AspectRatioOutline15IconProps
  | AvatarOutline15IconProps
  | BackpackOutline15IconProps
  | BadgeOutline15IconProps
  | BookmarkOutline15IconProps
  | BoxOutline15IconProps
  | ButtonOutline15IconProps
  | CaretBottomOutline15IconProps
  | CaretLeftOutline15IconProps
  | CaretRightOutline15IconProps
  | CaretSortOutline15IconProps
  | CaretUpOutline15IconProps
  | CheckCircledOutline15IconProps
  | CheckOutline15IconProps
  | ChevronDownOutline15IconProps
  | ChevronLeftOutline15IconProps
  | ChevronRightOutline15IconProps
  | ChevronUpOutline15IconProps
  | CircleOutline15IconProps
  | ClockOutline15IconProps
  | CodeOutline15IconProps
  | ContainerOutline15IconProps
  | CrossOutline15IconProps
  | CrosshairClosedOutline15IconProps
  | CrosshairOutline15IconProps
  | DiscOutline15IconProps
  | DividerOutline15IconProps
  | DotsHorizontalOutline15IconProps
  | DotsVerticalOutline15IconProps
  | DoubleArrowDownOutline15IconProps
  | DoubleArrowLeftOutline15IconProps
  | DoubleArrowRightOutline15IconProps
  | DoubleArrowUpOutline15IconProps
  | DownloadOutline15IconProps
  | ExternalLinkOutline15IconProps
  | GridOutline15IconProps
  | HeadingOutline15IconProps
  | ImageOutline15IconProps
  | InfoOutline15IconProps
  | InputOutline15IconProps
  | LayoutOutline15IconProps
  | LinkOutline15IconProps
  | LockOutline15IconProps
  | MagnifyingGlassOutline15IconProps
  | MinusOutline15IconProps
  | MixerHorizontalOutline15IconProps
  | MixerVerticalOutline15IconProps
  | PlusOutline15IconProps
  | RadioOutline15IconProps
  | SectionOutline15IconProps
  | SlashOutline15IconProps
  | SliderOutline15IconProps
  | SquareOutline15IconProps
  | SwitchOutline15IconProps
  | TableOutline15IconProps
  | TextOutline15IconProps
  | ThickArrowDownOutline15IconProps
  | ThickArrowUpOutline15IconProps
  | TrashOutline15IconProps
  | VisibleOutline15IconProps;

type OutlineTypeIconProps = OutlineTypeIcons & { type: 'outline' };

type IconProps = OutlineTypeIconProps;

const iconManifest = {
  outline: {
    '25': {
      'align-baseline': AlignBaselineOutline25Icon,
      'align-center': AlignCenterOutline25Icon,
      'align-end': AlignEndOutline25Icon,
      'align-start': AlignStartOutline25Icon,
      'align-stretch': AlignStretchOutline25Icon,
      'arrow-down-circled': ArrowDownCircledOutline25Icon,
      'arrow-down': ArrowDownOutline25Icon,
      'arrow-left-circled': ArrowLeftCircledOutline25Icon,
      'arrow-left': ArrowLeftOutline25Icon,
      'arrow-right-circled': ArrowRightCircledOutline25Icon,
      'arrow-right': ArrowRightOutline25Icon,
      'arrow-up-circled': ArrowUpCircledOutline25Icon,
      'arrow-up': ArrowUpOutline25Icon,
      backpack: BackpackOutline25Icon,
      bell: BellOutline25Icon,
      bookmark: BookmarkOutline25Icon,
      'border-dashed': BorderDashedOutline25Icon,
      'border-dotted': BorderDottedOutline25Icon,
      'border-solid': BorderSolidOutline25Icon,
      box: BoxOutline25Icon,
      branch: BranchOutline25Icon,
      briefcase: BriefcaseOutline25Icon,
      bullseye: BullseyeOutline25Icon,
      button: ButtonOutline25Icon,
      camera: CameraOutline25Icon,
      'check-circled': CheckCircledOutline25Icon,
      check: CheckOutline25Icon,
      'chevron-down': ChevronDownOutline25Icon,
      'chevron-left': ChevronLeftOutline25Icon,
      'chevron-right': ChevronRightOutline25Icon,
      'chevron-up': ChevronUpOutline25Icon,
      'circle-split-angled': CircleSplitAngledOutline25Icon,
      'circle-split': CircleSplitOutline25Icon,
      circle: CircleOutline25Icon,
      clock: ClockOutline25Icon,
      code: CodeOutline25Icon,
      'credit-card': CreditCardOutline25Icon,
      crop: CropOutline25Icon,
      'cross-circled': CrossCircledOutline25Icon,
      cross: CrossOutline25Icon,
      crosshair: CrosshairOutline25Icon,
      cube: CubeOutline25Icon,
      'device-desktop': DeviceDesktopOutline25Icon,
      'device-keyboard': DeviceKeyboardOutline25Icon,
      'device-laptop': DeviceLaptopOutline25Icon,
      'device-microphone': DeviceMicrophoneOutline25Icon,
      'device-mobile-landscape': DeviceMobileLandscapeOutline25Icon,
      'device-mobile-portrait': DeviceMobilePortraitOutline25Icon,
      'device-mouse': DeviceMouseOutline25Icon,
      'device-print': DevicePrintOutline25Icon,
      'device-speaker': DeviceSpeakerOutline25Icon,
      'device-tablet-landscape': DeviceTabletLandscapeOutline25Icon,
      'device-tablet-portrait': DeviceTabletPortraitOutline25Icon,
      'device-tv': DeviceTvOutline25Icon,
      diamond: DiamondOutline25Icon,
      'direction-column': DirectionColumnOutline25Icon,
      'direction-row': DirectionRowOutline25Icon,
      disc: DiscOutline25Icon,
      'dots-horizontal': DotsHorizontalOutline25Icon,
      'dots-vertical': DotsVerticalOutline25Icon,
      'double-arrow-down': DoubleArrowDownOutline25Icon,
      'double-arrow-left': DoubleArrowLeftOutline25Icon,
      'double-arrow-right': DoubleArrowRightOutline25Icon,
      'double-arrow-up': DoubleArrowUpOutline25Icon,
      download: DownloadOutline25Icon,
      drag: DragOutline25Icon,
      'element-tag': ElementTagOutline25Icon,
      'envelope-open': EnvelopeOpenOutline25Icon,
      envelope: EnvelopeOutline25Icon,
      envelopes: EnvelopesOutline25Icon,
      'external-link': ExternalLinkOutline25Icon,
      'file-minus': FileMinusOutline25Icon,
      'file-plus': FilePlusOutline25Icon,
      'file-text': FileTextOutline25Icon,
      file: FileOutline25Icon,
      folder: FolderOutline25Icon,
      folders: FoldersOutline25Icon,
      'food-ramen': FoodRamenOutline25Icon,
      globe: GlobeOutline25Icon,
      'grid-lines': GridLinesOutline25Icon,
      hamburger: HamburgerOutline25Icon,
      home: HomeOutline25Icon,
      identification: IdentificationOutline25Icon,
      image: ImageOutline25Icon,
      'info-circled': InfoCircledOutline25Icon,
      'justify-around': JustifyAroundOutline25Icon,
      'justify-between': JustifyBetweenOutline25Icon,
      'justify-center': JustifyCenterOutline25Icon,
      'justify-end': JustifyEndOutline25Icon,
      'justify-start': JustifyStartOutline25Icon,
      'layout-grid-gap': LayoutGridGapOutline25Icon,
      'layout-grid': LayoutGridOutline25Icon,
      'layout-header-left-aligned-sections': LayoutHeaderLeftAlignedSectionsOutline25Icon,
      'layout-header-right-aligned-sections': LayoutHeaderRightAlignedSectionsOutline25Icon,
      'layout-header-sections': LayoutHeaderSectionsOutline25Icon,
      'layout-sections-header': LayoutSectionsHeaderOutline25Icon,
      'layout-sidebar-left': LayoutSidebarLeftOutline25Icon,
      'layout-sidebar-right': LayoutSidebarRightOutline25Icon,
      'letter-spacing': LetterSpacingOutline25Icon,
      lifesaver: LifesaverOutline25Icon,
      'line-angled': LineAngledOutline25Icon,
      'line-height': LineHeightOutline25Icon,
      link: LinkOutline25Icon,
      list: ListOutline25Icon,
      lock: LockOutline25Icon,
      log: LogOutline25Icon,
      'magnifying-glass': MagnifyingGlassOutline25Icon,
      'minus-circled': MinusCircledOutline25Icon,
      minus: MinusOutline25Icon,
      'mixer-vertical': MixerVerticalOutline25Icon,
      note: NoteOutline25Icon,
      'note-add': NoteAddOutline25Icon,
      'paper-airplane': PaperAirplaneOutline25Icon,
      paragraph: ParagraphOutline25Icon,
      pause: PauseOutline25Icon,
      person: PersonOutline25Icon,
      'pin-bottom': PinBottomOutline25Icon,
      'pin-left': PinLeftOutline25Icon,
      'pin-right': PinRightOutline25Icon,
      'pin-top': PinTopOutline25Icon,
      'play-next': PlayNextOutline25Icon,
      play: PlayOutline25Icon,
      'plus-circled': PlusCircledOutline25Icon,
      plus: PlusOutline25Icon,
      'position-absolute': PositionAbsoluteOutline25Icon,
      'position-fixed': PositionFixedOutline25Icon,
      'position-relative': PositionRelativeOutline25Icon,
      'position-static': PositionStaticOutline25Icon,
      'position-sticky': PositionStickyOutline25Icon,
      quotation: QuotationOutline25Icon,
      'ratio-1-1': Ratio11Outline25Icon,
      'ratio-2-3': Ratio23Outline25Icon,
      'ratio-3-2': Ratio32Outline25Icon,
      'ratio-3-4': Ratio34Outline25Icon,
      'ratio-4-3': Ratio43Outline25Icon,
      'ratio-16-9': Ratio169Outline25Icon,
      share: ShareOutline25Icon,
      slider: SliderOutline25Icon,
      smiley: SmileyOutline25Icon,
      stack: StackOutline25Icon,
      'text-align-center': TextAlignCenterOutline25Icon,
      'text-align-justify': TextAlignJustifyOutline25Icon,
      'text-align-left': TextAlignLeftOutline25Icon,
      'text-align-right': TextAlignRightOutline25Icon,
      'text-casing-capitalize': TextCasingCapitalizeOutline25Icon,
      'text-casing-lowercase': TextCasingLowercaseOutline25Icon,
      'text-casing-uppercase': TextCasingUppercaseOutline25Icon,
      'thick-arrow-up': ThickArrowUpOutline25Icon,
      'thick-arrow-down': ThickArrowDownOutline25Icon,
      'text-style-italic': TextStyleItalicOutline25Icon,
      'text-style-normal': TextStyleNormalOutline25Icon,
      'text-style-overline': TextStyleOverlineOutline25Icon,
      'text-style-strikethrough': TextStyleStrikethroughOutline25Icon,
      'text-style-underline': TextStyleUnderlineOutline25Icon,
      trash: TrashOutline25Icon,
      'vehicle-bus': VehicleBusOutline25Icon,
      'vehicle-car': VehicleCarOutline25Icon,
      'vehicle-train': VehicleTrainOutline25Icon,
      visible: VisibleOutline25Icon,
      warning: WarningOutline25Icon,
      'zoom-in': ZoomInOutline25Icon,
      'zoom-out': ZoomOutOutline25Icon,
    },
    '15': {
      'arrow-down': ArrowDownOutline15Icon,
      'arrow-left': ArrowLeftOutline15Icon,
      'arrow-right': ArrowRightOutline15Icon,
      'arrow-up': ArrowUpOutline15Icon,
      'aspect-ratio': AspectRatioOutline15Icon,
      avatar: AvatarOutline15Icon,
      backpack: BackpackOutline15Icon,
      badge: BadgeOutline15Icon,
      bookmark: BookmarkOutline15Icon,
      box: BoxOutline15Icon,
      button: ButtonOutline15Icon,
      'caret-bottom': CaretBottomOutline15Icon,
      'caret-left': CaretLeftOutline15Icon,
      'caret-right': CaretRightOutline15Icon,
      'caret-sort': CaretSortOutline15Icon,
      'caret-up': CaretUpOutline15Icon,
      'check-circled': CheckCircledOutline15Icon,
      check: CheckOutline15Icon,
      'chevron-down': ChevronDownOutline15Icon,
      'chevron-left': ChevronLeftOutline15Icon,
      'chevron-right': ChevronRightOutline15Icon,
      'chevron-up': ChevronUpOutline15Icon,
      circle: CircleOutline15Icon,
      clock: ClockOutline15Icon,
      code: CodeOutline15Icon,
      container: ContainerOutline15Icon,
      cross: CrossOutline15Icon,
      'crosshair-closed': CrosshairClosedOutline15Icon,
      crosshair: CrosshairOutline15Icon,
      disc: DiscOutline15Icon,
      divider: DividerOutline15Icon,
      'dots-horizontal': DotsHorizontalOutline15Icon,
      'dots-vertical': DotsVerticalOutline15Icon,
      'double-arrow-down': DoubleArrowDownOutline15Icon,
      'double-arrow-left': DoubleArrowLeftOutline15Icon,
      'double-arrow-right': DoubleArrowRightOutline15Icon,
      'double-arrow-up': DoubleArrowUpOutline15Icon,
      download: DownloadOutline15Icon,
      'external-link': ExternalLinkOutline15Icon,
      grid: GridOutline15Icon,
      heading: HeadingOutline15Icon,
      image: ImageOutline15Icon,
      info: InfoOutline15Icon,
      input: InputOutline15Icon,
      layout: LayoutOutline15Icon,
      link: LinkOutline15Icon,
      lock: LockOutline15Icon,
      'magnifying-glass': MagnifyingGlassOutline15Icon,
      minus: MinusOutline15Icon,
      'mixer-horizontal': MixerHorizontalOutline15Icon,
      'mixer-vertical': MixerVerticalOutline15Icon,
      plus: PlusOutline15Icon,
      radio: RadioOutline15Icon,
      section: SectionOutline15Icon,
      slash: SlashOutline15Icon,
      slider: SliderOutline15Icon,
      square: SquareOutline15Icon,
      switch: SwitchOutline15Icon,
      table: TableOutline15Icon,
      text: TextOutline15Icon,
      'thick-arrow-down': ThickArrowDownOutline15Icon,
      'thick-arrow-up': ThickArrowUpOutline15Icon,
      trash: TrashOutline15Icon,
      visible: VisibleOutline15Icon,
    },
  },
};

const Icon = ({ name, size = '25', type = 'outline', ...props }: IconProps) => {
  if (!name) throw new Error("Icon component requires a 'name' prop.");
  if (!type) throw new Error("Icon component requires a 'type' prop.");
  if (!size) throw new Error("Icon component requires a 'size' prop.");

  const MappedIcon = iconManifest[type][size][name];
  return <MappedIcon {...props} />;
};

export default Icon;
