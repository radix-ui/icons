import * as React from 'react';
import { BaseIconProps } from './types';

interface ZoomOutIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const ZoomOutIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: ZoomOutIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M10.5 16.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" stroke={color} />
        <path d="M20.5 20.5L15 15M7.5 10.5h6" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  console.error(`ZoomOutIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ZoomOutIcon;
