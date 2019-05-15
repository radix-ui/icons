import * as React from 'react';
import { BaseIconProps } from './types';

interface PositionStickyIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const PositionStickyIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: PositionStickyIconProps) => {
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
          d="M19.5 16.5l-7 4-7-4M12.5 12.5l7-4-7-4-7 4 7 4z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M5.5 12.5L8 14" stroke={color} strokeLinecap="round" />
        <path
          d="M19.5 12.5L17 14M10 15l2.5 1.5L15 15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `PositionStickyIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default PositionStickyIcon;
