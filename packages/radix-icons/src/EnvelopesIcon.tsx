import * as React from 'react';
import { BaseIconProps } from './types';

interface EnvelopesIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const EnvelopesIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: EnvelopesIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M19 8.5H6A1.5 1.5 0 004.5 10v9A1.5 1.5 0 006 20.5h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0019 8.5zM5.5 8A1.5 1.5 0 017 6.5h11A1.5 1.5 0 0119.5 8v.5h-14V8zM6.5 6A1.5 1.5 0 018 4.5h9A1.5 1.5 0 0118.5 6v.5h-12V6z"
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
  }

  console.error(`EnvelopesIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default EnvelopesIcon;
