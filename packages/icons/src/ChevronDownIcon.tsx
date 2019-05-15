import * as React from 'react';
import { BaseIconProps } from './types';

interface ChevronDownIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const ChevronDownIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: ChevronDownIconProps) => {
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
          d="M18.5 9.5l-6 6-6-6"
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
          d="M11.5 5.5l-4 4-4-4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `ChevronDownIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default ChevronDownIcon;
