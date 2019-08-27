import * as React from 'react';
import { BaseIconProps } from './types';

interface DiamondIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const DiamondIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DiamondIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4.5 9.5l3-5h10l3 5-8 11-8-11z" stroke={color} strokeLinejoin="round" />
        <path d="M13.5 4.5l2.5 5-3.5 11" stroke={color} strokeLinejoin="round" />
        <path d="M4.5 9.5h15.813" stroke={color} />
        <path d="M11.5 4.5L9 9.5l3.5 11" stroke={color} strokeLinejoin="round" />
      </svg>
    );
  }

  console.error(`DiamondIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DiamondIcon;
