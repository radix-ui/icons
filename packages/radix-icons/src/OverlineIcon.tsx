import * as React from 'react';
import { IconProps } from './types';

export const OverlineIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M3.4999 1.10001C3.27899 1.10001 3.0999 1.27909 3.0999 1.50001C3.0999 1.72092 3.27899 1.90001 3.4999 1.90001H11.4999C11.7208 1.90001 11.8999 1.72092 11.8999 1.50001C11.8999 1.27909 11.7208 1.10001 11.4999 1.10001H3.4999ZM5 4.25001C5 3.97387 4.77614 3.75001 4.5 3.75001C4.22385 3.75001 4 3.97387 4 4.25001V9.55001C4 11.483 5.567 13.05 7.5 13.05C9.43299 13.05 11 11.483 11 9.55001V4.25001C11 3.97387 10.7761 3.75001 10.5 3.75001C10.2239 3.75001 10 3.97387 10 4.25001V9.55001C10 10.9307 8.88071 12.05 7.5 12.05C6.11929 12.05 5 10.9307 5 9.55001V4.25001Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default OverlineIcon;
