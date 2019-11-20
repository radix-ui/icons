import * as React from 'react';
import { BaseIconProps } from './types';

interface ImageIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const ImageIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: ImageIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M18 5.5H7A1.5 1.5 0 005.5 7v11A1.5 1.5 0 007 19.5h11a1.5 1.5 0 001.5-1.5V7A1.5 1.5 0 0018 5.5z"
          stroke={color}
        />
        <path d="M9.5 10.5a1 1 0 100-2 1 1 0 000 2z" stroke={color} />
        <path
          d="M6.5 19l8.737-8.5 4.263 3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="2.5" y="2.5" width="10" height="10" rx=".5" stroke={color} />
        <circle cx="5.5" cy="5.5" r="1" stroke={color} />
        <path d="M3 12.5l6.5-6 3 2" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  console.error(`ImageIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ImageIcon;
