import * as React from 'react';
import { BaseIconProps } from './types';

interface SmileyIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const SmileyIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: SmileyIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
        <path
          d="M9.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM15.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
          fill={color}
        />
        <path
          d="M8.5 15c2 2.5 6 2.5 8 0"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`SmileyIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default SmileyIcon;
