import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderDottedIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const BorderDottedIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: BorderDottedIconProps) => {
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
          d="M3.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM9.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM15.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM21.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
          fill={color}
        />
      </svg>
    );
  }

  console.error(
    `BorderDottedIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default BorderDottedIcon;
