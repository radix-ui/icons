import * as React from 'react';
import { BaseIconProps } from './types';

interface LayoutGridGapIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const LayoutGridGapIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: LayoutGridGapIconProps) => {
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
          d="M10.5 5.5h-5v5h5v-5zM10.5 14.5h-5v5h5v-5zM19.5 14.5h-5v5h5v-5zM19.5 5.5h-5v5h5v-5z"
          stroke={color}
        />
      </svg>
    );
  }

  console.error(
    `LayoutGridGapIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default LayoutGridGapIcon;
