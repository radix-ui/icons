import * as React from 'react';
import { IconProps } from './types';

export const FontRomanIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M4.79999 3.50017C4.79999 3.25164 5.00146 3.05017 5.24999 3.05017H9.74999C9.99852 3.05017 10.2 3.25164 10.2 3.50017C10.2 3.7487 9.99852 3.95017 9.74999 3.95017H8.09999V11.05H9.75C9.99853 11.05 10.2 11.2515 10.2 11.5C10.2 11.7486 9.99853 11.95 9.75 11.95H5.25C5.00147 11.95 4.8 11.7486 4.8 11.5C4.8 11.2515 5.00147 11.05 5.25 11.05H6.89999V3.95017H5.24999C5.00146 3.95017 4.79999 3.7487 4.79999 3.50017Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default FontRomanIcon;
