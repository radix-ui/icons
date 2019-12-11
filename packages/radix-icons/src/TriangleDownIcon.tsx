import * as React from 'react';
import { BaseIconProps } from './types';

interface TriangleDownIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const TriangleDownIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TriangleDownIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 6h7l-3.5 4.5L4 6z" fill={color} />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 6h7l-3.5 4.5L4 6z" fill={color} opacity=".2" />
        <path
          d="M3.102 5.56A1 1 0 014 5h7a1 1 0 01.79 1.614l-3.5 4.5a1 1 0 01-1.58 0l-3.5-4.5a1 1 0 01-.108-1.053zM5.267 6H4l.778 1 2.089 2.686.633.814.633-.814L10.223 7 11 6H5.267z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TriangleDownIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TriangleDownIcon;
