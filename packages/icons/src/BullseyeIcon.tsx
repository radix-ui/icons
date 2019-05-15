import * as React from 'react';
import { BaseIconProps } from './types';

interface BullseyeIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const BullseyeIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: BullseyeIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12.5 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke={color} />
        <path d="M12.5 17.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" stroke={color} />
        <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
      </svg>
    );
  }

  console.error(
    `BullseyeIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default BullseyeIcon;
