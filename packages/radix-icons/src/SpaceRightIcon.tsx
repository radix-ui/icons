import * as React from 'react';
import { IconProps } from './types';

export const SpaceRightIcon = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4 3H7V12H4V13H7C7.55228 13 8 12.5523 8 12V3C8 2.44772 7.55228 2 7 2H4V3ZM12 3.75C12 3.47386 11.7761 3.25 11.5 3.25C11.2239 3.25 11 3.47386 11 3.75L11 11.25C11 11.5261 11.2239 11.75 11.5 11.75C11.7761 11.75 12 11.5261 12 11.25L12 3.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SpaceRightIcon;
