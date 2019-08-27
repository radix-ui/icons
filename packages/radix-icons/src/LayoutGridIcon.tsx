import * as React from 'react';
import { BaseIconProps } from './types';

interface LayoutGridIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const LayoutGridIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: LayoutGridIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M19 5.5H6a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5zM12.5 6v13M19 12.5H6"
          stroke={color}
        />
      </svg>
    );
  }

  console.error(`LayoutGridIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LayoutGridIcon;
