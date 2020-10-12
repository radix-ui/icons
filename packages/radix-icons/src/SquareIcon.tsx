import * as React from 'react';
import { IconProps } from './types';

export const SquareIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2 3V2H3H12H13V3V12V13H12H3H2V12V3ZM3 12H12V3H3V12Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SquareIcon;
