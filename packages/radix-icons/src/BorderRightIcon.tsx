import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const BorderRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BorderRightIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M11 2.9H3a.1.1 0 00-.1.1v9a.1.1 0 00.1.1h8V2.9zM2 3a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3z"
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
          d="M3 2a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V3a1 1 0 00-1-1H3z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M11 2.9H3a.1.1 0 00-.1.1v9a.1.1 0 00.1.1h8V2.9zM2 3a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BorderRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderRightIcon;
