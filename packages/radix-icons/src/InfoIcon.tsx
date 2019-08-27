import * as React from 'react';
import { BaseIconProps } from './types';

interface InfoIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const InfoIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: InfoIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="7.5" cy="7.5" r="6" stroke={color} />
        <path d="M7.5 10.5v-4" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7.5" cy="4.5" r=".5" fill={color} />
      </svg>
    );
  }

  console.error(`InfoIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default InfoIcon;
