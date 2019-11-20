import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderDottedIconProps extends BaseIconProps {
  size?: '25' | '15';
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
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.5 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9.5 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15.5 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM21.5 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          fill={color}
        />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="1.5" cy="7.5" r="1.5" fill={color} />
        <circle cx="13.5" cy="7.5" r="1.5" fill={color} />
        <circle cx="7.5" cy="7.5" r="1.5" fill={color} />
      </svg>
    );
  }

  console.error(`BorderDottedIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderDottedIcon;
