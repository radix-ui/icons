import * as React from 'react';
import { BaseIconProps } from './types';

interface AlignStretchIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const AlignStretchIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: AlignStretchIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M20.5 4.5h-16M20.5 20.5h-16" stroke={color} strokeLinecap="round" />
        <path d="M14.5 4.5h-4v16h4v-16z" stroke={color} />
      </svg>
    );
  }

  console.error(`AlignStretchIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default AlignStretchIcon;
