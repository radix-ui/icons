import * as React from 'react';
import { IconProps } from './types';

export const CrossCircledIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0.877045 7.49988C0.877045 3.84219 3.84219 0.877045 7.49988 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49988 14.1227C3.84219 14.1227 0.877045 11.1575 0.877045 7.49988ZM7.49988 1.82704C4.36686 1.82704 1.82704 4.36686 1.82704 7.49988C1.82704 10.6329 4.36686 13.1727 7.49988 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49988 1.82704ZM9.85355 5.14644C10.0488 5.3417 10.0488 5.65829 9.85355 5.85355L8.2071 7.49999L9.85355 9.14644C10.0488 9.3417 10.0488 9.65829 9.85355 9.85355C9.65829 10.0488 9.3417 10.0488 9.14644 9.85355L7.49999 8.2071L5.85355 9.85355C5.65829 10.0488 5.3417 10.0488 5.14644 9.85355C4.95118 9.65829 4.95118 9.3417 5.14644 9.14644L6.79289 7.49999L5.14644 5.85355C4.95118 5.65829 4.95118 5.3417 5.14644 5.14644C5.3417 4.95118 5.65829 4.95118 5.85355 5.14644L7.49999 6.79289L9.14644 5.14644C9.3417 4.95118 9.65829 4.95118 9.85355 5.14644Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CrossCircledIcon;
