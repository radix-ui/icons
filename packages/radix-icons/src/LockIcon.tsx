import * as React from 'react';
import { BaseIconProps } from './types';

interface LockIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const LockIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: LockIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 1.125C5.567 1.125 4 2.692 4 4.625V6H3C2.44772 6 2 6.44772 2 7V13C2 13.5523 2.44772 14 3 14H12C12.5523 14 13 13.5523 13 13V7C13 6.44772 12.5523 6 12 6H11V4.625C11 2.692 9.433 1.125 7.5 1.125ZM10 6V4.625C10 3.24429 8.88071 2.125 7.5 2.125C6.11929 2.125 5 3.24429 5 4.625V6H10ZM4 7H3V13H12V7H11H10.5H4.5H4Z"
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
          d="M2.5 7C2.5 6.72386 2.72386 6.5 3 6.5H12C12.2761 6.5 12.5 6.72386 12.5 7V13C12.5 13.2761 12.2761 13.5 12 13.5H3C2.72386 13.5 2.5 13.2761 2.5 13V7Z"
          fill={color}
          opacity=".2"
        />
        <path
          d="M7.5 1.125C5.567 1.125 4 2.692 4 4.625V6H3C2.44772 6 2 6.44772 2 7V13C2 13.5523 2.44772 14 3 14H12C12.5523 14 13 13.5523 13 13V7C13 6.44772 12.5523 6 12 6H11V4.625C11 2.692 9.433 1.125 7.5 1.125ZM10 6V4.625C10 3.24429 8.88071 2.125 7.5 2.125C6.11929 2.125 5 3.24429 5 4.625V6H10ZM4 7H3V13H12V7H11H10.5H4.5H4Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`LockIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LockIcon;
