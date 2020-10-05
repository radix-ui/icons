import * as React from 'react';
import { IconProps } from './types';

export const CheckboxIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="15"
      height="15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      {...props}
    >
      <rect x="2.5" y="2.5" width="10" height="10" rx=".5" stroke={color} />
      <path
        d="M9.9375 5.22815L6.67822 9.97722L4.8125 7.72815"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckboxIcon;
