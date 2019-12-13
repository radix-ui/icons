import * as React from 'react';
import { BaseIconProps } from './types';

interface TriangleUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const TriangleUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TriangleUpIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 9h7L7.5 4.5 4 9z" fill={color} />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 9h7L7.5 4.5 4 9z" fill={color} opacity=".2" />
        <path
          d="M3.102 9.44A1 1 0 004 10h7a1 1 0 00.79-1.614l-3.5-4.5a1 1 0 00-1.58 0l-3.5 4.5a1 1 0 00-.108 1.053zM5.267 9H4l.778-1 2.089-2.686L7.5 4.5l.633.814L10.223 8 11 9H5.267z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TriangleUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TriangleUpIcon;
