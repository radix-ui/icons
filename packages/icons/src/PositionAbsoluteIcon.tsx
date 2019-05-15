import * as React from 'react';
import { BaseIconProps } from './types';

interface PositionAbsoluteIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const PositionAbsoluteIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: PositionAbsoluteIconProps) => {
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
          d="M8 14l-2.5 1.5 7 4 7-4L17 14M12.5 13.5l7-4-7-4-7 4 7 4z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `PositionAbsoluteIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default PositionAbsoluteIcon;
