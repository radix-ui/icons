import * as React from 'react';
import { BaseIconProps } from './types';

interface CircleSplitIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const CircleSplitIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: CircleSplitIconProps) => {
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
          d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12.5 20V5"
          stroke={color}
        />
      </svg>
    );
  }

  console.error(
    `CircleSplitIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default CircleSplitIcon;
