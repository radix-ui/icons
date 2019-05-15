import * as React from 'react';
import { BaseIconProps } from './types';

interface SquareIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const SquareIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: SquareIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M2.5 12.5v-10h10v10h-10z" stroke={color} />
      </svg>
    );
  }

  console.error(
    `SquareIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default SquareIcon;
