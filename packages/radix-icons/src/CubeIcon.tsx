import * as React from 'react';
import { BaseIconProps } from './types';

interface CubeIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const CubeIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: CubeIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.5 8v8.833l8 4.667 8-4.667V8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 12.5l8-4.5-8-4.5-8 4.5 8 4.5z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12.5 12.5v9" stroke={color} />
      </svg>
    );
  }

  console.error(`CubeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CubeIcon;
