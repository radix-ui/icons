import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretLeftIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const CaretLeftIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: CaretLeftIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M9 10L6.5 7.5 9 5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  console.error(`CaretLeftIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CaretLeftIcon;
