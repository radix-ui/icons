import * as React from 'react';
import { BaseIconProps } from './types';

interface DeviceMobilePortraitIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const DeviceMobilePortraitIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DeviceMobilePortraitIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M16 4.5H9A1.5 1.5 0 0 0 7.5 6v13A1.5 1.5 0 0 0 9 20.5h7a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 16 4.5z"
          stroke={color}
        />
        <path d="M12.5 18a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill={color} />
      </svg>
    );
  }

  console.error(`DeviceMobilePortraitIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DeviceMobilePortraitIcon;
