import * as React from 'react';
import { BaseIconProps } from './types';

interface TriangleLeftIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
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
        <g clipPath="url(#clip0)">
          <path d="M9 11L4.5 7.5 9 4" fill={color} />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill={color} transform="rotate(-180 7.5 7.5)" d="M0 0h15v15H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  console.error(`TriangleLeftIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TriangleLeftIcon;
