import * as React from 'react';
import { BaseIconProps } from './types';

interface PinTopIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const PinTopIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: PinTopIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M15.5 11.5l-3-4-3 4" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5 7.5v10M4.5 4.5h16" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  console.error(`PinTopIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default PinTopIcon;
