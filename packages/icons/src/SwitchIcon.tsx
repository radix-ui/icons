import * as React from 'react';
import { BaseIconProps } from './types';

interface SwitchIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const SwitchIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: SwitchIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect x=".5" y="3.5" width="14" height="8" rx="4" stroke={color} />
        <circle cx="10.5" cy="7.5" r="4" stroke={color} />
      </svg>
    );
  }

  console.error(
    `SwitchIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default SwitchIcon;
