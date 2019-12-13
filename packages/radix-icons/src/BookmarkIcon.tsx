import * as React from 'react';
import { BaseIconProps } from './types';

interface BookmarkIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const BookmarkIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BookmarkIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4 2.5a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v10a.5.5 0 01-.82.384L7.5 10.651l-2.68 2.233A.5.5 0 014 12.5v-10zM5 3v8.432l2.18-1.816a.5.5 0 01.64 0L10 11.432V3H5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4.5 2.5v10l3-2.5 3 2.5v-10h-6z" fill={color} opacity=".2" />
        <path
          d="M4 2.5a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v10a.5.5 0 01-.82.384L7.5 10.651l-2.68 2.233A.5.5 0 014 12.5v-10zM5 3v8.432l2.18-1.816a.5.5 0 01.64 0L10 11.432V3H5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BookmarkIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BookmarkIcon;
