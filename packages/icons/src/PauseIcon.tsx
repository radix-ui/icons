import * as React from 'react';
import { BaseIconProps } from './types';

interface PauseIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const PauseIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: PauseIconProps) => {
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
          d="M9 5.5H8A1.5 1.5 0 0 0 6.5 7v11A1.5 1.5 0 0 0 8 19.5h1a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 9 5.5zM17 5.5h-1A1.5 1.5 0 0 0 14.5 7v11a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 17 5.5z"
          stroke={color}
        />
      </svg>
    );
  }

  console.error(
    `PauseIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default PauseIcon;
