import * as React from 'react';
import { BaseIconProps } from './types';

interface CircleIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const CircleIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: CircleIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
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
        <circle cx="7.5" cy="7.5" r="6" stroke={color} />
      </svg>
    );
  }

  console.error(
    `CircleIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default CircleIcon;
