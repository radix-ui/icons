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
          d="M3 9c0-2.5 1.5-4.75 4.5-7.5 3 2.75 4.5 5 4.5 7.5a4.5 4.5 0 11-9 0zm7.952-.697c-1.279-.482-2.664.16-3.962.76-1.057.488-2.056.95-2.893.759A3.51 3.51 0 014 9c0-1.888 1.027-3.728 3.5-6.126 2.168 2.102 3.225 3.776 3.452 5.43z"
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
