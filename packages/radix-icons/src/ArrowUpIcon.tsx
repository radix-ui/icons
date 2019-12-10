import * as React from 'react';
import { BaseIconProps } from './types';

interface ArrowUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const ArrowUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ArrowUpIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.146 2.146a.5.5 0 01.708 0l4 4a.5.5 0 01-.708.708L8 3.707V12.5a.5.5 0 01-1 0V3.707L3.854 6.854a.5.5 0 11-.708-.708l4-4z"
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
          d="M6.793 1.793a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L8.5 4.914V12.5a1 1 0 11-2 0V4.914L4.207 7.207a1 1 0 01-1.414-1.414l4-4z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.146 2.146a.5.5 0 01.708 0l4 4a.5.5 0 01-.708.708L8 3.707V12.5a.5.5 0 01-1 0V3.707L3.854 6.854a.5.5 0 11-.708-.708l4-4z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ArrowUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ArrowUpIcon;
