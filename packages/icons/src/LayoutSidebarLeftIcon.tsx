import * as React from 'react';
import { BaseIconProps } from './types';

interface LayoutSidebarLeftIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const LayoutSidebarLeftIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: LayoutSidebarLeftIconProps) => {
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
          d="M19 6.5H6A1.5 1.5 0 0 0 4.5 8v9A1.5 1.5 0 0 0 6 18.5h13a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 19 6.5zM9.5 7v11"
          stroke={color}
        />
      </svg>
    );
  }

  console.error(
    `LayoutSidebarLeftIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default LayoutSidebarLeftIcon;
