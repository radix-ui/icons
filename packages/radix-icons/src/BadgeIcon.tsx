import * as React from 'react';
import { BaseIconProps } from './types';

interface BadgeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const BadgeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: BadgeIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.5 6H10.5C11.3284 6 12 6.67157 12 7.5C12 8.32843 11.3284 9 10.5 9H4.5C3.67157 9 3 8.32843 3 7.5C3 6.67157 3.67157 6 4.5 6ZM2 7.5C2 6.11929 3.11929 5 4.5 5H10.5C11.8807 5 13 6.11929 13 7.5C13 8.88071 11.8807 10 10.5 10H4.5C3.11929 10 2 8.88071 2 7.5ZM5.5 7C5.22386 7 5 7.22386 5 7.5C5 7.77614 5.22386 8 5.5 8H9.5C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7H5.5Z"
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
        <path
          d="M4.5 5C3.11929 5 2 6.11929 2 7.5C2 8.88071 3.11929 10 4.5 10H10.5C11.8807 10 13 8.88071 13 7.5C13 6.11929 11.8807 5 10.5 5H4.5Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M4.5 6H10.5C11.3284 6 12 6.67157 12 7.5C12 8.32843 11.3284 9 10.5 9H4.5C3.67157 9 3 8.32843 3 7.5C3 6.67157 3.67157 6 4.5 6ZM2 7.5C2 6.11929 3.11929 5 4.5 5H10.5C11.8807 5 13 6.11929 13 7.5C13 8.88071 11.8807 10 10.5 10H4.5C3.11929 10 2 8.88071 2 7.5ZM5.5 7C5.22386 7 5 7.22386 5 7.5C5 7.77614 5.22386 8 5.5 8H9.5C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7H5.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BadgeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BadgeIcon;
