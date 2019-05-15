import * as React from 'react';
import { BaseIconProps } from './types';

interface VehicleTrainIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const VehicleTrainIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: VehicleTrainIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M9 16.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM16 16.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
          stroke={color}
        />
        <path
          d="M4.5 6A3.5 3.5 0 0 1 8 2.5h9A3.5 3.5 0 0 1 20.5 6v12.5h-16V6z"
          stroke={color}
        />
        <path
          d="M19.5 22.5l-3-4m-11 4l3-4-3 4z"
          stroke={color}
          strokeLinejoin="round"
        />
        <path d="M7.5 5.5h10v6h-10v-6z" stroke={color} />
      </svg>
    );
  }

  console.error(
    `VehicleTrainIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default VehicleTrainIcon;
