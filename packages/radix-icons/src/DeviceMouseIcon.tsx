import * as React from 'react';
import { BaseIconProps } from './types';

interface DeviceMouseIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const DeviceMouseIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DeviceMouseIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12.5 10.5v-3" stroke={color} strokeLinecap="round" />
        <path d="M17.5 9.5a5 5 0 00-10 0v6a5 5 0 0010 0v-6z" stroke={color} />
      </svg>
    );
  }

  console.error(`DeviceMouseIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DeviceMouseIcon;
