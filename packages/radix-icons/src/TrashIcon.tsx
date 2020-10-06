import * as React from 'react';
import { IconProps } from './types';

export const TrashIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M5.5 2C5.22386 2 5 2.22386 5 2.5C5 2.77614 5.22386 3 5.5 3H9.5C9.77614 3 10 2.77614 10 2.5C10 2.22386 9.77614 2 9.5 2H5.5ZM3 4.5C3 4.22386 3.22386 4 3.5 4H5H10H11.5C11.7761 4 12 4.22386 12 4.5C12 4.77614 11.7761 5 11.5 5H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V5H3.5C3.22386 5 3 4.77614 3 4.5ZM5 5H10V12H5V5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default TrashIcon;
