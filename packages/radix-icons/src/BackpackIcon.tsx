import * as React from 'react';
import { BaseIconProps } from './types';

interface BackpackIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const BackpackIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: BackpackIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M6.5 10.5a6 6 0 1112 0v9.69a.31.31 0 01-.31.31H6.81a.31.31 0 01-.31-.31V10.5z"
          stroke={color}
        />
        <path
          d="M15 13.5h-5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5z"
          stroke={color}
        />
        <path
          d="M9.5 5c0-2.5 3-2.5 3-2.5s3 0 3 2.5m-6 5.5c0-3 3-3 3-3s3 0 3 3h-6z"
          stroke={color}
          strokeLinejoin="round"
        />
        <path
          d="M4.5 13A1.5 1.5 0 016 11.5h.5v7H6A1.5 1.5 0 014.5 17v-4zm14-1.5h.5a1.5 1.5 0 011.5 1.5v4a1.5 1.5 0 01-1.5 1.5h-.5v-7z"
          stroke={color}
        />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.5 9v2.5a1 1 0 001 1h6a1 1 0 001-1V9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v2A2.5 2.5 0 0110 9.5H5A2.5 2.5 0 012.5 7V5zM5.5 3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v1.5h-4V3z"
          stroke={color}
        />
        <path d="M7.5 8.5v2" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  console.error(`BackpackIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BackpackIcon;
