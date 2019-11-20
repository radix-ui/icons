import * as React from 'react';
import { BaseIconProps } from './types';

interface DeviceKeyboardIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const DeviceKeyboardIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DeviceKeyboardIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M19 7.5H6A1.5 1.5 0 004.5 9v7A1.5 1.5 0 006 17.5h13a1.5 1.5 0 001.5-1.5V9A1.5 1.5 0 0019 7.5z"
          stroke={color}
        />
        <path
          d="M8 10H7v1h1v-1zM10 10H9v1h1v-1zM12 10h-1v1h1v-1zM14 10h-1v1h1v-1zM16 10h-1v1h1v-1zM18 10h-1v1h1v-1zM9 12H8v1h1v-1zM8 14H7v1h1v-1zM18 14h-1v1h1v-1zM11 12h-1v1h1v-1zM13 12h-1v1h1v-1zM15 12h-1v1h1v-1zM17 12h-1v1h1v-1z"
          fill={color}
        />
        <path d="M9.5 14.5h6" stroke={color} />
      </svg>
    );
  }

  console.error(`DeviceKeyboardIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DeviceKeyboardIcon;
