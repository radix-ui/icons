import * as React from 'react';
import { BaseIconProps } from './types';

interface TriangleLeftIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const TriangleLeftIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TriangleLeftIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M9 4v7L4.5 7.5 9 4z" fill={color} />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M9 4v7L4.5 7.5 9 4z" fill={color} opacity=".2" />
        <path
          d="M9.44 3.102A1 1 0 0110 4v7a1 1 0 01-1.614.79l-4.5-3.5a1 1 0 010-1.58l4.5-3.5a1 1 0 011.053-.108zM9 5.267V4l-1 .778-2.686 2.089L4.5 7.5l.814.633L8 10.223 9 11V5.267z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TriangleLeftIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TriangleLeftIcon;
