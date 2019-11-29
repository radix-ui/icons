import * as React from 'react';
import { BaseIconProps } from './types';

interface TokensIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const TokensIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TokensIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.5 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 4.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10.5 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM9 4.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm-7 6a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM4.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6-1a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM9 10.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TokensIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TokensIcon;
