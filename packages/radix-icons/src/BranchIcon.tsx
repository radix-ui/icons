import * as React from 'react';
import { BaseIconProps } from './types';

interface BranchIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const BranchIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: BranchIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M6.5 20.5V9" stroke={color} strokeLinecap="round" />
        <path
          d="M18.5 16.5v-8a2 2 0 00-2-2h-8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 8.5a2 2 0 100-4 2 2 0 000 4zM18.5 20.5a2 2 0 100-4 2 2 0 000 4z"
          stroke={color}
        />
      </svg>
    );
  }

  console.error(`BranchIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BranchIcon;
