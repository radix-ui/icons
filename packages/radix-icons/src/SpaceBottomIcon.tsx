import * as React from 'react';
import { IconProps } from './types';

export const SpaceBottomIcon = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3 4V7L12 7V4H13V7C13 7.55228 12.5523 8 12 8H3C2.44772 8 2 7.55228 2 7V4H3ZM3.75 12C3.47386 12 3.25 11.7761 3.25 11.5C3.25 11.2239 3.47386 11 3.75 11H11.25C11.5261 11 11.75 11.2239 11.75 11.5C11.75 11.7761 11.5261 12 11.25 12H3.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SpaceBottomIcon;
