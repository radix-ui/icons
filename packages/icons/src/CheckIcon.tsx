import * as React from 'react';
import { BaseIconProps } from './types';

interface CheckIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const CheckIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: CheckIconProps) => {
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
          d="M20.5 5.5l-10 14-6-5"
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
          d="M12.5 3.5l-6 8-4-3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `CheckIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default CheckIcon;
