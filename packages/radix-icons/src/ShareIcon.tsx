import * as React from 'react';
import { BaseIconProps } from './types';

interface ShareIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const ShareIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: ShareIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M18.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18.5 20.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6.5 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
          stroke={color}
        />
        <path
          d="M8.5 11.5l8-4M16.5 17.5l-8-4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ShareIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ShareIcon;
