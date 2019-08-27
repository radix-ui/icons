import * as React from 'react';
import { BaseIconProps } from './types';

interface DeviceLaptopIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const DeviceLaptopIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DeviceLaptopIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5.5 13.5l-1 7h16l-1-7v-9h-14v9zM5.5 13.5h14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`DeviceLaptopIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DeviceLaptopIcon;
