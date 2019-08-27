import * as React from 'react';
import { BaseIconProps } from './types';

interface DeviceTabletPortraitIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const DeviceTabletPortraitIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DeviceTabletPortraitIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M17 4.5H8A1.5 1.5 0 0 0 6.5 6v13A1.5 1.5 0 0 0 8 20.5h9a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 17 4.5z"
          stroke={color}
        />
        <path d="M12.5 18a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill={color} />
      </svg>
    );
  }

  console.error(`DeviceTabletPortraitIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DeviceTabletPortraitIcon;
