import * as React from 'react';
import { IconProps } from './types';

export const JustifyEndIcon = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.95 1.4995C13.95 1.25097 13.7485 1.0495 13.5 1.0495C13.2514 1.0495 13.05 1.25097 13.05 1.4995L13.05 13.4995C13.05 13.748 13.2514 13.9495 13.5 13.9495C13.7485 13.9495 13.95 13.748 13.95 13.4995L13.95 1.4995ZM3.99997 5.99994L11 5.99994L11 8.99994L3.99997 8.99994L3.99997 5.99994ZM11.25 4.99994C11.6642 4.99994 12 5.33573 12 5.74994L12 9.24994C12 9.66415 11.6642 9.99994 11.25 9.99994L3.74997 9.99994C3.33576 9.99994 2.99997 9.66415 2.99997 9.24994L2.99997 5.74994C2.99998 5.33572 3.33576 4.99994 3.74998 4.99994L11.25 4.99994Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default JustifyEndIcon;
