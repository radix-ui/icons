import * as React from 'react';
import { BaseIconProps } from './types';

interface DotEmptyIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const DotEmptyIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: DotEmptyIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="7.5" cy="7.504" r="2.125" stroke={color} />
      </svg>
    );
  }

  console.error(`DotEmptyIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DotEmptyIcon;
