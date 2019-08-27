import * as React from 'react';
import { BaseIconProps } from './types';

interface PinLeftIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const PinLeftIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: PinLeftIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M11.5 9.5l-4 3 4 3" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 12.5h10M4.5 4.5v16" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  console.error(`PinLeftIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default PinLeftIcon;
