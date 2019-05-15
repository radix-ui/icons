import * as React from 'react';
import { BaseIconProps } from './types';

interface AlignEndIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const AlignEndIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: AlignEndIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M20.5 20.5h-16" stroke={color} strokeLinecap="round" />
        <path d="M16.5 12.5h-8v4h8v-4zM16.5 16.5h-8v4h8v-4z" stroke={color} />
      </svg>
    );
  }

  console.error(
    `AlignEndIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default AlignEndIcon;
