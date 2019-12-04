import * as React from 'react';
import { BaseIconProps } from './types';

interface MagnifyingGlassIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const MagnifyingGlassIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: MagnifyingGlassIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M10 6.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-.691 3.516a4.5 4.5 0 11.707-.707l2.838 2.837a.5.5 0 01-.708.708L9.31 10.016z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M10.016 9.309a4.5 4.5 0 10-.707.707l2.837 2.838a.5.5 0 00.708-.708L10.016 9.31z"
          fill={color}
          opacity=".15"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M10 6.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-.691 3.516a4.5 4.5 0 11.707-.707l2.838 2.837a.5.5 0 01-.708.708L9.31 10.016z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`MagnifyingGlassIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default MagnifyingGlassIcon;
