import * as React from 'react';
import { BaseIconProps } from './types';

interface AlignStartIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const AlignStartIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: AlignStartIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M20.5 4.5h-16" stroke={color} strokeLinecap="round" />
        <path d="M16.5 4.5h-8v4h8v-4zM16.5 8.5h-8v4h8v-4z" stroke={color} />
      </svg>
    );
  }

  console.error(`AlignStartIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default AlignStartIcon;
