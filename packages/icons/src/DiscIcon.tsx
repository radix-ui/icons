import * as React from 'react';
import { BaseIconProps } from './types';

interface DiscIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const DiscIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DiscIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12.5 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke={color} />
        <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="7.5" cy="7.5" r="2" stroke={color} />
        <circle cx="7.5" cy="7.5" r="6" stroke={color} />
      </svg>
    );
  }

  console.error(
    `DiscIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default DiscIcon;
