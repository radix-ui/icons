import * as React from 'react';
import { BaseIconProps } from './types';

interface ThickArrowDownIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const ThickArrowDownIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: ThickArrowDownIconProps) => {
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
          d="M15.5 4.5h-6v5h-5l8 11 8-11h-5v-5z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M9.5 2.5h-4v3h-3l5 7 5-7h-3v-3z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `ThickArrowDownIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default ThickArrowDownIcon;
