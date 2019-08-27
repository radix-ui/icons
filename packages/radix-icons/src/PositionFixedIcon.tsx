import * as React from 'react';
import { BaseIconProps } from './types';

interface PositionFixedIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const PositionFixedIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: PositionFixedIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M10.5 9V5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4c2 .8 2.833 3.333 3 4.5h-10c0-2.4 2-4 3-4.5z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M13.5 13.5v4l-1 3-1-3v-4" stroke={color} strokeLinejoin="round" />
      </svg>
    );
  }

  console.error(`PositionFixedIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default PositionFixedIcon;
