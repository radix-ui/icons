import * as React from 'react';
import { BaseIconProps } from './types';

interface CircleSplitAngledIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const CircleSplitAngledIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: CircleSplitAngledIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12.5 20.5a8 8 0 100-16 8 8 0 000 16zM7 18L18 7" stroke={color} />
      </svg>
    );
  }

  console.error(`CircleSplitAngledIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CircleSplitAngledIcon;
