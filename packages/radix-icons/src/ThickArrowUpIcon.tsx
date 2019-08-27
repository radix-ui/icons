import * as React from 'react';
import { BaseIconProps } from './types';

interface ThickArrowUpIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const ThickArrowUpIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: ThickArrowUpIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M12.5 4.5l8 11h-5v5h-6v-5h-5l8-11z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 2.5l5 7h-3v3h-4v-3h-3l5-7z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ThickArrowUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ThickArrowUpIcon;
