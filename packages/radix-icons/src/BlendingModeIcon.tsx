import * as React from 'react';
import { BaseIconProps } from './types';

interface BlendingModeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const BlendingModeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BlendingModeIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3 9c0-2.5 1.5-4.75 4.5-7.5 3 2.75 4.5 5 4.5 7.5a4.5 4.5 0 11-9 0zm8 0H4c0-1.888 1.027-3.728 3.5-6.126C9.973 5.272 11 7.112 11 9z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BlendingModeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BlendingModeIcon;
