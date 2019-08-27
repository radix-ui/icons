import * as React from 'react';
import { BaseIconProps } from './types';

interface FolderIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const FolderIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: FolderIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M19 6.5H6A1.5 1.5 0 0 0 4.5 8v9A1.5 1.5 0 0 0 6 18.5h13a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 19 6.5z"
          stroke={color}
        />
        <path
          d="M9.5 15.5l6-6M15.5 15.5l-6-6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FolderIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default FolderIcon;
