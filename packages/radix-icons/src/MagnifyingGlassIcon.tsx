import * as React from 'react';
import { BaseIconProps } from './types';

interface MagnifyingGlassIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const MagnifyingGlassIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: MagnifyingGlassIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M10.5 16.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" stroke={color} />
        <path d="M20.5 20.5L15 15" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="6.5" cy="6.5" r="4" stroke={color} />
        <path
          d="M9.854 9.146a.5.5 0 1 0-.708.708l.708-.708zm2.292 3.708a.5.5 0 0 0 .708-.708l-.708.708zm-3-3l3 3 .708-.708-3-3-.708.708z"
          fill={color}
        />
      </svg>
    );
  }

  console.error(`MagnifyingGlassIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default MagnifyingGlassIcon;
