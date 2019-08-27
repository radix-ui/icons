import * as React from 'react';
import { BaseIconProps } from './types';

interface VehicleCarIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const VehicleCarIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: VehicleCarIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M15.5 18.5v2h3v-2m-14-6.86v5.86a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5.86a.999.999 0 0 0-.038-.275l-1.755-6.14a1 1 0 0 0-.961-.725H7.254a1 1 0 0 0-.961.725l-1.755 6.14a1 1 0 0 0-.038.275v0zm3-.14h10-10zm-1 7v2h3v-2h-3z"
          stroke={color}
          strokeLinejoin="round"
        />
        <path
          d="M9 16.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM16 16.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
          stroke={color}
        />
        <path d="M21.5 9.5H20m-15 0H3.5 5z" stroke={color} strokeLinejoin="round" />
      </svg>
    );
  }

  console.error(`VehicleCarIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default VehicleCarIcon;
