import * as React from 'react';
import { BaseIconProps } from './types';

interface ArrowLeftIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const ArrowLeftIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: ArrowLeftIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M10.5 6.5l-6 6 6 6" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 12.5h16" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M6.5 3.5l-4 4 4 4" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 7.5h10" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  console.error(`ArrowLeftIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ArrowLeftIcon;
