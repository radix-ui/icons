import * as React from 'react';
import { BaseIconProps } from './types';

interface DirectionColumnIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const DirectionColumnIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DirectionColumnIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M20.5 14.5l-3 4-3-4" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 6.5V18" stroke={color} strokeLinecap="round" />
        <path
          d="M9.5 20V5a.5.5 0 00-.5-.5H5a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h4a.5.5 0 00.5-.5zM9.5 16.5h-5m5-8h-5 5zm0 4h-5 5z"
          stroke={color}
        />
      </svg>
    );
  }

  console.error(`DirectionColumnIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DirectionColumnIcon;
