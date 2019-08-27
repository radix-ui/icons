import * as React from 'react';
import { BaseIconProps } from './types';

interface PersonIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const PersonIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: PersonIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12.5 12.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke={color} />
        <path
          d="M5.5 20.5c1-6 13-6 14 0"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`PersonIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default PersonIcon;
