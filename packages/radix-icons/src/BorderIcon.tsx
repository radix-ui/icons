import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const BorderIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: BorderIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path stroke={color} d="M2.5 2.5h10v10h-10z" />
        <path stroke={color} d="M3.5 3.5h8v8h-8z" />
      </svg>
    );
  }

  console.error(`BorderIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderIcon;
