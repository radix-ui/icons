import * as React from 'react';
import { BaseIconProps } from './types';

interface CameraIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const CameraIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: CameraIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12.5 17.5a4 4 0 100-8 4 4 0 000 8z" stroke={color} />
        <path
          d="M4.5 17.5V9.654a2 2 0 012-2h1.564a1 1 0 00.733-.32l1.406-1.514a1 1 0 01.733-.32h2.747a1 1 0 01.71.296l1.547 1.562a1 1 0 00.71.296h1.85a2 2 0 012 2V17.5a2 2 0 01-2 2h-12a2 2 0 01-2-2z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`CameraIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CameraIcon;
