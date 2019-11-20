import * as React from 'react';
import { BaseIconProps } from './types';

interface AvatarIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const AvatarIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: AvatarIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M7.5 13a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" stroke={color} />
        <path d="M7.5 8.5a2 2 0 100-4 2 2 0 000 4z" stroke={color} />
        <path d="M4 11s1.234-1.5 3.5-1.5S11 11 11 11" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  console.error(`AvatarIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default AvatarIcon;
