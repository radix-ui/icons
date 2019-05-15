import * as React from 'react';
import { BaseIconProps } from './types';

interface HamburgerIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const HamburgerIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: HamburgerIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M4 18.5h17M4 12.5h17M4 6.5h17" stroke={color} />
      </svg>
    );
  }

  console.error(
    `HamburgerIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default HamburgerIcon;
