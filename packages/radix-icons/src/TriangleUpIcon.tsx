import * as React from 'react';
import { BaseIconProps } from './types';

interface TriangleUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const TriangleUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TriangleUpIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M11 9L7.5 4.5 4 9" fill={color} />
      </svg>
    );
  }

  console.error(`TriangleUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TriangleUpIcon;
