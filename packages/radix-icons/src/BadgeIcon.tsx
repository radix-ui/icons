import * as React from 'react';
import { BaseIconProps } from './types';

interface BadgeIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const BadgeIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: BadgeIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="2.5" y="5.5" width="10" height="4" rx="2" stroke={color} />
        <path d="M5.5 7.5h4" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  console.error(`BadgeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BadgeIcon;
