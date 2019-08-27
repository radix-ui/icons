import * as React from 'react';
import { BaseIconProps } from './types';

interface ResetIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const ResetIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: ResetIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3 2.5a.5.5 0 0 0-1 0h1zm-.5 3H2a.5.5 0 0 0 .5.5v-.5zm3 .5a.5.5 0 0 0 0-1v1zM2 2.5v3h1v-3H2zM2.5 6h3V5h-3v1z"
          fill={color}
        />
        <path
          d="M7.5 12.5c3.05 0 5-2.5 5-5s-1.95-5-5-5C5 2.5 4 4 2.5 5.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ResetIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ResetIcon;
