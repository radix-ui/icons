import * as React from 'react';
import { IconProps } from './types';

export const ActivityIcon = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M0 2.5C0 2.22386 0.223858 2 0.5 2H2.5C2.77614 2 3 2.22386 3 2.5C3 2.77614 2.77614 3 2.5 3H0.5C0.223858 3 0 2.77614 0 2.5ZM5 2.5C5 2.22386 5.22386 2 5.5 2H14.5C14.7761 2 15 2.22386 15 2.5C15 2.77614 14.7761 3 14.5 3H5.5C5.22386 3 5 2.77614 5 2.5ZM5 5.5C5 5.22386 5.22386 5 5.5 5H9.5C9.77614 5 10 5.22386 10 5.5C10 5.77614 9.77614 6 9.5 6H5.5C5.22386 6 5 5.77614 5 5.5ZM0 8.5C0 8.22386 0.223858 8 0.5 8H2.5C2.77614 8 3 8.22386 3 8.5C3 8.77614 2.77614 9 2.5 9H0.5C0.223858 9 0 8.77614 0 8.5ZM5 8.5C5 8.22386 5.22386 8 5.5 8H12.5C12.7761 8 13 8.22386 13 8.5C13 8.77614 12.7761 9 12.5 9H5.5C5.22386 9 5 8.77614 5 8.5ZM5 11.5C5 11.2239 5.22386 11 5.5 11H9.5C9.77614 11 10 11.2239 10 11.5C10 11.7761 9.77614 12 9.5 12H5.5C5.22386 12 5 11.7761 5 11.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ActivityIcon;
