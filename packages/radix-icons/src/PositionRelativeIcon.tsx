import * as React from 'react';
import { BaseIconProps } from './types';

interface PositionRelativeIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const PositionRelativeIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: PositionRelativeIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
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
  }

  console.error(`PositionRelativeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default PositionRelativeIcon;
