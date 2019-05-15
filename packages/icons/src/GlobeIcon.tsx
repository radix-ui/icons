import * as React from 'react';
import { BaseIconProps } from './types';

interface GlobeIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const GlobeIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: GlobeIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="12.5" cy="12.5" r="8" stroke={color} />
        <path
          d="M5.5 16c4.375 1.333 9.625 1.333 14 0M5.5 9c4.5-1.333 9.5-1.333 14 0M12.5 20.5c-6-2.5-6-13.5 0-16M12.5 20.5c6-2.5 6-13.5 0-16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M4.5 12.5h16M12.5 4.5v16" stroke={color} />
      </svg>
    );
  }

  console.error(
    `GlobeIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default GlobeIcon;
