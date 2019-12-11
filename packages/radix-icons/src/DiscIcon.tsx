import * as React from 'react';
import { BaseIconProps } from './types';

interface DiscIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const DiscIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: DiscIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 1.127a6.373 6.373 0 100 12.746 6.373 6.373 0 000-12.746zM2.077 7.5a5.423 5.423 0 1110.846 0 5.423 5.423 0 01-10.846 0zm6.875 0a1.451 1.451 0 11-2.903 0 1.451 1.451 0 012.903 0zm.95 0a2.401 2.401 0 11-4.803 0 2.401 2.401 0 014.803 0z"
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
          d="M13.398 7.5a5.898 5.898 0 11-11.796 0 5.898 5.898 0 0111.796 0z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.5 1.127a6.373 6.373 0 100 12.746 6.373 6.373 0 000-12.746zM2.077 7.5a5.423 5.423 0 1110.846 0 5.423 5.423 0 01-10.846 0zm6.875 0a1.451 1.451 0 11-2.903 0 1.451 1.451 0 012.903 0zm.95 0a2.401 2.401 0 11-4.803 0 2.401 2.401 0 014.803 0z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`DiscIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DiscIcon;
