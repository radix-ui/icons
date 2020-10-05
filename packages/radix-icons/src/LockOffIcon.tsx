import * as React from 'react';
import { IconProps } from './types';

export const LockOffIcon = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9 4.63604C9 3.76034 9.24219 3.10543 9.64323 2.6736C10.0393 2.24708 10.6458 1.97833 11.5014 1.97833C12.3574 1.97833 12.9631 2.24654 13.3582 2.67211C13.7584 3.10302 14 3.7571 14 4.63328V6.50002H15V4.63328C15 3.57899 14.7076 2.6556 14.091 1.99165C13.4695 1.32236 12.5758 0.978331 11.5014 0.978331C10.4268 0.978331 9.53252 1.32331 8.91049 1.99309C8.29339 2.65756 8 3.58151 8 4.63604V6.00003H1C0.447715 6.00003 0 6.44775 0 7.00003V13C0 13.5523 0.447715 14 1 14H10C10.5523 14 11 13.5523 11 13V7.00003C11 6.44775 10.5523 6.00003 10 6.00003H9V4.63604ZM1 7.00003H10V13H1V7.00003Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default LockOffIcon;
