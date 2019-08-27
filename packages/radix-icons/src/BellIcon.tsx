import * as React from 'react';
import { BaseIconProps } from './types';

interface BellIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const BellIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: BellIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M15.45 18.5a2.5 2.5 0 0 1-2.45 2h-1a2.5 2.5 0 0 1-2.45-2h5.9z" stroke={color} />
        <path
          d="M5.5 15v3.5h14V15l-2.333-1.5V10S17.5 4.5 12.5 4.5 7.833 10 7.833 10v3.5L5.5 15z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BellIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BellIcon;
