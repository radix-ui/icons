import * as React from 'react';
import { BaseIconProps } from './types';

interface CircleIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const CircleIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CircleIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M1.127 7.5a6.373 6.373 0 1112.746 0 6.373 6.373 0 01-12.746 0zM7.5 2.077a5.423 5.423 0 100 10.846 5.423 5.423 0 000-10.846z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 13.398a5.898 5.898 0 100-11.796 5.898 5.898 0 000 11.796z"
          fill={color}
          opacity=".2"
        />
        <path
          d="M1.127 7.5a6.373 6.373 0 1112.746 0 6.373 6.373 0 01-12.746 0zM7.5 2.077a5.423 5.423 0 100 10.846 5.423 5.423 0 000-10.846z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CircleIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CircleIcon;
