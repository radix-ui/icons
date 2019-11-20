import * as React from 'react';
import { BaseIconProps } from './types';

interface CropIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const CropIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: CropIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8.5 4.5v11a1 1 0 001 1h11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 8.5h11a1 1 0 011 1v11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`CropIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CropIcon;
