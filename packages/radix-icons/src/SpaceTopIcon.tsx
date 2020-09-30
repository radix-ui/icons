import * as React from 'react';
import { IconProps } from './types';

export const SpaceTopIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 11L12 8L3 8L3 11L2 11L2 8C2 7.44771 2.44772 7 3 7L12 7C12.5523 7 13 7.44772 13 8L13 11L12 11ZM11.25 3C11.5261 3 11.75 3.22386 11.75 3.5C11.75 3.77614 11.5261 4 11.25 4L3.75 4C3.47386 4 3.25 3.77614 3.25 3.5C3.25 3.22386 3.47386 3 3.75 3L11.25 3Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SpaceTopIcon;
