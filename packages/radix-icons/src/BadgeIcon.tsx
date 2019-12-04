import * as React from 'react';
import { BaseIconProps } from './types';

interface BadgeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const BadgeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BadgeIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.5 6h6a1.5 1.5 0 010 3h-6a1.5 1.5 0 110-3zM2 7.5A2.5 2.5 0 014.5 5h6a2.5 2.5 0 010 5h-6A2.5 2.5 0 012 7.5zM5.5 7a.5.5 0 000 1h4a.5.5 0 000-1h-4z"
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
          d="M4.5 5a2.5 2.5 0 000 5h6a2.5 2.5 0 000-5h-6z"
          fill={color}
          opacity=".15"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M4.5 6h6a1.5 1.5 0 010 3h-6a1.5 1.5 0 110-3zM2 7.5A2.5 2.5 0 014.5 5h6a2.5 2.5 0 010 5h-6A2.5 2.5 0 012 7.5zM5.5 7a.5.5 0 000 1h4a.5.5 0 000-1h-4z"
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
