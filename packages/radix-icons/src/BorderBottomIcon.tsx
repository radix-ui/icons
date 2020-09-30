import * as React from 'react';
import { IconProps } from './types';

export const BorderBottomIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.5 1C7.22386 1 7 1.22386 7 1.5C7 1.77614 7.22386 2 7.5 2C7.77614 2 8 1.77614 8 1.5C8 1.22386 7.77614 1 7.5 1ZM7 3.5C7 3.22386 7.22386 3 7.5 3C7.77614 3 8 3.22386 8 3.5C8 3.77614 7.77614 4 7.5 4C7.22386 4 7 3.77614 7 3.5ZM7 5.5C7 5.22386 7.22386 5 7.5 5C7.77614 5 8 5.22386 8 5.5C8 5.77614 7.77614 6 7.5 6C7.22386 6 7 5.77614 7 5.5ZM14 13.25V14.75L1 14.75V13.25L14 13.25ZM13.5 5C13.2239 5 13 5.22386 13 5.5C13 5.77614 13.2239 6 13.5 6C13.7761 6 14 5.77614 14 5.5C14 5.22386 13.7761 5 13.5 5ZM13.5 3C13.2239 3 13 3.22386 13 3.5C13 3.77614 13.2239 4 13.5 4C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM13 7.5C13 7.22386 13.2239 7 13.5 7C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8C13.2239 8 13 7.77614 13 7.5ZM13.5 1C13.2239 1 13 1.22386 13 1.5C13 1.77614 13.2239 2 13.5 2C13.7761 2 14 1.77614 14 1.5C14 1.22386 13.7761 1 13.5 1ZM5 7.5C5 7.22386 5.22386 7 5.5 7C5.77614 7 6 7.22386 6 7.5C6 7.77614 5.77614 8 5.5 8C5.22386 8 5 7.77614 5 7.5ZM5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2C5.77614 2 6 1.77614 6 1.5C6 1.22386 5.77614 1 5.5 1ZM3 7.5C3 7.22386 3.22386 7 3.5 7C3.77614 7 4 7.22386 4 7.5C4 7.77614 3.77614 8 3.5 8C3.22386 8 3 7.77614 3 7.5ZM3.5 1C3.22386 1 3 1.22386 3 1.5C3 1.77614 3.22386 2 3.5 2C3.77614 2 4 1.77614 4 1.5C4 1.22386 3.77614 1 3.5 1ZM9 7.5C9 7.22386 9.22386 7 9.5 7C9.77614 7 10 7.22386 10 7.5C10 7.77614 9.77614 8 9.5 8C9.22386 8 9 7.77614 9 7.5ZM9.5 1C9.22386 1 9 1.22386 9 1.5C9 1.77614 9.22386 2 9.5 2C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 1C11.2239 1 11 1.22386 11 1.5C11 1.77614 11.2239 2 11.5 2C11.7761 2 12 1.77614 12 1.5C12 1.22386 11.7761 1 11.5 1ZM7 9.5C7 9.22386 7.22386 9 7.5 9C7.77614 9 8 9.22386 8 9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5ZM13.5 9C13.2239 9 13 9.22386 13 9.5C13 9.77614 13.2239 10 13.5 10C13.7761 10 14 9.77614 14 9.5C14 9.22386 13.7761 9 13.5 9ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM13.5 11C13.2239 11 13 11.2239 13 11.5C13 11.7761 13.2239 12 13.5 12C13.7761 12 14 11.7761 14 11.5C14 11.2239 13.7761 11 13.5 11ZM1 5.5C1 5.22386 1.22386 5 1.5 5C1.77614 5 2 5.22386 2 5.5C2 5.77614 1.77614 6 1.5 6C1.22386 6 1 5.77614 1 5.5ZM1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4C1.77614 4 2 3.77614 2 3.5C2 3.22386 1.77614 3 1.5 3ZM1 7.5C1 7.22386 1.22386 7 1.5 7C1.77614 7 2 7.22386 2 7.5C2 7.77614 1.77614 8 1.5 8C1.22386 8 1 7.77614 1 7.5ZM1.5 1C1.22386 1 1 1.22386 1 1.5C1 1.77614 1.22386 2 1.5 2C1.77614 2 2 1.77614 2 1.5C2 1.22386 1.77614 1 1.5 1ZM1 9.5C1 9.22386 1.22386 9 1.5 9C1.77614 9 2 9.22386 2 9.5C2 9.77614 1.77614 10 1.5 10C1.22386 10 1 9.77614 1 9.5ZM1.5 11C1.22386 11 1 11.2239 1 11.5C1 11.7761 1.22386 12 1.5 12C1.77614 12 2 11.7761 2 11.5C2 11.2239 1.77614 11 1.5 11Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default BorderBottomIcon;
