import * as React from 'react';
import { BaseIconProps } from './types';

interface DeviceTabletLandscapeIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const DeviceTabletLandscapeIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DeviceTabletLandscapeIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M19 6.5H6A1.5 1.5 0 0 0 4.5 8v9A1.5 1.5 0 0 0 6 18.5h13a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 19 6.5z"
          stroke={color}
        />
        <path d="M17.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill={color} />
      </svg>
    );
  }

  console.error(`DeviceTabletLandscapeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DeviceTabletLandscapeIcon;
