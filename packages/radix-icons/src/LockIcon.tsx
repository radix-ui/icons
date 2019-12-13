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
          d="M7.5 1.125a3.5 3.5 0 00-3.5 3.5V6H3a1 1 0 00-1 1v6a1 1 0 001 1h9a1 1 0 001-1V7a1 1 0 00-1-1h-1V4.625a3.5 3.5 0 00-3.5-3.5zM10 6V4.625a2.5 2.5 0 00-5 0V6h5zM4 7H3v6h9V7H4z"
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
          d="M2.5 7a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v6a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V7z"
          fill={color}
          opacity=".2"
        />
        <path
          d="M7.5 1.125a3.5 3.5 0 00-3.5 3.5V6H3a1 1 0 00-1 1v6a1 1 0 001 1h9a1 1 0 001-1V7a1 1 0 00-1-1h-1V4.625a3.5 3.5 0 00-3.5-3.5zM10 6V4.625a2.5 2.5 0 00-5 0V6h5zM4 7H3v6h9V7H4z"
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
