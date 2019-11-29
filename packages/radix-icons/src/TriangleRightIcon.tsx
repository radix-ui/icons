import * as React from 'react';
import { BaseIconProps } from './types';

interface TriangleRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
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
        <g clipPath="url(#clip0)">
          <path d="M6 4l4.5 3.5L6 11" fill={color} />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill={color} d="M0 0h15v15H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  console.error(`TriangleRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TriangleRightIcon;
