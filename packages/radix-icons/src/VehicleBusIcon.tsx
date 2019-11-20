import * as React from 'react';
import { BaseIconProps } from './types';

interface VehicleBusIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const VehicleBusIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: VehicleBusIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M15.5 20.5v2h3v-2m-9-16h6-6zm-3 16v2h3v-2h-3z"
          stroke={color}
          strokeLinejoin="round"
        />
        <path
          d="M9 18.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM16 18.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          stroke={color}
        />
        <path d="M2.5 8.5v-2h20v2" stroke={color} strokeLinejoin="round" />
        <path d="M4.5 6A3.5 3.5 0 018 2.5h9A3.5 3.5 0 0120.5 6v14.5h-16V6z" stroke={color} />
        <path d="M5 13.5h15" stroke={color} strokeLinejoin="round" />
      </svg>
    );
  }

  console.error(`VehicleBusIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default VehicleBusIcon;
