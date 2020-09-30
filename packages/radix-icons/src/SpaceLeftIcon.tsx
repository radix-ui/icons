import * as React from 'react';
import { IconProps } from './types';

export const SpaceLeftIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 2C7.44772 2 7 2.44772 7 3V12C7 12.5523 7.44772 13 8 13H11V12H8V3L11 3V2H8ZM3 3.75C3 3.47386 3.22386 3.25 3.5 3.25C3.77614 3.25 4 3.47386 4 3.75L4 11.25C4 11.5261 3.77614 11.75 3.5 11.75C3.22386 11.75 3 11.5261 3 11.25V3.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SpaceLeftIcon;
