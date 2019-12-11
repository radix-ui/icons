import * as React from 'react';
import { BaseIconProps } from './types';

interface TriangleRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const TriangleRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TriangleRightIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M6 11V4l4.5 3.5L6 11z" fill={color} />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M6 11V4l4.5 3.5L6 11z" fill={color} opacity=".2" />
        <path
          d="M5.56 11.898A1 1 0 015 11V4a1 1 0 011.614-.79l4.5 3.5a1 1 0 010 1.58l-4.5 3.5a1 1 0 01-1.053.108zM6 9.733V11l1-.778 2.686-2.089.814-.633-.814-.633L7 4.777 6 4V9.733z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TriangleRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TriangleRightIcon;
