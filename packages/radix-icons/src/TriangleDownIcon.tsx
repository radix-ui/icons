import * as React from 'react';
import { BaseIconProps } from './types';

interface TriangleDownIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const TriangleDownIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TriangleDownIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M11 6l-3.5 4.5L4 6" fill={color} />
      </svg>
    );
  }

  console.error(`TriangleDownIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TriangleDownIcon;
