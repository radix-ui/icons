import * as React from 'react';
import { BaseIconProps } from './types';

interface DirectionRowIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const DirectionRowIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DirectionRowIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M14.833 14.5l3.667 3-3.667 3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M6.5 17.5h11.267" stroke={color} strokeLinecap="round" />
        <path
          d="M20 4.5H5a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V5a.5.5 0 00-.5-.5zM16.5 4.5v5m-8-5v5-5zm4 0v5-5z"
          stroke={color}
        />
      </svg>
    );
  }

  console.error(`DirectionRowIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DirectionRowIcon;
