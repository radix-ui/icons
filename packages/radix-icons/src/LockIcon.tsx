import * as React from 'react';
import { BaseIconProps } from './types';

interface LockIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const LockIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: LockIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M10 5.5V6H5v-.5a2.5 2.5 0 015 0zM4 6v-.5a3.5 3.5 0 117 0V6h1a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1h1zm7 1H3v5h9V7h-1z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2 7a1 1 0 011-1h9a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1V7z"
          fill={color}
          opacity=".15"
        />
        <path
          d="M10 5.5V6H5v-.5a2.5 2.5 0 015 0zM4 6v-.5a3.5 3.5 0 117 0V6h1a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1h1zm7 1H3v5h9V7h-1z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`LockIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LockIcon;
