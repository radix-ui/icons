import * as React from 'react';
import { BaseIconProps } from './types';

interface LockIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const LockIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: LockIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M19 11.5H6A1.5 1.5 0 0 0 4.5 13v6A1.5 1.5 0 0 0 6 20.5h13a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5zM7.5 9.5a5 5 0 0 1 10 0v2h-10v-2z"
          stroke={color}
        />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="2.5" y="6.5" width="10" height="6" rx=".5" stroke={color} />
        <path d="M4.5 5.5a3 3 0 0 1 6 0v1h-6v-1z" stroke={color} />
      </svg>
    );
  }

  console.error(`LockIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LockIcon;
