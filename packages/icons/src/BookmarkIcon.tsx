import * as React from 'react';
import { BaseIconProps } from './types';

interface BookmarkIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const BookmarkIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: BookmarkIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M7.5 4.5v16l5-4 5 4v-16h-10z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7 6.5h8" stroke={color} />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M4.5 2.5v10l3-2.5 3 2.5v-10h-6z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `BookmarkIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default BookmarkIcon;
