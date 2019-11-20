import * as React from 'react';
import { BaseIconProps } from './types';

interface DeviceDesktopIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const DeviceDesktopIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DeviceDesktopIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M19 4.5H6A1.5 1.5 0 004.5 6v9A1.5 1.5 0 006 16.5h13a1.5 1.5 0 001.5-1.5V6A1.5 1.5 0 0019 4.5z"
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
  }

  console.error(`DeviceDesktopIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DeviceDesktopIcon;
