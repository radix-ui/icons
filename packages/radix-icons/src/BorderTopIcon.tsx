import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderTopIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const BorderTopIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: BorderTopIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path stroke={color} d="M2.5 2.5h10v10h-10z" />
        <path fill={color} d="M3 3h9v1H3z" />
      </svg>
    );
  }

  console.error(`BorderTopIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderTopIcon;
