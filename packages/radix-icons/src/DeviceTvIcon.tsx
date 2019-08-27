import * as React from 'react';
import { BaseIconProps } from './types';

interface DeviceTvIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const DeviceTvIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DeviceTvIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M19 8.5H6A1.5 1.5 0 0 0 4.5 10v9A1.5 1.5 0 0 0 6 20.5h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 19 8.5z"
          stroke={color}
        />
        <path d="M16.5 4.5l-4 4-4-4" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  console.error(`DeviceTvIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DeviceTvIcon;
