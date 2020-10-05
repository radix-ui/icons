import * as React from 'react';
import { IconProps } from './types';

export const CaretUpIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="15"
      height="15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        d="M4.1818 8.81819C4.00607 8.64245 4.00607 8.35753 4.1818 8.18179L7.1818 5.18179C7.2662 5.0974 7.38066 5.04999 7.5 5.04999C7.61935 5.04999 7.73381 5.0974 7.8182 5.18179L10.8182 8.18179C10.9939 8.35753 10.9939 8.64245 10.8182 8.81819C10.6425 8.99392 10.3575 8.99392 10.1818 8.81819L7.5 6.13638L4.8182 8.81819C4.64247 8.99392 4.35754 8.99392 4.1818 8.81819Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CaretUpIcon;
