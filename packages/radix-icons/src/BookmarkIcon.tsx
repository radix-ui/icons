import * as React from 'react';
import { BaseIconProps } from './types';

interface BookmarkIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const BookmarkIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: BookmarkIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4 2.5C4 2.22386 4.22386 2 4.5 2H10.5C10.7761 2 11 2.22386 11 2.5V12.5C11 12.694 10.8878 12.8705 10.7121 12.9528C10.5364 13.0351 10.3289 13.0083 10.1799 12.8841L7.5 10.6509L4.82009 12.8841C4.67105 13.0083 4.46361 13.0351 4.28792 12.9528C4.11223 12.8705 4 12.694 4 12.5V2.5ZM5 3V11.4325L7.17991 9.61589C7.36533 9.46137 7.63467 9.46137 7.82009 9.61589L10 11.4325V3H5Z"
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
        <path d="M4.5 2.5V12.5L7.5 10L10.5 12.5V2.5H4.5Z" fill={color} opacity=".2" />
        <path
          d="M4 2.5C4 2.22386 4.22386 2 4.5 2H10.5C10.7761 2 11 2.22386 11 2.5V12.5C11 12.694 10.8878 12.8705 10.7121 12.9528C10.5364 13.0351 10.3289 13.0083 10.1799 12.8841L7.5 10.6509L4.82009 12.8841C4.67105 13.0083 4.46361 13.0351 4.28792 12.9528C4.11223 12.8705 4 12.694 4 12.5V2.5ZM5 3V11.4325L7.17991 9.61589C7.36533 9.46137 7.63467 9.46137 7.82009 9.61589L10 11.4325V3H5Z"
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
