import * as React from 'react';
import { BaseIconProps } from './types';

interface FoldersIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const FoldersIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: FoldersIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M19 8.5H6A1.5 1.5 0 004.5 10v9A1.5 1.5 0 006 20.5h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0019 8.5zM5.5 8A1.5 1.5 0 017 6.5h11A1.5 1.5 0 0119.5 8v.5h-14V8zM6.5 6A1.5 1.5 0 018 4.5h9A1.5 1.5 0 0118.5 6v.5h-12V6z"
          stroke={color}
        />
        <path
          d="M9.5 17.5l6-6M15.5 17.5l-6-6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FoldersIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default FoldersIcon;
