import * as React from 'react';
import { BaseIconProps } from './types';

interface LayoutIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const LayoutIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: LayoutIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="1.5" y="4.5" width="12" height="6" rx=".5" stroke={color} />
        <path d="M5.5 4.5v6M9.5 4.5v6" stroke={color} />
      </svg>
    );
  }

  console.error(`LayoutIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LayoutIcon;
