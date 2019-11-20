import * as React from 'react';
import { BaseIconProps } from './types';

interface DeviceMobileLandscapeIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const DeviceMobileLandscapeIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DeviceMobileLandscapeIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M19 7.5H6A1.5 1.5 0 004.5 9v7A1.5 1.5 0 006 17.5h13a1.5 1.5 0 001.5-1.5V9A1.5 1.5 0 0019 7.5z"
          stroke={color}
        />
        <path d="M17.5 13a.5.5 0 100-1 .5.5 0 000 1z" fill={color} />
      </svg>
    );
  }

  console.error(`DeviceMobileLandscapeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DeviceMobileLandscapeIcon;
